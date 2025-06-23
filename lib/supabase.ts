import { createClient } from '@supabase/supabase-js';

// COMMENTED OUT FOR PREVIEW - UNCOMMENT WHEN INTEGRATING WITH SUPABASE
/*
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
*/

// Mock supabase client for preview
export const supabase = {
  auth: {
    getUser: () => Promise.resolve({ data: { user: null } }),
    signInWithPassword: () => Promise.resolve({ data: null, error: null }),
    signUp: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }),
        order: () => Promise.resolve({ data: [], error: null })
      }),
      order: () => Promise.resolve({ data: [], error: null })
    }),
    insert: () => ({
      select: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    }),
    update: () => ({
      eq: () => Promise.resolve({ error: null })
    }),
    delete: () => ({
      eq: () => Promise.resolve({ error: null })
    })
  })
};

export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string;
          title: string;
          content: string;
          excerpt: string;
          slug: string;
          published: boolean;
          author_id: string;
          created_at: string;
          updated_at: string;
          featured_image?: string;
          tags?: string[];
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          excerpt: string;
          slug: string;
          published?: boolean;
          author_id: string;
          created_at?: string;
          updated_at?: string;
          featured_image?: string;
          tags?: string[];
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          excerpt?: string;
          slug?: string;
          published?: boolean;
          author_id?: string;
          created_at?: string;
          updated_at?: string;
          featured_image?: string;
          tags?: string[];
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          role: 'admin' | 'editor' | 'author';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          role?: 'admin' | 'editor' | 'author';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          role?: 'admin' | 'editor' | 'author';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};