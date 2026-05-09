import { supabase } from '@/lib/supabase';

export const metadata = {
  title: 'Marketplace — Hacky Sack Central',
  description:
    'Find the perfect footbag. Curated bags from beginner to tournament grade — every stitch built for the modern circle.',
};

export const revalidate = 60;

function formatPrice(value) {
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return '$—';
  return `$${n.toFixed(2)}`;
}

export default async function MarketplacePage() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('in_stock', true)
    .order('created_at', { ascending: false });

  const products = data ?? [];

  return (
    <>
      <section className="bg-black text-white px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-khand uppercase text-6xl sm:text-7xl lg:text-9xl xl:text-[11rem] leading-none">
            Marketplace
          </h1>
          <p className="font-switzer text-lg lg:text-xl mt-6 max-w-2xl leading-relaxed">
            Find the perfect footbag.
          </p>
        </div>
      </section>

      <section className="bg-white text-black px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {error && (
            <div className="border-2 border-red p-6 mb-8">
              <div className="font-khand uppercase text-red text-xl mb-2">Connection Error</div>
              <p className="font-switzer">
                Could not load products from Supabase. Make sure your environment variables are set in{' '}
                <code className="font-mono">.env.local</code> and that the <code className="font-mono">products</code> table exists.
              </p>
              <p className="font-switzer mt-2 text-sm opacity-75">{error.message}</p>
            </div>
          )}

          {!error && products.length === 0 && (
            <p className="font-switzer text-lg">No products in stock right now. Check back soon.</p>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <article
                key={p.id}
                className="border-2 border-black hover:border-yellow transition-colors flex flex-col"
              >
                <div className="aspect-square bg-black overflow-hidden">
                  {p.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-khand uppercase text-white opacity-50 text-2xl tracking-widest text-center px-4">
                      {p.name}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-khand uppercase text-2xl">{p.name}</h2>
                  {p.description && (
                    <p className="font-switzer text-base mt-3 leading-relaxed flex-1">
                      {p.description}
                    </p>
                  )}
                  <div className="font-khand text-red text-4xl mt-4">{formatPrice(p.price)}</div>
                  <a
                    href={p.buy_link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block text-center bg-red text-white font-khand uppercase tracking-[0.2em] py-3 hover:bg-yellow hover:text-black transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
