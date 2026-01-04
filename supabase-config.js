// Supabase Configuration
// Get these values from your Supabase project: https://app.supabase.com

export const supabaseConfig = {
  // Your Supabase project URL (found in Project Settings > API)
  url: 'YOUR_SUPABASE_URL_HERE', // e.g., 'https://xxxxx.supabase.co'
  
  // Your Supabase anon/public key (found in Project Settings > API)
  anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE',
  
  // Storage bucket name for photos
  photoBucket: 'weight-loss-photos'
};

// For production, use environment variables:
// url: process.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL
// anonKey: process.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY
