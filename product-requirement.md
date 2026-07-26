# ByteDash Website (bytedash.net) — Product Requirements

**Status:** Draft v1.1 · 26 กรกฎาคม 2026
**Repo:** `bytedash-website` (Next.js 16 App Router, ปัจจุบันยังเป็น create-next-app scaffold เปล่า ยังไม่เริ่ม build เนื้อหาจริง)
**อ้างอิงสแต็ก:** โครงสร้าง/สแต็กฝั่ง frontend อ้างอิงจากโปรเจกต์พี่น้อง `pea_loan_website/frontend` (ดูหัวข้อ 6) เพื่อให้ทีมใช้ pattern เดียวกันข้ามโปรเจกต์
**แหล่งข้อมูลเนื้อหาต้นฉบับ:** `Company Profile Presentation.pdf` (Canva, 10 หน้า, สิงหาคม 2024)
**Design reference:** Linear (structure/credibility) + Taste Labs (personality) — ดูหัวข้อ 1.4 และ 5

---

## 1. ภาพรวมผลิตภัณฑ์

### 1.1 คืออะไร

เว็บไซต์บริษัท (corporate/marketing site) ของ **ByteDash** — บริษัทพัฒนาแอปพลิเคชัน (mobile + web) และ UX/UI design โดยมีเป้าหมายหลักคือการนำเสนอตัวตนบริษัท บริการ ผลงาน และเป็นช่องทางให้ลูกค้าใหม่ติดต่อเข้ามา (lead generation) ไม่ใช่ระบบที่มี business logic ซับซ้อนแบบ PEA Loan — เป็น **content/marketing site** เป็นหลัก

### 1.2 กลุ่มผู้ใช้งานเป้าหมาย

| กลุ่ม | ความต้องการ |
|---|---|
| **ผู้มุ่งหวังเป็นลูกค้า** (business owner, product owner ที่มองหาทีมพัฒนาแอป) | อยากรู้ ByteDash ทำอะไรได้บ้าง เคยทำอะไรมาแล้ว (portfolio), ติดต่อง่าย |
| **ผู้สมัครงาน/พาร์ทเนอร์** (รอง) | อยากรู้จักวัฒนธรรม/วิสัยทัศน์บริษัท |

### 1.3 เป้าหมายของเว็บไซต์

- สื่อสาร vision/mission/service ให้ชัดเจนภายในหน้าเดียว (scroll) หรือไม่กี่คลิก
- โชว์ผลงาน/ลูกค้าเดิมเพื่อสร้างความน่าเชื่อถือ (social proof)
- มีช่องทางติดต่อที่ใช้งานง่าย (contact form / email / ที่อยู่)
- โหลดเร็ว, responsive, รองรับ dark mode (scaffold ปัจจุบันมี `dark:` class อยู่แล้ว)

### 1.4 Brand Positioning (ยืนยัน 2026-07-26)

> **"ความน่าเชื่อถือแบบบริษัทเทคฯ ผสานความละเอียดของงานออกแบบ"**

ทิศทางที่ยืนยันแล้ว: ผสม 2 reference คนละสัดส่วน แทนที่จะเลียนแบบใดแบบหนึ่งทั้งดุ้น

| Reference | จุดเด่นที่หยิบมาใช้ | สัดส่วน | ใช้กับส่วนไหน |
|---|---|---|---|
| **Linear** | ลำดับข้อมูลที่เป็นระบบ: Hero กระชับ → เหตุผลที่ต่าง → ความสามารถ → หลักฐาน → CTA — ให้ความรู้สึกมั่นใจ มีมาตรฐานสูง | **70%** | Service, Process, Case Study — โครงสร้าง/ลำดับการเล่าเรื่อง |
| **Taste Labs** | สื่อ "วิสัยทัศน์และรสนิยม" ผ่าน typography ใหญ่, ภาพที่มี character, copy ที่มีน้ำเสียงชัด | **30%** | Hero, Intro/Value prop — personality ที่ทำให้รู้สึกว่า ByteDash เป็น partner ที่เข้าใจ product/user ไม่ใช่แค่ทีมรับเขียนโปรแกรม |

