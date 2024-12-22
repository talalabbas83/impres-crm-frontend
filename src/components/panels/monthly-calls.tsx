import { BarChart } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function MonthlyCalls() {
  const data = [
    { month: 'March', calls: 48 },
    { month: 'April', calls: 0 },
    { month: 'May', calls: 0 },
    { month: 'June', calls: 0 }
  ];

  const maxCalls = Math.max(...data.map((d) => d.calls));

  return (
    <Card className='h-full'>
      <div className='flex items-center gap-2 bg-[#333333] p-3 text-white'>
        <BarChart className='h-4 w-4' />
        <span className='text-sm font-medium'>Monthly Calls</span>
      </div>
      <div className='p-4'>
        <div className='flex h-32 items-end gap-4'>
          {data.map((item) => (
            <div key={item.month} className='flex flex-1 flex-col items-center gap-2'>
              <div
                className='w-full rounded-sm bg-[#D97362]'
                style={{
                  height: `${(item.calls / maxCalls) * 100}%`,
                  minHeight: item.calls ? '2px' : '0'
                }}
              />
              <span className='text-xs text-gray-600'>{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
