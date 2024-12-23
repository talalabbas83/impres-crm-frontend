import { useState } from 'react';

import {
  BarChart3,
  Building2,
  Calendar,
  ChevronLeft,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  Mail,
  Settings,
  Users
} from 'lucide-react';

import { cn } from '@/lib/utils';

const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    color: '#D97362',
    isHeader: true
  },
  {
    id: 'leads',
    label: 'Leads & Deals',
    count: 12,
    icon: CircleDollarSign,
    color: '#D97362'
  },
  { id: 'customers', label: 'Customers', count: 45, icon: Users, color: '#D97362' },
  { id: 'companies', label: 'Companies', count: 28, icon: Building2, color: '#D97362' },
  { id: 'campaigns', label: 'Campaigns', count: 3, icon: Mail, color: '#D97362' },
  { id: 'calendar', label: 'Calendar', count: 5, icon: Calendar, color: '#D97362' },
  { id: 'documents', label: 'Documents', count: 17, icon: FileText, color: '#D97362' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, color: '#D97362' },
  { id: 'settings', label: 'Settings', icon: Settings, color: '#D97362' }
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      style={{ height: 'calc(100vh - 64.8px)' }}
      className={cn(
        'relative flex h-screen flex-col border-r border-gray-200 transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className='absolute -right-[13px] top-6 w-[1px] bg-gray-200' />
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          'absolute -right-[13px] top-8 z-10',
          'flex h-6 w-6 items-center justify-center',
          'rounded-full border bg-white shadow-sm',
          'hover:scale-110 hover:bg-gray-50 hover:shadow-md',
          'transition-all duration-200'
        )}
      >
        <ChevronLeft
          className={cn(
            'h-4 w-4 text-gray-600',
            'transition-transform duration-300',
            isCollapsed && 'rotate-180'
          )}
        />
      </button>

      {navItems.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: item.isHeader ? item.color : 'transparent'
          }}
          className={cn(
            'group relative flex cursor-pointer items-center justify-between p-4',
            item.isHeader ? 'text-white' : 'hover:bg-gray-100',
            'transition-all duration-200 ease-in-out'
          )}
        >
          {!item.isHeader && (
            <div
              className='absolute left-0 top-0 h-full w-1 bg-current opacity-0 transition-all duration-200 group-hover:opacity-100'
              style={{ color: item.color }}
            />
          )}
          <div className='flex items-center gap-3'>
            <item.icon
              className={cn(
                'h-5 w-5 transition-transform duration-200',
                !item.isHeader && 'group-hover:scale-110'
              )}
              style={{ color: item.isHeader ? 'white' : item.color }}
            />
            <span
              className={cn(
                'whitespace-nowrap text-sm transition-all duration-200',
                isCollapsed ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100',
                !item.isHeader && 'group-hover:font-medium'
              )}
              style={{ color: item.isHeader ? 'white' : item.color }}
            >
              {item.label}
            </span>
          </div>
          <span
            className={cn(
              'text-sm transition-all duration-200',
              isCollapsed ? '-translate-x-2 opacity-0' : 'translate-x-0 opacity-100',
              !item.isHeader && 'group-hover:font-medium'
            )}
            style={{ color: item.isHeader ? 'white' : 'rgb(107, 114, 128)' }}
          >
            {item.count}
          </span>
        </div>
      ))}
    </div>
  );
}