เหตุผลของสัดส่วนนี้: ถ้าเอียงไป Linear ล้วนจะดู "แข็ง" เกินไปสำหรับบริษัทที่ขายงานออกแบบด้วย ถ้าเอียงไป Taste Labs ล้วนจะดู abstract จนไม่เห็นผลงานจริง — 70/30 ทำให้โครงสร้างยังน่าเชื่อถือแต่มีบุคลิกที่จำได้

---

## 2. ขอบเขตงาน (Scope) — v1

| ส่วน | สถานะ |
|---|---|
| Static marketing site (หน้า Home ครบทุก section) | **ยังไม่เริ่ม** — repo เป็น create-next-app scaffold เปล่า |
| Contact form ที่ส่งอีเมลได้จริง | **ยังไม่เริ่ม** — ต้องเลือก backend (ดูข้อ 7 open questions) |
| CMS สำหรับแก้เนื้อหาเอง | **นอก scope v1** — เนื้อหามาจาก company profile ที่ค่อนข้างนิ่ง ใส่เป็น static content/JSON ในโค้ดไปก่อน |
| ระบบ auth/database | **ไม่ต้องมี** — เว็บนี้ไม่มีส่วนที่ต้อง login หรือเก็บ user data |

### 2.1 โครงสร้างหน้า (Sitemap) — ยืนยัน 2026-07-26

Single-page marketing site พร้อม anchor nav (nav item ตรงกับชื่อ section) — ลำดับ section อ้างอิง pattern Linear (Hero → เหตุผลที่ต่าง → ความสามารถ → หลักฐาน → CTA):

```
Header
  Logo: BYTE DASH
  Nav: Services / Process / Work / About / Contact
  CTA หลัก: "Let's build together" / "Start a project"

Hero
  Headline: "Digital products engineered for performance. Designed for people."
  Supporting copy: ทีมพัฒนา Mobile, Web และ UX/UI ที่สร้างผลิตภัณฑ์เร็ว ใช้งานง่าย และขยายต่อได้
  CTA: "Explore our work" / "Talk to us"
  Visual: product UI motion / device mockup / abstract technical graphic (ไม่ใช่ stock photo)

Intro / Value proposition
  สรุปจาก About Our Company เป็น 3 หลัก: Performance / User-Centric Design / Quality
  การ์ดหรือ typography ใหญ่ + คำอธิบายสั้นต่อหลัก

Services
  Mobile Application Development
  Web Application Development
  UX/UI Design
  Prototyping & Wireframing
  Digital / Technology Consulting
  → แต่ละบริการเขียนเป็นผลลัพธ์ที่ลูกค้าได้ ไม่ใช่แค่สิ่งที่ทีมทำ

How we work
  Discovery → Design → Development → Testing → Launch & Optimization
  (แยก Design ออกจาก Discovery อย่างชัดเจน แม้ presentation เดิมรวมไว้ด้วยกัน — เพราะ design เป็นจุดแข็งของแบรนด์)
  Timeline หรือ step-based interaction แบบเรียบคม

Selected work / Client stories
  IEA — Responsive web application, Asset Management
  TERMFAI — Cross-platform mobile application, EV Platform and Shopping
  → ต่อรายการ: screenshot, บทบาทของ ByteDash, โจทย์ (problem), แนวทางแก้ (approach), ผลลัพธ์เชิงตัวเลขถ้ามี (results)
  → ส่วนนี้สำคัญที่สุดต่อการสร้างความเชื่อมั่น (evidence ตาม Linear pattern)

About / Vision & Mission
  เขียนใหม่ให้กระชับ — ไม่วางข้อความเต็มจาก presentation

Final CTA & Contact
  ข้อความ: "Have an idea worth building?"
  Email: work@bytedash.net
  ที่อยู่บริษัท + ช่องทาง social (ถ้ามี)

Footer
  แบบเรียบ — ลิงก์หลัก + ข้อมูลลิขสิทธิ์
```

