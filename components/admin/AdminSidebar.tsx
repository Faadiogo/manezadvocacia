'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Scale,
  ChevronLeft,
  ChevronRight,
  PlusCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from '@/lib/auth';

interface AdminSidebarProps {
  user: any;
}

export default function AdminSidebar({ user }: AdminSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem('mockUser');
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/admin',
      active: pathname === '/admin'
    },
    {
      icon: FileText,
      label: 'Artigos',
      href: '/admin/artigos',
      active: pathname.startsWith('/admin/artigos')
    },
    {
      icon: Users,
      label: 'Usuários',
      href: '/admin/usuarios',
      active: pathname.startsWith('/admin/usuarios')
    },
    {
      icon: Settings,
      label: 'Configurações',
      href: '/admin/configuracoes',
      active: pathname.startsWith('/admin/configuracoes')
    }
  ];

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-40 transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-brand-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-brand-primary">Mañez</span>
                <span className="text-xs text-gray-600">Admin</span>
              </div>
            </Link>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="p-2"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {user?.full_name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.full_name || 'Usuário'}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.role || 'Admin'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      {!collapsed && (
        <div className="p-4 border-b border-gray-200">
          <Link href="/admin/artigos/novo">
            <Button size="sm" className="w-full bg-brand-primary hover:bg-brand-primary/90">
              <PlusCircle className="h-4 w-4 mr-2" />
              Novo Artigo
            </Button>
          </Link>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  item.active
                    ? 'bg-brand-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          className={cn(
            'w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50',
            collapsed && 'justify-center'
          )}
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Sair</span>}
        </Button>
      </div>
    </motion.div>
  );
}