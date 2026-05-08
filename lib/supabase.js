import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Returns a stub client when env vars are missing so pages can render an
 * inline "Connection Error" card instead of crashing the build / runtime.
 */
function makeStubClient() {
  const error = {
    message:
      'Supabase env vars not set. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local.',
  };
  const result = Promise.resolve({ data: [], error });
  const chain = {
    select: () => chain,
    eq: () => chain,
    order: () => chain,
    limit: () => chain,
    then: (resolve, reject) => result.then(resolve, reject),
  };
  return {
    from: () => chain,
  };
}

export const supabase =
  url && anonKey ? createClient(url, anonKey) : (console.warn('[supabase] env vars missing — using stub client'), makeStubClient());
