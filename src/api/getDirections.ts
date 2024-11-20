import { Directions } from '../types/directions';
import { supabase } from './SupabaseClient';

export async function getDirections(id: number): Promise<Directions[] | null> {
  let { data, error } = await supabase
    .from('directions')
    .select('*')
    .eq('id', id);

  if (error) console.log("error", error)

  return data
}