**ผล**: เท่ากับ resolve open question เดิม "single-page vs multi-page" ไปทาง **single-page scroll เป็นหลัก** — ยกเว้นว่า "Selected work" อาจต้องมีหน้า case study แยกต่อโปรเจกต์ในอนาคต เพราะเนื้อหา (โจทย์/แนวทาง/ผลลัพธ์) ลึกกว่าที่ scroll section เดียวจะพอ — ทำเป็น v1 แบบสรุปในหน้าเดียวก่อน ค่อยแตกเป็น `/work/[slug]` ทีหลังถ้าคอนเทนต์เยอะขึ้น (ดูข้อ 7)

---

## 3. Content Plan — ต่อ section (เรียงตาม sitemap ข้อ 2.1)

> เนื้อหาต้นฉบับทั้งหมดถอดจาก `Company Profile Presentation.pdf` ไว้ท้ายหัวข้อนี้ (3.9) เป็น reference — ส่วนด้านบนคือทิศทาง copy ที่ปรับใหม่ให้เข้ากับ positioning ข้อ 1.4

### 3.1 Hero

- **Headline (ยืนยัน):** "Digital products engineered for performance. Designed for people."
- **Supporting copy (ร่าง):** "ทีมพัฒนา Mobile, Web และ UX/UI ที่สร้างผลิตภัณฑ์เร็ว ใช้งานง่าย และขยายต่อได้"
- **CTA:** "Explore our work" (ไป Selected work) / "Talk to us" (ไป Contact)
- **Visual:** product UI motion, device mockup, หรือ abstract technical graphic — **ห้าม stock photo** (ตรงกับ imagery guideline ข้อ 5.4)

### 3.2 Intro / Value proposition

สรุปจาก About Our Company เดิมให้เหลือ 3 หลัก (ตัดจาก 4 การ์ดเดิมที่มี Innovation ด้วย — รวม Innovation เข้ากับ narrative รวมแทนที่จะแยกการ์ด เพื่อไม่ให้ยาวเกินไป):

| หลัก | คำอธิบายสั้น (ร่าง) |
|---|---|
| **Performance** | Built for speed, reliability, and scalability |
| **User-Centric Design** | Designed around real user behavior, not just requirements |
| **Quality** | Highest standards from concept to deployment |

นำเสนอด้วยการ์ดหรือ typography ใหญ่ (ไม่ใช่ paragraph ยาว) ตาม Taste Labs influence

### 3.3 Services

5 บริการเดิม แต่ copy ต้องเป็น **ผลลัพธ์ที่ลูกค้าได้** ไม่ใช่ feature list — ตัวอย่างทิศทาง (ร่าง ต้อง review):

| บริการ | เดิม (feature-focused) | ทิศทางใหม่ (outcome-focused, ร่าง) |
|---|---|---|
| Mobile Application Development | High-performance mobile apps for iOS/Android | แอปที่ผู้ใช้เปิดซ้ำ ไม่ใช่แค่ดาวน์โหลดแล้วลืม |
| Web Application Development | Fast, secure, responsive web apps | เว็บแอปที่รับโหลดจริงได้ตั้งแต่วันแรก ไม่ต้อง rebuild ตอนโต |
| UX/UI Design | Intuitive, visually appealing interactions | ดีไซน์ที่ลดขั้นตอนที่ผู้ใช้ต้องคิด ไม่ใช่แค่สวย |
| Prototyping and Wireframing | Detailed prototypes before development | ตัดสินใจถูกก่อนลงทุนพัฒนาจริง |
| Consulting | Strategic consulting for digital vision | ช่วยตัดสินใจว่าอะไรควรสร้าง ก่อนบอกว่าจะสร้างอย่างไร |

### 3.4 How we work

**5 ขั้นตอน (เปลี่ยนจากเดิม 4 ขั้นตอน):**

