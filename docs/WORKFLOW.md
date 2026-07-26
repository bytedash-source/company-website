# Development Workflow

Conventions for working on this repo. Read this before committing changes.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `<type>(<scope>): <subject>`

- `<scope>` is optional — omit it for repo-wide changes.
- `<subject>` is imperative, present tense, lowercase, no trailing period (e.g. `add hero section`, not `Added hero section.`).
- Add a body when the change needs explaining — focus on *why*, not *what* (the diff already shows what).

### Types

| Type       | Use for                                                              |
|------------|-----------------------------------------------------------------------|
| `feat`     | A new user-facing feature                                             |
| `fix`      | A bug fix                                                              |
| `chore`    | Dependency bumps, tooling, config — no source behavior change          |
| `docs`     | Documentation only (README, CLAUDE.md, comments)                       |
| `style`    | Formatting/whitespace only, no code meaning change                     |
| `refactor` | Code change that neither fixes a bug nor adds a feature                |
| `perf`     | Performance improvement                                                |
| `test`     | Adding or correcting tests                                             |
| `build`    | Build system or external dependencies (npm, next.config.mjs)           |
| `ci`       | CI/CD configuration                                                    |

### Examples

```
feat: add contact form to landing page

fix(layout): correct mobile nav overflow

chore: upgrade Next.js 16 and React 19

docs: document git workflow conventions
```

## Branching

- `main` is always deployable.
- Feature branches: `<type>/<short-description>` (e.g. `feat/contact-form`, `fix/nav-overflow`), mirroring the commit type.

## Before committing

- Run `npm run lint` and fix any errors.
- Keep commits scoped to one logical change — don't bundle unrelated fixes with feature work.

## Rules for Claude Code

1. **Never commit without asking first.** Regardless of what triggered the change (a direct request, a bug fix, a refactor), always stop and ask the user before running `git commit`. This holds even if the user's original request implied a commit would happen.
2. **After finishing a task, state whether it's a good time to commit.** Give a short recommendation (commit now vs. keep working) based on scope — the goal is avoiding commits that bundle unrelated changes. This is advisory, not a substitute for rule 1.
3. **Log every code edit, committed or not.** See "Change log" below.

## Change log

Every code edit — whether or not it gets committed right away — must be recorded in `docs/changelogs/CURRENT.md`, the active log for work not yet committed.

- **Format:** for each edit, note the current git branch, what changed, and why. Append new entries; don't rewrite prior ones.
- **Rotation:** once the changes described in `CURRENT.md` are committed, rename that file to `docs/changelogs/<YYYY-MM-DD>-<short-slug>.md` (date of commit, slug describing the change) and commit it alongside the code change. Then create a fresh, empty `docs/changelogs/CURRENT.md` for subsequent work. This keeps any single log file small and gives each commit a permanent, more detailed rationale trail than the commit message alone.
- Archived log files under `docs/changelogs/` are kept in git permanently — do not delete them.

Suggested entry format inside `CURRENT.md`:

```markdown
# Changelog — in progress

**Branch:** `feat/contact-form`

## 2026-07-26
- **What:** Added `ContactForm` component and wired it into `app/page.tsx`.
  **Why:** Requested by user to replace the "coming soon" placeholder with a working lead-capture form.
```
