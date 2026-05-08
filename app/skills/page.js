import { supabase } from '@/lib/supabase';
import SkillsClient from './SkillsClient';

export const metadata = {
  title: 'Skills & Tricks — Hacky Sack Central',
  description:
    'From your first stall to spinning toe-delays — every move, every level, every player. Tutorials curated by the Hacky Sack Central crew.',
};

export const revalidate = 60;

export default async function SkillsPage() {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <>
      <section className="bg-black text-white px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-khand uppercase text-6xl sm:text-7xl lg:text-9xl xl:text-[11rem] leading-none">
            Skills & Tricks
          </h1>
          <p className="font-switzer text-lg lg:text-xl mt-6 max-w-2xl leading-relaxed">
            From the first stall to the spinning toe-delay — every move, every level, every player.
          </p>
        </div>
      </section>

      <section className="bg-white text-black px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <SkillsClient videos={data ?? []} errorMessage={error?.message ?? null} />
        </div>
      </section>
    </>
  );
}
