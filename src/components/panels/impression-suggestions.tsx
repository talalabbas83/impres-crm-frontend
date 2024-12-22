import { Lightbulb } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function ImpressionSuggestions() {
  return (
    <Card className='h-full'>
      <div className='flex items-center justify-between bg-[#333333] p-3 text-white'>
        <div className='flex items-center gap-2'>
          <Lightbulb className='h-4 w-4' />
          <span className='text-sm font-medium'>IMPression Suggestions</span>
        </div>
      </div>
      <div className='p-4'>
        <div className='rounded border border-[#FFE5BC] bg-[#FFF3DC] p-3 text-sm'>
          No contacts found matching selected criteria.
        </div>
      </div>
    </Card>
  );
}
