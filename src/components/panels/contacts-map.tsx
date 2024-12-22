import { Users } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function ContactsMap() {
  return (
    <Card className='h-full'>
      <div className='flex items-center justify-between bg-[#333333] p-3 text-white'>
        <div className='flex items-center gap-2'>
          <Users className='h-4 w-4' />
          <span className='text-sm font-medium'>Map: Contacts</span>
          <span className='text-sm text-gray-400'>[201 contacts]</span>
        </div>
        <div className='flex items-center gap-2'>
          <button className='rounded bg-[#D97362] px-2 py-1 text-xs text-white'>Map</button>
          <button className='px-2 py-1 text-xs text-gray-300'>List</button>
        </div>
      </div>
      <div className='h-[calc(100%-48px)] bg-gray-100 p-4'>
        <div className='relative h-full w-full rounded-md bg-white'>
          {/* Map placeholder with markers */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className='absolute flex h-6 w-6 items-center justify-center rounded-full bg-[#D97362] text-xs text-white'
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 80}%`
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
