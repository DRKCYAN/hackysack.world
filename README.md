# Hacky Sack Central

The definitive hub for the hacky sack resurgence. Built with **Next.js (App Router)**, **Tailwind CSS**, and **Supabase**.

```
/                  → Home
/about             → About
/skills            → Skills & Tricks (videos from Supabase)
/marketplace       → Buy hacky sacks (products from Supabase)
/league            → Local league rankings (players from Supabase)
```

---

## Quick start

```bash
npm install
cp .env.local.example .env.local      # then fill in Supabase URL + anon key
npm run dev
```

Open http://localhost:3000.

---

## Connecting Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** and paste the contents of [`supabase/schema.sql`](./supabase/schema.sql). Run it. This creates the three tables (`videos`, `products`, `league_players`), enables row-level security with public-read policies, and seeds placeholder content.
3. In **Project Settings → API**, copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Paste both into `.env.local`.
5. Restart `npm run dev`.

If a data page shows a red **Connection Error** card, your env vars or table policies aren't set yet.

---

## Updating content (no code changes)

The site owner edits content directly in the Supabase dashboard — there is no admin panel by design.

| Page          | Table             | What to edit                                |
| ------------- | ----------------- | ------------------------------------------- |
| `/skills`     | `videos`          | YouTube embed URLs, titles, categories      |
| `/marketplace`| `products`        | Product name, description, price, buy link  |
| `/league`     | `league_players`  | Player name, follower count, platform       |

Pages revalidate every **60 seconds** (Next.js ISR), so changes appear within a minute without a redeploy.

> **Tip:** YouTube URLs must be the *embed* form, e.g. `https://www.youtube.com/embed/VIDEO_ID`. Click the **Embed** button in YouTube's Share menu to get this URL.

---

## Deploying to Vercel

1. Push the repo to GitHub.
2. In Vercel, click **Import Project** and select the repo.
3. Add the environment variables under **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. That's it.

---

## Project structure

```
app/
  layout.js                 Root layout, fonts, navbar/footer
  globals.css               Tailwind + CSS vars + hover-underline
  page.js                   Home (5 sections)
  about/page.js             About (static)
  skills/page.js            Skills (server component, fetches videos)
  skills/SkillsClient.js    Skills filter (client component)
  marketplace/page.js       Marketplace (server component, fetches products)
  league/page.js            League (server component, fetches players)
  components/
    Navbar.js               Sticky black nav + mobile drawer
    Footer.js               Site footer
lib/
  supabase.js               Supabase client
supabase/
  schema.sql                Tables, RLS policies, seed data
```

---

## Design system

| Token  | Value      |
| ------ | ---------- |
| black  | `#0a0a0a`  |
| white  | `#f5f5f5`  |
| red    | `#CC0000`  |

- **Khand 700** — all headings, nav, stats, labels (uppercase)
- **Switzer 400** — body copy
- Hard edges, no rounded corners, alternating black/white sections, red accents

Three colors. No gradients. No grays. Bold and unapologetic.