```
Discovery → Design → Development → Testing → Launch & Optimization
```

หมายเหตุ: presentation ต้นฉบับรวม Design ไว้ในขั้น Discovery — เว็บไซต์นี้แยกออกมาชัดเจนเป็นขั้นของตัวเอง เพราะ design เป็นจุดแข็งของแบรนด์ที่ต้องการเน้น (ตรงกับ positioning ข้อ 1.4) นำเสนอด้วย timeline หรือ step-based interaction เรียบคม ไม่ใช่แค่ 5 การ์ดเรียงกัน

### 3.5 Selected work / Client stories

| ลูกค้า | โปรเจกต์ | รายละเอียดเดิม | ต้องเพิ่ม (ยังไม่มีข้อมูล) |
|---|---|---|---|
| Asset Activator Co., Ltd. | IEA | Responsive web application, Asset management | Screenshot, บทบาท ByteDash, โจทย์, แนวทางแก้, ผลลัพธ์เชิงตัวเลข |
| Synergy Technology Co., Ltd. | TERMFAI (Available 2025) | Cross-platform mobile application, EV Platform and Shopping | Screenshot, บทบาท ByteDash, โจทย์, แนวทางแก้, ผลลัพธ์เชิงตัวเลข |
| การทางพิเศษแห่งประเทศไทย (EXAT) | EXAT LinkedBiz | Content management system, Business content and eCommerce | Screenshot, บทบาท ByteDash, โจทย์, แนวทางแก้, ผลลัพธ์เชิงตัวเลข |

**Gap ที่ต้องปิดก่อน build ส่วนนี้ได้จริง:** ตอนนี้มีแค่ชื่อ+คำอธิบาย 1 บรรทัดต่อโปรเจกต์ ยังไม่มี screenshot, ไม่มีรายละเอียด problem/approach/result — ต้องขอจากทีม sales/ลูกค้าก่อน (ดูข้อ 7) — ส่วนนี้ระบุไว้ชัดว่าสำคัญที่สุดต่อความน่าเชื่อถือของเว็บ (evidence ตาม Linear pattern) จึงไม่ควร build แบบข้อมูลไม่ครบ

### 3.6 About / Vision & Mission

เขียนใหม่ให้กระชับกว่าต้นฉบับ (ดู 3.9.2–3.9.3 สำหรับข้อความเต็มเดิม) — ไม่จำเป็นต้องวางเต็มทุกประโยค ตัวอย่างทิศทางย่อ (ร่าง):

- **Vision (ย่อ):** ผู้นำด้าน application development ที่ผสานเทคโนโลยีสมัยใหม่กับผลิตภัณฑ์ที่ใช้งานง่าย
- **Mission (ย่อ):** เปลี่ยน digital presence ของธุรกิจให้เป็นประสบการณ์ที่สร้าง engagement และความสำเร็จ

### 3.7 Final CTA & Contact

- ข้อความ CTA: **"Have an idea worth building?"**
- Email: `work@bytedash.net`
- ที่อยู่: 14/1492 หมู่ 13 ตำบลบางบัวทอง อำเภอบางบัวทอง จังหวัดนนทบุรี 11110
- ช่องทาง social — **ยังไม่มีข้อมูล** ว่ามีบัญชีจริงหรือไม่ (ดูข้อ 7)

### 3.8 Footer

แบบเรียบ — ลิงก์หลัก (Services / Process / Work / About / Contact ซ้ำจาก nav) + ข้อความลิขสิทธิ์ (`© [ปี] ByteDash. All rights reserved.` หรือเทียบเท่า)

### 3.9 เนื้อหาต้นฉบับ (ถอดจาก Company Profile PDF — reference เท่านั้น)

#### 3.9.1 About
> BYTE DASH is a leading application development company specializing in creating high-performance, user-centric digital solutions. With a deep commitment to innovation and excellence, we blend modern technology with cutting-edge UX/UI design to deliver applications that are not only functional but also engaging and intuitive.

