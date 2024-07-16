import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://mbdnvjwttcfqiuucgwjk.supabase.co",
                              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZG52and0dGNmcWl1dWNnd2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4ODA1MzYsImV4cCI6MjAzNjQ1NjUzNn0.ifxjqaBHTFFzKu4oj6EgUqQbkPe88g_Zb-EFKb3kDJ4");


export default supabase;

