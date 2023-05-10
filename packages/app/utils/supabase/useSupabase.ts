import { Database } from '@my/supabase/types'
import { supabase } from './client'
import { isWeb } from '@my/ui'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useSupabase = () => {
  if (isWeb) {
    return useSupabaseClient<Database>()
  }
  return supabase
}