#### 3.9.2 Vision
> To become a global leader in the field of application development, recognized for our innovative approach and commitment to quality, as well as our ability to seamlessly integrate modern technology into user-friendly applications.

#### 3.9.3 Mission
> Our mission is to empower businesses by transforming their digital presence through innovative and efficient application solutions. We aim to create seamless user experiences that drive engagement, foster customer loyalty, and contribute to the overall success of our clients.

#### 3.9.4 จุดขายเดิม (4 การ์ด — เหลือ 3 ในเว็บใหม่ ดู 3.2)
- **Performance** — built for speed, reliability, and scalability
- **User-Centric Design** — design with the end-user in mind
- **Quality** — highest standards from concept to deployment
- **Innovation** — embrace latest technologies

> **หมายเหตุ:** ตอนนี้บริษัทกำลังทำโปรเจกต์ `PEA Loan` (การไฟฟ้าส่วนภูมิภาค) อยู่ด้วย — ยังไม่ได้ยืนยันว่าจะใส่เป็นผลงานในหน้า Selected work ด้วยหรือไม่ (โปรเจกต์ยังไม่เสร็จ/ยังไม่ได้ sign-off ให้เผยแพร่) ดูข้อ 7

---

## 4. Non-goals (v1)

- ไม่มีระบบ login/user account
- ไม่มี CMS/admin panel สำหรับแก้เนื้อหา (ใส่ตรงในโค้ดไปก่อน เพราะเนื้อหาเปลี่ยนไม่บ่อย)
- ไม่มี blog (ยังไม่มีเนื้อหาให้ทำ — ถ้าจะทำเป็นเฟสถัดไป)
- ไม่มี multi-language switcher (v1 ใช้ภาษาเดียว — ต้องยืนยันว่าเป็นอังกฤษหรือมีไทยด้วย ดูข้อ 7)
- ไม่มีหน้า case study แยกต่อโปรเจกต์ใน v1 (ดูข้อ 2.1) — สรุปในหน้าเดียวก่อน

---

## 5. Mood & Tone — แนวทางการออกแบบ

> ยืนยันจากผู้ใช้ (2026-07-26) — ใช้เป็น design direction หลักสำหรับทุกหน้า ไม่ใช่แค่ homepage ดู reference blend เต็มในข้อ 1.4

### 5.1 Mood & Tone

- **Mood:** Modern, precise, confident, human-centered
- **Tone (การเขียนคอนเทนต์/copywriting):** Professional แต่ไม่เป็นทางการเกินไป ชัดเจน ตรงไปตรงมา เน้นผลลัพธ์ — **หลีกเลี่ยงคำกว้างๆ ที่ไม่มีหลักฐานรองรับ** เช่น "innovative solutions" ลอยๆ โดยไม่มีตัวอย่าง/ตัวเลข/ผลงานประกอบ (สะท้อนในข้อ 3 แล้ว — copy ทุกจุดเกลาใหม่ให้เป็นรูปธรรม ไม่ copy ทั้งดุ้นจาก company profile)

### 5.2 สี (Color)

| บทบาท | แนวทาง |
|---|---|
| พื้นหลักหลัก | Deep navy / ink **หรือ** off-white — เลือกทางใดทางหนึ่งเป็นหลักเพื่อความพรีเมียมและอ่านง่าย (ต้องยืนยันว่าเว็บเป็น dark-first หรือ light-first ดูข้อ 7) |
| Accent | Electric blue หรือ aqua — ใช้กับ CTA, ลิงก์, ไฮไลต์ เพื่อสื่อความเป็น digital/innovation |

Mapping เข้ากับ dark mode ที่ scaffold มีอยู่แล้ว (`dark:` class ใน [layout.tsx](./src/app/layout.tsx)): ให้กำหนดเป็น Tailwind theme tokens (เช่น `--color-ink`, `--color-accent`) ใน `globals.css` แทนการ hardcode สี เพื่อให้สลับ light/dark ได้สอดคล้องกัน

