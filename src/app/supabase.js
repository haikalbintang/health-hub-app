import { createClient, SupabaseClient } from '@supabase/supabase-js';
const supabaseJwtSecret = process.env.REACT_APP_SUPABASE_JWT_SECRET;

const supabaseUrl = 'https://lwgscyxqeipmjzaxphkv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Z3NjeXhxZWlwbWp6YXhwaGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MTMzOTYsImV4cCI6MjAyODQ4OTM5Nn0.3o2r_xCmh8YY9fw-DGkd9WlOHWpNS8W1RVt89Uk3fbw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
