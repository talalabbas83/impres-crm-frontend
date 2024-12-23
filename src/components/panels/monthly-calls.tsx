import { BarChart } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function MonthlyCalls() {
  const data = [
    { month: 'Jan', calls: 65 },
    { month: 'Feb', calls: 45 },
    { month: 'Mar', calls: 78 },
    { month: 'Apr', calls: 52 },
    { month: 'May', calls: 91 },
    { month: 'Jun', calls: 73 },
    { month: 'Jul', calls: 86 },
    { month: 'Aug', calls: 69 }
  ];

  const maxCalls = Math.max(...data.map((d) => d.calls));

  return (
    <Card className='h-full'>
      <div className='flex items-center justify-between p-3 text-white'>
        <div className='flex items-center gap-2'>
          <BarChart className='h-4 w-4' />
          <span className='text-sm font-medium'>Monthly Calls</span>
        </div>
        <span className='text-sm font-medium'>{maxCalls} max</span>
      </div>
      <div className='p-4'>
        <div className='relative flex h-32 items-end gap-2'>
          {data.map((item) => (
            <div key={item.month} className='relative flex-1'>
              <div className='absolute bottom-0 flex w-full flex-col items-center gap-2'>
                <div
                  className='w-full rounded-sm bg-[#D97362] transition-all duration-300 hover:scale-105 hover:bg-[#c56a5a]'
                  style={{
                    height: `${Math.max((item.calls / maxCalls) * 100, 2)}px`
                  }}
                />
                <div className='flex flex-col items-center'>
                  <span className='text-xs text-gray-600'>{item.month}</span>
                  <span className='text-xs text-gray-400'>{item.calls}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
