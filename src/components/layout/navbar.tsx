import { Bell, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import ThemeToggle from '@/components/ui/theme-toggle';

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-16 items-center px-4'>
        <div className='flex items-center space-x-4'>
          {/* Logo */}
          <div className='font-semibold'>IMPRES CRM</div>
        </div>

        {/* Main Navigation */}
        <div className='mx-6 hidden items-center space-x-4 md:flex'>
          <Button variant='ghost'>Dashboard</Button>
          <Button variant='ghost'>Customers</Button>
          <Button variant='ghost'>Inventory</Button>
          <Button variant='ghost'>Reports</Button>
        </div>

        <div className='ml-auto flex items-center space-x-4'>
          {/* Notifications */}
          <Button variant='ghost' size='icon' className='relative'>
            <Bell className='h-5 w-5' />
            <span className='absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600'></span>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                <User className='h-5 w-5' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
