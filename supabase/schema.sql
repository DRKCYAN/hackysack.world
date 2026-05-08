-- =============================================================
-- Hacky Sack Central — Supabase schema + seed data
-- Run this in your Supabase SQL Editor (one shot, end-to-end).
-- Safe to re-run: tables use "if not exists", policies are dropped+recreated.
-- =============================================================

-- gen_random_uuid()
create extension if not exists "pgcrypto";

-- -------------------------------------------------------------
-- TABLES
-- -------------------------------------------------------------

create table if not exists public.videos (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  youtube_url text not null,            -- e.g. https://www.youtube.com/embed/VIDEO_ID
  category    text not null,            -- "Beginner" | "Intermediate" | "Advanced"
  created_at  timestamp with time zone default now()
);

create table if not exists public.products (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text,
  price       numeric(10, 2) not null,
  image_url   text,
  buy_link    text,
  in_stock    boolean default true,
  created_at  timestamp with time zone default now()
);

create table if not exists public.league_players (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  location        text,
  social_handle   text,
  platform        text,
  follower_count  integer default 0,
  profile_image   text,
  created_at      timestamp with time zone default now()
);

-- -------------------------------------------------------------
-- ROW LEVEL SECURITY
-- The site reads with the public anon key. Writes happen in the
-- Supabase dashboard (which uses the service role) — no public
-- write policy is added.
-- -------------------------------------------------------------

alter table public.videos          enable row level security;
alter table public.products        enable row level security;
alter table public.league_players  enable row level security;

drop policy if exists "Public read videos" on public.videos;
create policy "Public read videos"
  on public.videos for select
  to anon, authenticated
  using (true);

drop policy if exists "Public read products" on public.products;
create policy "Public read products"
  on public.products for select
  to anon, authenticated
  using (true);

drop policy if exists "Public read league_players" on public.league_players;
create policy "Public read league_players"
  on public.league_players for select
  to anon, authenticated
  using (true);

-- -------------------------------------------------------------
-- SEED DATA
-- (Replaceable from the Supabase dashboard at any time.)
-- -------------------------------------------------------------

insert into public.videos (title, description, youtube_url, category) values
  ('Toe Stall Basics',     'Your first stall — the foundation of every freestyle combo.',                     'https://www.youtube.com/embed/dQw4w9WgXcQ', 'Beginner'),
  ('The Inside Kick',      'The bread-and-butter move of circle play. Build a clean inside kick from scratch.','https://www.youtube.com/embed/dQw4w9WgXcQ', 'Beginner'),
  ('Outside Stall Drill',  'Dial in a clean outside stall and unlock new lines through the bag.',             'https://www.youtube.com/embed/dQw4w9WgXcQ', 'Intermediate'),
  ('Around-the-World',     'A classic combo that links three planes of motion in one fluid loop.',            'https://www.youtube.com/embed/dQw4w9WgXcQ', 'Intermediate'),
  ('Mirage Tutorial',      'Step-by-step breakdown of the mirage — the move that owns the algorithm.',        'https://www.youtube.com/embed/dQw4w9WgXcQ', 'Advanced'),
  ('Flying Clipper',       'Triple-down territory: spinning, switching, and sticking the stall clean.',       'https://www.youtube.com/embed/dQw4w9WgXcQ', 'Advanced');

insert into public.products (name, description, price, image_url, buy_link, in_stock) values
  ('The Classic',     'The original suede 32-panel footbag. Tournament weight, broken-in feel.',          14.99, 'https://placehold.co/600x600/0a0a0a/f5f5f5?text=THE+CLASSIC',      '#', true),
  ('Pro Series',      'Hand-stitched 14-panel pro bag. Tight pellet fill, weighted for stalls.',          24.99, 'https://placehold.co/600x600/0a0a0a/f5f5f5?text=PRO+SERIES',       '#', true),
  ('Beginner Pack',   'Two soft-fill bags plus a printed trick guide. The perfect first kit.',             9.99, 'https://placehold.co/600x600/0a0a0a/f5f5f5?text=BEGINNER+PACK',    '#', true),
  ('Tournament Bag',  'World-class 32-panel comp bag, sand-and-bead fill. Built for competition.',        34.99, 'https://placehold.co/600x600/0a0a0a/f5f5f5?text=TOURNAMENT+BAG',   '#', true),
  ('Street Series',   'Vegan microfiber 12-panel. Bright, fast, made for outdoor circles.',               19.99, 'https://placehold.co/600x600/0a0a0a/f5f5f5?text=STREET+SERIES',    '#', true),
  ('Throwback Pair',  'Two retro 6-panel knit bags in red and black. Old-school feel.',                   16.99, 'https://placehold.co/600x600/0a0a0a/f5f5f5?text=THROWBACK+PAIR',   '#', true);

insert into public.league_players (name, location, social_handle, platform, follower_count, profile_image) values
  ('Marcus Vela',    'Portland, OR',     '@marcusvela',     'TikTok',    48200, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=MV'),
  ('Riley Tanaka',   'Brooklyn, NY',     '@rileyontheside', 'Instagram', 31700, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=RT'),
  ('Sloane Diaz',    'Austin, TX',       '@sloanesack',     'TikTok',    22400, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=SD'),
  ('Eli Brennan',    'Denver, CO',       '@elibrennan',     'YouTube',   18100, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=EB'),
  ('Jas Kapoor',     'Toronto, ON',      '@jaskapoor',      'Instagram', 12800, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=JK'),
  ('Theo Wallace',   'Oakland, CA',      '@theostalls',     'TikTok',     9700, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=TW'),
  ('Mira Okafor',    'Atlanta, GA',      '@miraokafor',     'Instagram',  6300, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=MO'),
  ('Cole Ramirez',   'Chicago, IL',      '@coleramirez',    'YouTube',    3400, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=CR'),
  ('Ava Lindgren',   'Minneapolis, MN',  '@avakicks',       'TikTok',     1500, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=AL'),
  ('Noor Hassan',    'Vancouver, BC',    '@noorhassan',     'Instagram',   520, 'https://placehold.co/400x400/0a0a0a/f5f5f5?text=NH');
