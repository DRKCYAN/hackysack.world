'use client';

import { useMemo, useState } from 'react';

const CATEGORIES = ['ALL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

export default function SkillsClient({ videos, errorMessage }) {
  const [active, setActive] = useState('ALL');

  const filtered = useMemo(() => {
    if (active === 'ALL') return videos;
    return videos.filter((v) => (v.category || '').toUpperCase() === active);
  }, [active, videos]);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`font-khand uppercase tracking-[0.2em] text-sm px-6 py-3 border-2 transition-colors ${
                isActive
                  ? 'bg-red text-white border-red'
                  : 'bg-white text-black border-black hover:border-red hover:text-red'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {errorMessage && (
        <div className="border-2 border-red p-6 mb-8">
          <div className="font-khand uppercase text-red text-xl mb-2">Connection Error</div>
          <p className="font-switzer">
            Could not load videos from Supabase. Make sure your environment variables are set in{' '}
            <code className="font-mono">.env.local</code> and that the <code className="font-mono">videos</code> table exists.
          </p>
          <p className="font-switzer mt-2 text-sm opacity-75">{errorMessage}</p>
        </div>
      )}

      {!errorMessage && filtered.length === 0 && (
        <p className="font-switzer text-lg">No videos in this category yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((v) => (
          <article
            key={v.id}
            className="border-2 border-black hover:border-red transition-colors flex flex-col"
          >
            <div className="aspect-video bg-black">
              <iframe
                src={v.youtube_url}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full block"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="self-start bg-red text-white font-khand uppercase tracking-[0.2em] text-xs px-3 py-1">
                {v.category}
              </span>
              <h2 className="font-khand uppercase text-2xl mt-4">{v.title}</h2>
              {v.description && (
                <p className="font-switzer text-base mt-3 leading-relaxed">{v.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
