import { supabase } from "@/lib/supabaseClient";

export async function getTours() {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .order("id", { ascending: true });
  if (error) throw new Error(error.message);
  return data;
}

export async function getTourById(id: string) {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function createTour(tourData: any) {
  const { data, error } = await supabase
    .from("tours")
    .insert([tourData])
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateTour(id: string, tourData: any) {
  const { data, error } = await supabase
    .from("tours")
    .update(tourData)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteTour(id: string) {
  const { data, error } = await supabase
    .from("tours")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}
