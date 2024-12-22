import { Home } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function Sites() {
  return (
    <Card className='h-full'>
      <div className='flex items-center gap-2 bg-[#333333] p-3 text-white'>
        <Home className='h-4 w-4' />
        <span className='text-sm font-medium'>Sites</span>
      </div>
      <div className='p-6'>
        <div className='text-center'>
          <div className='text-5xl font-light'>341</div>
          <div className='mt-2 text-sm text-gray-600'>Total</div>
        </div>
        <div className='mt-6 flex justify-end text-sm'>
          <span className='text-[#D97362]'>More..</span>
        </div>
      </div>
    </Card>
  );
}
