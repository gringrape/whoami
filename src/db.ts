// supabase 연동
import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = "https://oqrkxkzbdpubksblrius.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcmt4a3piZHB1YmtzYmxyaXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1ODk1NjAsImV4cCI6MjA2MzE2NTU2MH0.Nr5QgyWGwm8_OeJIGSZ9HPd9DP_bxsin3NjXI_Bs-3s";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be set');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
