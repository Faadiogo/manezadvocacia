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
  PlusCircle,
  ExternalLink,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from '@/lib/auth';
import Image from 'next/image';
interface AdminSidebarProps {
  user: any;
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

export default function AdminSidebar({ user, collapsed: externalCollapsed, setCollapsed: externalSetCollapsed }: AdminSidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const pathname = usePathname();

  // Use external state if provided, otherwise use internal state
  const collapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  const setCollapsed = externalSetCollapsed || setInternalCollapsed;

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
    }
  ];

  const externalLinks = [
    {
      icon: ExternalLink,
      label: 'Ver Blog',
      href: '/blog',
      external: true
    },
    {
      icon: Home,
      label: 'Ir para Site',
      href: '/',
      external: true
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
      <div className={cn(
        "border-b border-gray-200 bg-gradient-to-r from-brand-primary/20 to-brand-primary/30",
        collapsed ? "p-2" : "p-6"
      )}>
        {!collapsed ? (
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/vde-pto.png" alt="Mañez Advocacia" width={150} height={60} />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 hover:bg-brand-primary/10"
            >
              <ChevronLeft className="h-5 w-5 text-brand-primary" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/icon.png" alt="Mañez Advocacia" width={150} height={60} />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 hover:bg-brand-primary/10"
            >
              <ChevronRight className="h-5 w-5 text-brand-primary" />
            </Button>
          </div>
        )}
      </div>

      {/* User Info */}
      <div className={cn(
        "border-b border-gray-200",
        collapsed ? "p-2" : "p-4"
      )}>
        {!collapsed ? (
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user?.full_name?.charAt(0) || 'U'}
                </span>
              </div>
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
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {user?.full_name?.charAt(0) || 'U'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {/* Menu Principal */}
        <div className="mb-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors relative group',
                    collapsed ? 'justify-center' : 'space-x-3',
                    item.active
                      ? 'bg-brand-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}

                  {/* Tooltip para sidebar colapsada */}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Separador */}
        {!collapsed && (
          <div className="border-t border-gray-200 my-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-4 mb-2">
              Acesso Rápido
            </p>
          </div>
        )}

        {/* Links Externos */}
        <div>
          <ul className="space-y-2">
            {externalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors text-brand-primary hover:bg-brand-primary/10 relative group',
                    collapsed ? 'justify-center' : 'space-x-3'
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}

                  {/* Tooltip para sidebar colapsada */}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          className={cn(
            'w-full text-red-600 hover:text-red-700 hover:bg-red-50 relative group',
            collapsed ? 'justify-center p-3' : 'justify-start'
          )}
          title={collapsed ? 'Sair' : undefined}
        >
          <LogOut className={cn(
            'flex-shrink-0',
            collapsed ? 'h-5 w-5' : 'h-4 w-4'
          )} />
          {!collapsed && <span className="ml-2">Sair</span>}

          {/* Tooltip para sidebar colapsada */}
          {collapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              Sair
            </div>
          )}
        </Button>
      </div>
    </motion.div>
  );
}