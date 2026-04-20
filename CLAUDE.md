# pobocek.dev — Coding Agent Context Brief

**Purpose of this document:** Paste this at the start of any Claude Code / coding-agent session that will make changes to the pobocek.dev website. It gives the agent everything it needs to make correct positioning, copy, and structural decisions without asking 20 clarifying questions.

---

## 1. Project snapshot

- **Site:** pobocek.dev
- **Owner:** Frantisek Pobocek (Frank), solo developer based in Bratislava, Slovakia
- **Languages:** EN + SK (bilingual — keep parity when editing copy)
- **Current stack (verified):** Astro v5, Tailwind v3, static/SSG, Cloudflare Pages
- **Current status:** live, professionally designed, fast-loading, works well. **Do not redesign.** Only extend, restructure, and rewrite copy per the directives below.

## 2. What this site needs to be

A **consultancy landing page + portfolio + founder-availability surface** for a solo technical consultant. Not a blog-first site, not a portfolio-only site, not a corporate agency site. The job of the site is to:

1. Convert cold inbound (from LinkedIn, cold outreach replies, referrals) into booked intro calls.
2. Credential the owner for founder/co-founder opportunities with non-technical founders.
3. Serve as the hub where case studies, blog posts, and the SaaS (Eviro) live and cross-link.

## 3. Positioning (critical — read before writing any copy)

**Primary offering:** AI automation and custom web apps for ambitious teams.

**Stack positioning:** React · Next.js · Node.js · TypeScript · n8n · LLMs (OpenAI, Anthropic) · PostgreSQL · Tailwind.

**Target buyer language:** "ambitious teams," "teams," "founders." **DO NOT** use "SMB," "mid-market," "enterprise," or any size-specific ICP language. The owner has explicitly rejected buyer-size narrowing. Positioning is sharp on *what is built*, broad on *who buys it*.

> **Frank override (active — do not revert):** The brief's original phrasing was "for businesses across Europe." Frank has dropped geo-locked framing from the primary positioning. The hero tagline is now **"AI automation and custom web apps for ambitious teams."** "EU clients" is no longer featured in hero trust signals or the stats grid. Europe stays as a factual context (Frank is based in Bratislava; most past clients are EU) but never as a positioning constraint on the homepage or in meta.

**What to drop from primary positioning (important):**
- **Web3 / Solidity / dApps** — keep on CV and in historical "About" chronology only, never in the hero, services, or headline stack list.
- **Generic "web development"** as standalone — web apps are part of the offer but always paired with AI.
- **"Full-stack developer"** as a self-label — the label is "AI automation & product engineer" or "technical consultant."

**What to lead with:**
- AI-powered workflows, internal tools, and web applications
- n8n + LLM implementations
- Custom web apps and SaaS (Eviro is proof)
- 10+ years of production code

## 4. Three offer tiers (the services page should publish these)

These are the canonical productized offers. When writing service pages, copy, or pricing tables, use these exact tiers:

| Tier | Name | Price | Scope | Duration |
|---|---|---|---|---|
| 1 | AI Automation Roadmap | €2,500 | Audit + written report identifying 3–5 high-ROI automations with cost/time/payback estimates | 2 weeks |
| 2 | AI Implementation | from €6,000 | Fixed-scope build: chatbot / RAG / CRM automation / internal tool, delivered with docs | 4–6 weeks |
| 3 | AI Operations Retainer | from €1,500/month | Ongoing monitoring, iteration, new workflows | Min 3 months |

**Fallback hourly rate** (only for ad-hoc direct contracts, never featured on public pricing): €60–80/hour.

## 5. Founder / co-founder track (secondary surface)

There should be a dedicated page (`/partner` or `/founders`) for founder-track positioning. Content outline:

- **Positioning:** "I partner with founders and technical leaders building AI-powered products."
- **Three engagement models:**
  - **Technical co-founder** (hybrid cash + meaningful equity, 20–25 hrs/week, 6–12 months)
  - **Fractional CTO** (cash-heavy + advisor equity, 5–10 hrs/week)
  - **Equity-only co-founder** — do NOT advertise this publicly; handled in DMs only
