"use client";

import { useState, type FormEvent } from "react";
import { projectTypeOptions } from "@/content/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FIELD_CLASS =
  "w-full border border-ivory/20 bg-transparent px-4 py-3 text-ivory placeholder:text-ivory/35 transition-colors focus:border-accent focus:outline-none";
const LABEL_CLASS = "font-mono text-xs tracking-[0.14em] text-ivory/60 uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      workEmail: String(data.get("workEmail") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      budget: String(data.get("budget") ?? ""),
      details: String(data.get("details") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setErrorMessage(
          result.message ?? "Something went wrong sending your message. Please try again.",
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage(
        "Something went wrong sending your message. Please try again, or email us directly at work@bytedash.net.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-accent/40 bg-accent/10 p-8">
        <p className="text-2xl font-medium">Thanks — your message has been sent.</p>
        <p className="mt-3 max-w-md text-ivory/70">
          We&apos;ll reply from work@bytedash.net to let you know next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL_CLASS}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>

        <div>
          <label htmlFor="company" className={LABEL_CLASS}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="workEmail" className={LABEL_CLASS}>
            Work email
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>

        <div>
          <label htmlFor="projectType" className={LABEL_CLASS}>
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={`mt-2 ${FIELD_CLASS}`}
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option} className="bg-graphite">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={LABEL_CLASS}>
          Estimated budget <span className="normal-case text-ivory/40">(optional)</span>
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          placeholder="e.g. a range, or “not sure yet”"
          aria-describedby="budget-helper"
          className={`mt-2 ${FIELD_CLASS}`}
        />
        <p id="budget-helper" className="mt-2 text-sm text-ivory/45">
          This just helps us understand scope faster — it&apos;s fine to leave blank.
        </p>
      </div>

      <div>
        <label htmlFor="details" className={LABEL_CLASS}>
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          required
          aria-required="true"
          rows={6}
          placeholder="What are you building, improving, or trying to make clearer?"
          className={`mt-2 ${FIELD_CLASS}`}
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="border border-accent/40 bg-accent/10 px-4 py-3 text-sm">
          {errorMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-xs tracking-[0.14em] text-ivory uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Start a conversation"}
        </button>

        <p className="max-w-sm text-xs text-ivory/45">
          We&apos;ll only use what you share here to respond to your enquiry. See our{" "}
          <a href="/privacy" className="underline hover:text-ivory">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
