// COMMENTED OUT FOR PREVIEW - UNCOMMENT WHEN INTEGRATING WITH SUPABASE
/*
import { supabase } from './supabase';

export async function signUp(email: string, password: string, fullName: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) throw error;

  // Create profile
  if (data.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: data.user.id,
        email: data.user.email!,
        full_name: fullName,
        role: 'author',
      });

    if (profileError) throw profileError;
  }

  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}
*/

// Mock auth functions for preview
import { mockSignIn, mockSignUp, getMockUser, type MockUser } from './mockData';

let currentMockUser: MockUser | null = null;

export async function signUp(email: string, password: string, fullName: string) {
  const user = await mockSignUp(email, password, fullName);
  currentMockUser = user;
  return { user };
}

export async function signIn(email: string, password: string) {
  const user = await mockSignIn(email, password);
  currentMockUser = user;
  return { user };
}

export async function signOut() {
  currentMockUser = null;
}

export async function getCurrentUser() {
  return currentMockUser || await getMockUser();
}

export async function getUserProfile(userId: string) {
  return currentMockUser;
}