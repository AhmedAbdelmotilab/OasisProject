import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = `https://zfgaikbajldphnmrdphg.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZ2Fpa2JhamxkcGhubXJkcGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MjI4MjAsImV4cCI6MjEwMjE5ODgyMH0.aIWfzDOJmI2utg9zc_Yn5iINxNGs4EfLdQpAIcywKjI`;

export const supabase = createClient(supabaseUrl, supabaseKey);
