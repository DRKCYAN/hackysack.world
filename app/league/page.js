import { supabase } from '@/lib/supabase';

export const metadata = {
  title: 'The League — Hacky Sack Central',
  description:
    'The Hacky Sack Central league rankings. Players ranked by total social media reach across TikTok, Instagram, and YouTube.',
};

export const revalidate = 60;

function formatFollowers(value) {
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return '—';
  if (n >= 1000) {
    const v = n / 1000;
    return `${v >= 10 ? Math.round(v) : v.toFixed(1)}K`;
  }
  return n.toString();
}

export default async function LeaguePage() {
  const { data, error } = await supabase
    .from('league_players')
    .select('*')
    .order('follower_count', { ascending: false });

  const players = data ?? [];
  const top3 = players.slice(0, 3);

  return (
    <>
      <section className="bg-black text-white px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-khand uppercase text-6xl sm:text-7xl lg:text-9xl xl:text-[11rem] leading-none">
            The League
          </h1>
          <p className="font-switzer text-lg lg:text-xl mt-6 max-w-2xl leading-relaxed">
            Rankings are determined by total social media followers.
          </p>
        </div>
      </section>

      <section className="bg-white text-black px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {error && (
            <div className="border-2 border-red p-6 mb-8">
              <div className="font-khand uppercase text-red text-xl mb-2">Connection Error</div>
              <p className="font-switzer">
                Could not load players from Supabase. Make sure your environment variables are set in{' '}
                <code className="font-mono">.env.local</code> and that the <code className="font-mono">league_players</code> table exists.
              </p>
              <p className="font-switzer mt-2 text-sm opacity-75">{error.message}</p>
            </div>
          )}

          {!error && players.length === 0 && (
            <p className="font-switzer text-lg">No ranked players yet — check back soon.</p>
          )}

          {/* TOP 3 PODIUM */}
          {top3.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {top3.map((p, i) => (
                <article
                  key={p.id}
                  className="border-2 border-black p-8 flex flex-col items-center text-center hover:border-yellow transition-colors"
                >
                  <div className="font-khand text-red text-7xl sm:text-8xl lg:text-9xl leading-none">
                    #{i + 1}
                  </div>
                  <div className="w-32 h-32 bg-black mt-6 overflow-hidden border-2 border-red">
                    {p.profile_image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.profile_image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                  <h2 className="font-khand uppercase text-2xl lg:text-3xl mt-6">{p.name}</h2>
                  <div className="font-switzer text-sm mt-1 opacity-75">{p.location}</div>
                  <span className="bg-red text-white font-khand uppercase tracking-[0.2em] text-xs px-3 py-1 mt-4">
                    {p.platform}
                  </span>
                  <div className="font-khand text-red text-5xl lg:text-6xl mt-6 leading-none">
                    {formatFollowers(p.follower_count)}
                  </div>
                  <div className="font-switzer text-xs uppercase tracking-[0.25em] opacity-75 mt-2">
                    Followers
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* FULL RANKINGS TABLE */}
          {players.length > 0 && (
            <>
              <h2 className="font-khand uppercase text-3xl lg:text-5xl mb-6">Full Rankings</h2>
              <div className="border-2 border-black overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="font-khand uppercase tracking-[0.2em] text-sm px-6 py-4">
                        Rank
                      </th>
                      <th className="font-khand uppercase tracking-[0.2em] text-sm px-6 py-4">
                        Name
                      </th>
                      <th className="font-khand uppercase tracking-[0.2em] text-sm px-6 py-4 hidden md:table-cell">
                        Location
                      </th>
                      <th className="font-khand uppercase tracking-[0.2em] text-sm px-6 py-4 hidden sm:table-cell">
                        Platform
                      </th>
                      <th className="font-khand uppercase tracking-[0.2em] text-sm px-6 py-4 text-right">
                        Followers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((p, i) => (
                      <tr
                        key={p.id}
                        className="border-b border-red last:border-b-0 align-middle hover:bg-yellow hover:text-black transition-colors group"
                      >
                        <td className="px-6 py-4 font-khand text-red text-2xl group-hover:text-black transition-colors">#{i + 1}</td>
                        <td className="px-6 py-4">
                          <div className="font-khand uppercase text-lg">{p.name}</div>
                          {p.social_handle && (
                            <div className="font-switzer text-sm opacity-75 mt-0.5">
                              {p.social_handle}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell font-switzer">
                          {p.location}
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell font-khand uppercase tracking-[0.2em] text-sm text-red group-hover:text-black transition-colors">
                          {p.platform}
                        </td>
                        <td className="px-6 py-4 text-right font-khand text-2xl">
                          {formatFollowers(p.follower_count)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
