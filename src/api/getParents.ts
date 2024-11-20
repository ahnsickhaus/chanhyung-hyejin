import { Parents } from '../types/parents';
import { supabase } from './SupabaseClient';

export async function getParents(id: number): Promise<Parents[] | null> {
  let { data, error } = await supabase
    .from('parents')
    .select('*')
    .eq('id', id);

  if (error) console.log("error", error)

  return data
}