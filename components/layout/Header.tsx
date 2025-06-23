'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Scale, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { supabase } from '@/lib/supabase'; // COMMENTED OUT FOR PREVIEW
import { signOut } from '@/lib/auth';
// import { User as SupabaseUser } from '@supabase/supabase-js'; // COMMENTED OUT FOR PREVIEW
import { type MockUser } from '@/lib/mockData'; // ADDED FOR PREVIEW

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [user, setUser] = useState<SupabaseUser | null>(null); // COMMENTED OUT FOR PREVIEW
  const [user, setUser] = useState<MockUser | null>(null); // ADDED FOR PREVIEW

  useEffect(() => {
    // COMMENTED OUT FOR PREVIEW - UNCOMMENT WHEN INTEGRATING WITH SUPABASE
    /*
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
    */

    // Mock user check for preview
    const checkMockUser = () => {
      const mockUser = localStorage.getItem('mockUser');
      if (mockUser) {
        setUser(JSON.parse(mockUser));
      }
    };

    checkMockUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem('mockUser'); // ADDED FOR PREVIEW
      setUser(null); // ADDED FOR PREVIEW
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/bege-bco.png" alt="Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-secondary/80 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/admin">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Painel
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            ) : null}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {user ? (
                  <>
                    <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Painel
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" onClick={handleSignOut} className="w-full justify-start">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair
                    </Button>
                  </>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}