- **What he looks for:** full-time committed founders, evidence of market demand (revenue/LOIs/waitlist), AI-first or Next.js-friendly stack, EU-based or EU-timezone-friendly.
- **What he does NOT look for:** idea-stage only, equity-only full-time builds, pure crypto/web3 plays.
- **DO NOT publish specific equity percentages.** Those are negotiated in private.

## 6. Hero copy (current implementation)

```
# Frantisek Pobocek
## AI automation and custom web apps for ambitious teams.

From MVPs to production SaaS — I build AI-powered workflows,
internal tools, and web applications that ship.
React · Next.js · Node.js · n8n · LLMs.

10+ years · 18+ projects shipped

[See my work →]  [Get in touch]
```

> **Frank override (active — do not revert):** The brief's original hero had a Cal.com booking CTA as the secondary button. Frank has decided the hero stays clean with the existing two CTAs. The Cal.com "Book a 15-min intro call" link lives in the **Contact section**, below the email/response-time block — not in the hero.

The Cal booking URL is `https://www.cal.eu/frantisek-pobocek` (Cal.com's EU domain).

## 7. LinkedIn + profile alignment

LinkedIn headline should be:
> *"AI Automation Consultant + Technical Co-founder | Founder of Eviro | n8n · Next.js · LLMs"*

Site copy and meta descriptions should be consistent with this — same language, same offering order. (Note: brief originally included `| EU` at the end; per Frank's geo-neutral override, treat EU as optional.)

## 8. Structural changes needed (in priority order)

If a coding agent is given an open-ended "improve the site" task, work through this list top-down. Stop and ask for review after each priority tier.

### Priority 1 — Foundation (DONE as of this iteration)
1. ✅ Hero rewrite per section 6.
2. ✅ Stats: replaced "AI ready" with "1 / AI SaaS live (Eviro)"; dropped stat4 (EU) — 3-stat grid.
3. ✅ Web3 / Solidity removed from primary stack list on homepage, About page, work intro, SEO descriptions.
4. ✅ Cal.com link added to Contact section (not hero).

### Priority 2 — Commercial clarity
5. Create `/services` page listing the three tiers from section 4. Include clear descriptions, prices, scope, deliverables. Add CTA for each tier.
6. Rewrite top 3 case studies (Eviro, Best Auction, NordERP Approval) to include: problem → what was built → **outcomes with numbers** → stack → duration + role.
7. Add 3–5 client testimonials block on homepage once testimonials are available (owner will provide).

### Priority 3 — Founder track
8. Create `/partner` or `/founders` page per section 5.
9. Add nav link to this page (should be equal-weight with "Work" and "About"). Homepage should have a secondary CTA section pointing to it.

### Priority 4 — Content surface
10. Create `/blog` or `/notes` section with markdown-based posts.
11. Add newsletter signup (Beehiiv embed) in footer and at end of blog posts.
12. First three posts to prioritize when content is ready:
    - Eviro deep-dive case study
    - Practical technical post on n8n + LLM workflows
    - Opinion / framework post on AI automation pricing

### Priority 5 — Lead capture + optimization
13. Add 2–3 qualifying questions to contact form (timeline, budget range, problem statement).
14. Lead magnet: "AI Automation Audit Checklist" PDF, gated behind email signup.
15. Add testimonials, add case study metrics once provided.

## 9. Writing style guide

When writing copy for this site, match these conventions:

- **Voice:** First person singular ("I build," "I ship"), confident but not boastful.
- **Tone:** Practical, specific, no hype. Avoid "cutting-edge," "revolutionary," "game-changing," "leverage synergies," "transform your business."
- **Numbers over adjectives:** "10+ years" beats "highly experienced." "18+ projects" beats "extensive portfolio."
- **Concrete over abstract:** "n8n + GPT-4o workflow that cut review moderation from 4 hrs/day to 15 minutes" beats "AI-powered efficiency gains."
- **Outcomes over features:** describe what the client *gets*, not what was *built*.
- **Length:** favor short sentences and scannable paragraphs. Most visitors skim.
- **Em-dashes:** fine, already in the current site's voice. Don't overdo them.
- **British vs. American English:** site uses British-leaning EN ("customise," "organisation" are fine, but owner's existing copy is mixed — maintain parity with what's already there per page).

## 10. Slovak version parity

Every change made to the EN version must have a corresponding SK version update. If translation is needed and the agent isn't confident in Slovak, flag it clearly with `// TODO: SK translation needed` rather than machine-translating. The owner is a native Slovak speaker and will review.

## 11. What NOT to do (hard constraints)

- **Do not redesign visually.** The current design works. Don't swap fonts, change color palette, restructure grid, or "modernize the look."
- **Do not add "SMB" or "mid-market" language** anywhere on the site.
- **Do not feature Web3 / Solidity / dApps** in hero, services, or stack lists.
- **Do not re-introduce "across Europe" / "EU clients" framing** in hero tagline, primary stats, or meta descriptions. (See section 3 Frank override.)
- **Do not move the Cal.com CTA into the hero.** It lives in the Contact section. (See section 6 Frank override.)
- **Do not publish specific equity percentages** on the founder page.
- **Do not add stock photos** of meetings, handshakes, laptops, or generic "team" imagery. The site's current photography is real photos of Frank; keep it that way.
- **Do not add cookie banners beyond what's legally required** — keep friction minimal.
- **Do not add chatbot widgets** (Intercom, Drift, HubSpot chat). The Calendly link is enough.
- **Do not gate the main portfolio/case studies** behind email capture. Only lead magnets are gated.
- **Do not add testimonials, logos, or awards that aren't real.** If the agent doesn't have a specific testimonial/logo from the owner, leave the block empty with a `// TODO` comment.

## 12. Reference files

The owner has two companion documents with strategic context. These don't need to be pasted into every session but should be consulted if the agent is making judgment calls on positioning or strategy:

- `pobocek-client-acquisition-playbook.md` — full 2026 client acquisition strategy
- `pobocek-founder-track-addendum.md` — founder track strategy

If a decision seems like it conflicts with those documents, default to this brief (which is the shortest synthesis) and ask the owner.

## 13. Owner context (personal)

- Frank prefers direct, practical communication. No fluff, no excessive affirmation.
- He pushes back when recommendations feel wrong to him — the agent should push back when his instructions feel wrong, and not just comply. Better to flag a concern early than implement something that undermines the strategy.
- He values speed of iteration over perfection. Ship a rough version, iterate. Do not spend 3 hours polishing a single paragraph.
- He's a decade-experienced developer; the agent doesn't need to explain basic coding concepts. Explain architectural or strategic choices; don't explain syntax.

## 14. Session starter checklist

When starting a new session on this site, the agent should:

1. Pull latest from the repo.
2. Confirm the current tech stack from `package.json` or equivalent.
3. Identify which page(s) the current task touches.
4. Verify the SK version of any affected page exists and is in sync.
5. Make changes, test locally, commit with clear messages.
6. Flag anything that was skipped or needs owner input before merging.

---

## 15. Git workflow rules (non-negotiable)

- **NEVER commit or push directly to `main`.**
- Always create a feature branch for changes (e.g. `feat/hero-mobile-layout`, `feat/repositioning-p1`).
- After making changes, show a summary of what was changed and **wait for explicit confirmation** before committing.
- After committing, **wait for explicit confirmation** before pushing to origin.
- Ask: "Ready to commit?" and then "Ready to push?"
- Merge to `main` only on Frank's explicit go-ahead.

---

*This brief is the single source of truth for site positioning and structural decisions. When it conflicts with older documentation or the site's existing copy, this brief wins. Update this file — not the site — when positioning evolves.*
