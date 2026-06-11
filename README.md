# Makruten — Solutions Brokerage Website

Marketing site for **Makruten (Makruten Market Tunnels)** — a solutions brokerage and procurement partner.
Motto: _"Finding solutions to every problem."_

Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript** and **Tailwind CSS v4**.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — positioning, stats, what we do, process, ₦100B+ case highlight |
| `/about` | Our story + the ₦100 billion contract + values |
| `/solutions` | Solutions brokerage & procurement, "Join the Network", no-upfront-cost pricing |
| `/join` | Become a network partner — what joining means + application form |
| `/contact` | Enquiry form + contact details |

## Positioning (current)

- **Primary:** Solutions Brokerage / procurement — we find the right company in a **vetted network** to solve a client's problem and secure the best value.
- **No upfront cost** — clients pay a **percentage of the value created** (savings + wins).
- **Sales outsourcing** is reframed as **"Join the Network."**
- Proof points: helped finalize a **₦100B+ contract** (equipment, maintenance team, logistics), **100+ companies** in network, **billions in interest** drawn in year one.

## Forms (Formspree)

Both the Join and Contact forms POST to the server route `app/api/lead/route.ts`, which emails the
submission via **SMTP** (nodemailer). Any working SMTP mailbox works.

1. Copy `.env.example` to `.env.local` and fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
   `MAIL_TO`, `MAIL_FROM`.
2. Add the same variables in **Vercel → Settings → Environment Variables** (the API route needs them at
   runtime — `.env.local` is not deployed).

Note: some hosts throttle outbound SMTP. If delivery is unreliable on Vercel, switch the route to a
transactional email API (Resend/SendGrid) over HTTPS — same route, different transport.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Handoff / to-do

- Swap placeholder imagery for visuals featuring Black / African business people (client to provide).
- Point `brand.email` in `lib/site.ts` to the corporate email once provisioned.
- Set the `SMTP_*` / `MAIL_*` environment variables in Vercel (currently a placeholder Gmail mailbox).
