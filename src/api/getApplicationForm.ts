import { ApplicationForm } from '../types/applicationForm';
import { supabase } from './SupabaseClient';

export async function getApplicationForm(path: string): Promise<ApplicationForm[] | null> {
  let { data, error } = await supabase
    .from('application_form')
    .select('*')
    .eq('path', path);

  if (error) console.log("error", error)

  return data
}