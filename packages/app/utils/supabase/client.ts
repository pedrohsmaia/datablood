import { createClient } from '@supabase/supabase-js'
import { Database } from '@my/supabase/types'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error(
    `NEXT_PUBLIC_SUPABASE_URL is not set. Please update the root .env.local and restart the server.`
  )
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error(
    `NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Please update the root .env.local and restart the server.`
  )
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
