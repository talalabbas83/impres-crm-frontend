import { Calendar } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function DayPlanner() {
  return (
    <Card className='h-full'>
      <div className='flex items-center gap-2 bg-[#333333] p-3 text-white'>
        <Calendar className='h-4 w-4' />
        <span className='text-sm font-medium'>Day Planner</span>
      </div>
      <div className='h-[calc(100%-48px)] overflow-auto p-4'>
        <div className='flex flex-col gap-4'>
          {['5:00 PM', '6:00 PM'].map((time) => (
            <div key={time} className='flex gap-4'>
              <span className='w-20 text-sm text-gray-600'>{time}</span>
              <div className='flex-1 border-b border-gray-200' />
            </div>
          ))}
        </div>
        <div className='mt-4 text-gray-600'>There are no events planned for today.</div>
        <div className='mt-4 flex justify-between text-sm'>
          <span className='text-[#D97362]'>Weekly Agenda..</span>
        </div>
      </div>
    </Card>
  );
}
