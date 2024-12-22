import { Activity, Calendar, Eye, Home, Package, Users } from 'lucide-react';

import { cn } from '@/lib/utils';

const navItems = [
  {
    id: 'unposted',
    label: 'Unposted Items',
    count: 0,
    icon: Package,
    color: 'rgb(214, 75, 75)',
    isHeader: true
  },
  { id: 'sites', label: 'Sites', count: 1, icon: Home, color: 'rgb(217, 115, 98)' },
  { id: 'contacts', label: 'Contacts', count: 0, icon: Users, color: 'rgb(217, 115, 98)' },
  { id: 'impressions', label: 'IMPressions', count: 0, icon: Eye, color: 'rgb(217, 115, 98)' },
  { id: 'scheduled', label: 'Scheduled', count: 2, icon: Calendar, color: 'rgb(217, 115, 98)' },
  { id: 'hcp-events', label: 'HCP Events', count: 0, icon: Activity, color: 'rgb(217, 115, 98)' }
];

export function Sidebar() {
  return (
    <div className='flex h-screen w-64 flex-col'>
      {navItems.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: item.isHeader ? item.color : 'transparent'
          }}
          className={cn(
            'flex cursor-pointer items-center justify-between p-4',
            item.isHeader ? 'text-white' : 'hover:bg-gray-100'
          )}
        >
          <div className='flex items-center gap-3'>
            <item.icon
              className='h-5 w-5'
              style={{ color: item.isHeader ? 'white' : item.color }}
            />
            <span className='text-sm' style={{ color: item.isHeader ? 'white' : item.color }}>
              {item.label}
            </span>
          </div>
          <span
            className='text-sm'
            style={{ color: item.isHeader ? 'white' : 'rgb(107, 114, 128)' }}
          >
            {item.count}
          </span>
        </div>
      ))}
    </div>
  );
}