### 5.3 Typography

- ตัวใหญ่ (headline scale สูง), มีระยะหายใจ (generous white space/line-height) — ตรงกับ Taste Labs influence (ข้อ 1.4)
- Headline สั้น หนักแน่น ตรงประเด็น — ไม่ใช่ประโยคยาวแบบ marketing copy ทั่วไป (ดูตัวอย่าง hero headline ข้อ 3.1)

**Font stack (ยืนยัน 2026-07-26):**

| บทบาท | ฟอนต์ | ใช้กับ |
|---|---|---|
| ภาษาไทย | Google Sans | เนื้อหาไทยทั้งหมด (headline/body/UI) — ใช้ตัวเดียวกับฝั่งอังกฤษ เพราะ subset `thai` มาพร้อมในฟอนต์เดียวกัน |
| Headline / UI ภาษาอังกฤษ | Google Sans | Hero headline, section title, ปุ่ม, nav |
| Label / รายละเอียดเชิงเทคนิค | Google Sans Code | tag, timestamp, code-like label, technical spec ในหน้า Selected work |

เหตุผล: ให้ผลลัพธ์ modern, approachable, รู้สึกเป็น tech product มากกว่า serif เดิม พร้อมรองรับไทย–อังกฤษในหน้าเดียวกันได้กลมกลืน (ตรงกับ nav/copy ที่ผสมสองภาษาอยู่แล้วในข้อ 2.1/3)

**อัปเดต implementation (2026-07-26):** "Google Sans" ถูกเผยแพร่บน Google Fonts สาธารณะแล้ว (fonts.google.com/specimen/Google+Sans) และมีอยู่ในแคตตาล็อกของ `next/font/google` ใน Next.js เวอร์ชันที่ใช้อยู่ — import ได้ตรงๆ ผ่าน `Google_Sans` โดยไม่ต้องพึ่ง Geist เป็น fallback อีกต่อไป ฟอนต์นี้มี subset `thai` ในตัวเอง จึงไม่ต้องหาฟอนต์ไทยแยกมาจับคู่ (ไม่มี "Google Sans Thai" เป็นฟอนต์แยกต่างหากบน Google Fonts — subset ไทยรวมอยู่ใน "Google Sans" ตัวเดียว) ส่วน mono/technical label ใช้ "Google Sans Code" (weights 300–800 + variable) ซึ่งเป็นตัวที่ใกล้เคียง "Google Sans Mono" ที่สุดที่เผยแพร่จริง ("Google Sans Mono" เองยังไม่มีบน Google Fonts) — implement แล้วใน [layout.tsx](./src/app/layout.tsx)/[globals.css](./src/app/globals.css)

- ปิด open question ข้อ 12 แล้ว (ดูข้อ 7)

### 5.4 ภาพและองค์ประกอบภาพ (Imagery)

- ใช้ **product UI, prototype, flow, technical diagram** เป็นภาพหลักของเว็บ (เช่น screenshot จริงของ IEA/TERMFAI, wireframe, system diagram) — ไม่ใช่ stock photo
- **ห้ามใช้** stock photo แนว "ทีมประชุมยิ้มให้กล้อง" หรือภาพทั่วไปที่ไม่เกี่ยวกับงานจริง
- ผลต่อ scope: หน้า "Selected work" (ข้อ 2.1, 3.5) ต้องมี screenshot/mockup จริงของ IEA และ TERMFAI ประกอบ ไม่ใช่แค่ชื่อโปรเจกต์ล้วนๆ — ถ้ายังไม่มี asset เหล่านี้ ต้องขอจากลูกค้า/ทีมก่อน build ส่วนนี้ (gap เดียวกับข้อ 3.5)

### 5.5 Motion

- นุ่มและ purposeful เท่านั้น — reveal on scroll, parallax เบาๆ, UI transition ระหว่าง state
- ไม่ใช่ motion เพื่อความหวือหวา (ตรงกับที่เลือก `motion` library ไว้ในข้อ 6 — ใช้แบบ subtle ไม่ aggressive)

