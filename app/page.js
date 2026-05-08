import Link from 'next/link';

const FEATURED_VIDEOS = [
  { title: 'Toe Stall Basics', category: 'BEGINNER' },
  { title: 'Around-the-World', category: 'INTERMEDIATE' },
  { title: 'Mirage Tutorial', category: 'ADVANCED' },
];

const FEATURED_PRODUCTS = [
  { name: 'The Classic', price: '$14.99' },
  { name: 'Pro Series', price: '$24.99' },
  { name: 'Tournament Bag', price: '$34.99' },
];

const FEATURED_PLAYERS = [
  { rank: 1, name: 'Marcus Vela', location: 'Portland, OR', followers: '48.2K' },
  { rank: 2, name: 'Riley Tanaka', location: 'Brooklyn, NY', followers: '31.7K' },
  { rank: 3, name: 'Sloane Diaz', location: 'Austin, TX', followers: '22.4K' },
];

const STATS = [
  { num: '50+', label: 'Years of History' },
  { num: 'Millions', label: 'of Players' },
  { num: 'Global', label: 'Community' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black text-white min-h-[calc(100vh-5rem)] flex items-center px-6 lg:px-16">
        <div className="max-w-6xl mx-auto py-24 w-full">
          <h1 className="font-khand uppercase text-[20vw] sm:text-[16vw] lg:text-[11rem] xl:text-[13rem] leading-[0.85] tracking-tight">
            Keep It<br className="sm:hidden" /> Up.
          </h1>
          <p className="font-switzer text-lg lg:text-xl mt-10 max-w-2xl leading-relaxed">
            The sport that never left. It just leveled up. Welcome to the home of the global hacky sack resurgence — skills, gear, and the players defining the new era.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/marketplace"
              className="bg-red text-white font-khand uppercase tracking-[0.2em] text-base lg:text-lg px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/league"
              className="border-2 border-white text-white font-khand uppercase tracking-[0.2em] text-base lg:text-lg px-8 py-4 hover:bg-red hover:border-red transition-colors"
            >
              Join the League
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS HACKY SACK */}
      <section className="bg-white text-black px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <h2 className="font-khand uppercase text-red text-5xl lg:text-7xl xl:text-8xl leading-none">
              What Is<br />Hacky Sack?
            </h2>
            <div className="space-y-6 font-switzer text-lg leading-relaxed">
              <p>
                Hacky sack — or footbag — is the freestyle ball-control sport played with a small, soft bag that never touches the ground. Born on a Portland sidewalk in 1972, it became a global movement.
              </p>
              <p>
                Today the resurgence is real. A new generation is picking up the bag, sharing tricks across feeds, and turning sidewalk circles into competitions.
              </p>
              <p>
                Whether you stall, juggle, or land triple-downs — the bag is yours.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t-2 border-red pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-khand text-red text-6xl lg:text-7xl uppercase leading-none">
                    {s.num}
                  </div>
                  <div className="font-khand uppercase text-black text-xl mt-3 tracking-[0.2em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SKILLS */}
      <section className="bg-black text-white px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="font-khand uppercase text-5xl lg:text-7xl xl:text-8xl">
              Learn the Tricks
            </h2>
            <div className="w-24 h-1 bg-red" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_VIDEOS.map((v) => (
              <article
                key={v.title}
                className="border-2 border-white hover:border-red transition-colors"
              >
                <div className="aspect-video bg-black border-b-2 border-red flex items-center justify-center">
                  <span className="font-khand uppercase text-2xl text-white opacity-40 tracking-widest">
                    Video
                  </span>
                </div>
                <div className="p-6">
                  <span className="bg-red text-white font-khand uppercase text-xs px-3 py-1 tracking-[0.2em]">
                    {v.category}
                  </span>
                  <h3 className="font-khand uppercase text-2xl mt-4">{v.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/skills"
              className="inline-block bg-red text-white font-khand uppercase tracking-[0.2em] text-base lg:text-lg px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              See All Skills →
            </Link>
          </div>
        </div>
      </section>

      {/* MARKETPLACE PREVIEW */}
      <section className="bg-white text-black px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="font-khand uppercase text-5xl lg:text-7xl xl:text-8xl">Gear Up</h2>
            <div className="w-24 h-1 bg-red" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((p) => (
              <article
                key={p.name}
                className="border-2 border-black hover:border-red transition-colors flex flex-col"
              >
                <div className="aspect-square bg-black flex items-center justify-center">
                  <span className="font-khand uppercase text-xl lg:text-2xl text-white opacity-50 tracking-widest text-center px-4">
                    {p.name}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-khand uppercase text-2xl">{p.name}</h3>
                  <div className="font-khand text-red text-4xl mt-2">{p.price}</div>
                  <button
                    type="button"
                    className="mt-4 w-full bg-red text-white font-khand uppercase tracking-[0.2em] py-3 hover:bg-black transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/marketplace"
              className="inline-block bg-black text-white font-khand uppercase tracking-[0.2em] text-base lg:text-lg px-8 py-4 hover:bg-red transition-colors"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* LEAGUE TEASER */}
      <section className="bg-black text-white px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
            <h2 className="font-khand uppercase text-5xl lg:text-7xl xl:text-8xl">The League</h2>
            <div className="w-24 h-1 bg-red" />
          </div>
          <p className="font-switzer text-lg max-w-2xl mb-12 leading-relaxed">
            A live leaderboard of hacky sack players ranked by social reach. Skills, style, and influence — measured in footbags, not followers.
          </p>

          <div className="space-y-2">
            {FEATURED_PLAYERS.map((p) => (
              <div
                key={p.rank}
                className="grid grid-cols-12 gap-4 items-center border-b border-red py-6"
              >
                <div className="font-khand text-red text-5xl sm:text-6xl lg:text-7xl col-span-3 sm:col-span-2">
                  #{p.rank}
                </div>
                <div className="col-span-5 sm:col-span-6">
                  <div className="font-khand uppercase text-2xl lg:text-3xl">{p.name}</div>
                  <div className="font-switzer text-sm opacity-75 mt-1">{p.location}</div>
                </div>
                <div className="col-span-4 text-right">
                  <div className="font-khand text-red text-3xl lg:text-4xl">{p.followers}</div>
                  <div className="font-switzer text-xs uppercase tracking-[0.2em] opacity-75 mt-1">
                    Followers
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/league"
              className="inline-block bg-red text-white font-khand uppercase tracking-[0.2em] text-base lg:text-lg px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              See Full Rankings →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
