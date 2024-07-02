import { useQuery } from '@tanstack/react-query'

import { useSupabase } from '../supabase/useSupabase'

const getEvents = async (supabase) => {
  return supabase.from('events').select('*').order('created_at', { ascending: false }).limit(4)
}

function useEventsQuery() {
  const supabase = useSupabase()
  const queryKey = ['events']

  const queryFn = async () => {
    return getEvents(supabase).then((result) => result.data)
  }

  return useQuery({ queryKey, queryFn })
}

export default useEventsQuery