### 5.6 สิ่งที่ต้องหลีกเลี่ยง

- Stock photo แนวทีมประชุม/ยิ้มให้กล้อง
- คำกว้างๆ ไม่มีหลักฐาน เช่น "innovative solutions", "cutting-edge", "world-class" โดยไม่มีตัวอย่าง/ผลงาน/ตัวเลขรองรับ
- Layout แน่น ไม่มีที่ว่าง (ขัดกับ mood "precise, confident" ที่ต้องการความหายใจ)
- โครงสร้างที่ abstract เกินไปจนไม่เห็นผลงานจริง (สิ่งที่ Taste Labs 100% จะเสี่ยงเป็น — เหตุผลที่ล็อกไว้ที่ 30% ตามข้อ 1.4)

---

## 6. Tech Stack (เสนอ — อ้างอิงจาก `pea_loan_website/frontend`)

เหตุผลที่อ้างอิงสแต็กเดียวกัน: ทีมมี pattern/experience อยู่แล้วจากการ build PEA Loan ใช้ต่อได้เลยโดยไม่ต้องเรียนรู้ของใหม่ และทั้งสองโปรเจกต์ใช้ Next.js 16 อยู่แล้ว (repo นี้ scaffold มาด้วย Next 16.2.12 ตรงกัน)

| Layer | Choice | หมายเหตุ |
|---|---|---|
| Framework | Next.js 16 (App Router) | มีอยู่แล้วใน scaffold — **หมายเหตุสำคัญ:** ตาม [`AGENTS.md`](./AGENTS.md) Next.js เวอร์ชันนี้มี breaking changes จาก training data ต้องอ่าน `node_modules/next/dist/docs/` ก่อนเขียนโค้ดจริง |
| Styling | Tailwind CSS 4 | มีอยู่แล้วใน scaffold |
| UI components | shadcn/ui (`@base-ui/react`) | ยังไม่ได้ติดตั้ง — เพิ่มตามต้องใช้ (button, card, form, dialog สำหรับ contact) |
| Forms | react-hook-form + zod | สำหรับ contact form validation |
| Animation | motion | สำหรับ scroll-reveal/transition เบาๆ, timeline interaction ในส่วน "How we work" |
| Dark mode | next-themes | scaffold มี `dark:` class อยู่แล้วแต่ยังไม่มี toggle |
| Icons | lucide-react | ใช้ร่วมกับ shadcn/ui pattern เดียวกับ PEA Loan |
| Hosting/Deploy | Vercel (เดา จาก scaffold มี "Deploy Now" ปุ่ม default) | **ยังไม่ยืนยัน** ดูข้อ 7 |

**ไม่ต้องมี** backend แยก (NestJS/Prisma/PostgreSQL) แบบ PEA Loan — เว็บนี้เป็น static/marketing content ล้วน ยกเว้น contact form endpoint ซึ่งทำเป็น Next.js Route Handler (`src/app/api/contact/route.ts`) เชื่อมต่อ email service ได้โดยไม่ต้องมี backend แยก

---

## 7. Open Questions

