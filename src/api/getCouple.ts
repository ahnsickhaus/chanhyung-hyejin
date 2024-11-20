import { Couple } from '../types/couple';
import { supabase } from './SupabaseClient';

export async function getCouple(id: number): Promise<Couple[] | null> {
  let { data, error } = await supabase
    .from('couple')
    .select('*')
    .eq('id', id);

  if (error) console.log("error", error)

  return data
}