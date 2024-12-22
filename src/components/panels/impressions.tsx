import { Eye, User, Users } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function Impressions() {
  return (
    <Card className='h-full'>
      <div className='flex items-center gap-2 bg-[#333333] p-3 text-white'>
        <Eye className='h-4 w-4' />
        <span className='text-sm font-medium'>IMPressions</span>
      </div>
      <div className='p-6'>
        <div className='text-center'>
          <div className='mb-2 text-5xl font-light'>137</div>
          <div className='mb-6 text-sm text-gray-600'>Total</div>
          <div className='grid grid-cols-2 gap-8'>
            <div className='flex items-center justify-center gap-2'>
              <User className='h-4 w-4 text-gray-400' />
              <div>
                <div className='text-2xl font-light'>45</div>
                <div className='text-sm text-gray-600'>virtual</div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <Users className='h-4 w-4 text-gray-400' />
              <div>
                <div className='text-2xl font-light'>92</div>
                <div className='text-sm text-gray-600'>Live</div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-between text-sm'>
          <span className='text-[#D97362]'>Suggestions</span>
          <span className='text-[#D97362]'>More..</span>
        </div>
      </div>
    </Card>
  );
}