| # | คำถาม | สถานะ |
|---|---|---|
| 1 | Contact form ส่งอีเมลผ่านอะไร (Resend / SendGrid / SMTP บริษัท / Formspree ฯลฯ) — ต้องมี API key/credential | เปิดอยู่ |
| 2 | ~~Single-page scroll หรือแยกหลายหน้า~~ | **Resolved (2026-07-26):** single-page scroll เป็นหลัก ยกเว้น "Selected work" อาจแตกเป็น `/work/[slug]` ในอนาคตถ้าคอนเทนต์เยอะขึ้น (ดูข้อ 2.1) |
| 3 | ภาษาเดียว (อังกฤษ) หรือมีไทยด้วย — ต้อง i18n ไหม | **น่าจะเป็นสองภาษาผสมในหน้าเดียว** — font stack ข้อ 5.3 ยืนยันแล้วว่าต้องรองรับไทย+อังกฤษพร้อมกัน แต่ยังไม่ชัดว่าเป็น mixed-content หน้าเดียว หรือมี toggle เลือกภาษา — เปิดอยู่ |
| 4 | จะใส่โปรเจกต์ `PEA Loan` เป็นผลงานในหน้า Selected work ด้วยหรือไม่ (โปรเจกต์ยังไม่เสร็จ) | เปิดอยู่ |
| 5 | มี brand asset จริง (โลโก้ SVG, สีแบรนด์ที่แน่นอน เช่น hex code ของ navy/aqua) นอกเหนือจากที่เห็นใน PDF หรือไม่ — ฟอนต์ resolved แล้ว (ข้อ 5.3) | เปิดอยู่ (เฉพาะโลโก้/สี) |
| 6 | Hosting/deploy target (Vercel หรือ self-host) และ domain `bytedash.net` ชี้มาที่ repo นี้แล้วหรือยัง | เปิดอยู่ |
| 7 | ต้องการ analytics (GA4/Plausible) หรือ SEO requirement เฉพาะ (sitemap, OG image ต่อหน้า) ไหม | เปิดอยู่ |
| 8 | Dark-first หรือ light-first (ข้อ 5.2 เสนอทั้งสองแบบ ยังไม่ได้เลือก) | เปิดอยู่ |
| 9 | **สำคัญ — บล็อกการ build ส่วน Selected work:** screenshot จริงของ IEA/TERMFAI, บทบาท ByteDash ในแต่ละโปรเจกต์, โจทย์/แนวทางแก้/ผลลัพธ์เชิงตัวเลข — ยังไม่มีข้อมูลเลย ต้องขอจากทีม sales/ลูกค้า | เปิดอยู่ |
| 10 | มีช่องทาง social จริงหรือไม่ (LinkedIn/Facebook/IG) สำหรับใส่ใน footer/contact | เปิดอยู่ |
| 11 | CTA "Let's build together" (header) vs "Start a project" — และ "Explore our work" vs "Talk to us" (hero) เลือกอันไหนเป็นหลัก หรือใช้คู่กันตามตำแหน่ง | เปิดอยู่ — ระหว่างนี้ draft ไว้ทั้งคู่ตามที่ได้รับมา |
| 12 | ~~Google Sans / Google Sans Thai มี license ใช้งานจริงหรือไม่~~ | **Resolved (2026-07-26):** "Google Sans" เผยแพร่บน Google Fonts สาธารณะแล้ว พร้อม subset ไทยในตัว ไม่ต้อง fallback เป็น Geist อีกต่อไป — implement แล้วผ่าน `next/font/google` (ดูข้อ 5.3) |

---

## 8. หมายเหตุด้านเทคนิค

- Repo ปัจจุบัน = create-next-app default scaffold ล้วนๆ (`src/app/page.tsx`, `layout.tsx` ยังเป็นเนื้อหา default ของ Next.js ไม่เกี่ยวกับ ByteDash เลย) — งานที่เหลือทั้งหมดคือ build จริง
- **ก่อนเขียนโค้ดใดๆ ต้องอ่าน `node_modules/next/dist/docs/` ก่อน** ตามที่ระบุใน [`AGENTS.md`](./AGENTS.md) เพราะ Next.js เวอร์ชันนี้ (16.2.12) มี API/convention ที่เปลี่ยนจากที่ training data รู้จัก
- ลำดับแนะนำ: ปิด open question #1, #3, #9 ก่อน (กระทบ route/backend และบล็อกส่วนที่สำคัญที่สุดของเว็บ) → scaffold layout + sitemap ข้อ 2.1 → ใส่เนื้อหาจากข้อ 3 (section ที่ข้อมูลครบ: Hero, Intro, Services, How we work, About) → Selected work เมื่อข้อ 9 ปิด → contact form → SEO/metadata → deploy
