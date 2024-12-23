import type { IMPression } from '@/types/dashboard';

import { Eye } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface IMPressionsCardProps {
  data: IMPression;
}

export function IMPressionsCard({ data }: IMPressionsCardProps) {
  return (
    <Card>
      <div className='flex items-center gap-2 p-3 text-white'>
        <Eye className='h-4 w-4' />
        <span className='text-sm font-medium'>IMPressions</span>
      </div>
      <CardContent>
        <div className='text-center'>
          <div className='mb-4 text-5xl font-bold'>{data.total}</div>
          <div className='text-sm text-muted-foreground'>Total</div>
          <div className='mt-4 grid grid-cols-2 gap-4'>
            <div>
              <div className='text-2xl font-semibold'>{data.virtual}</div>
              <div className='text-sm text-muted-foreground'>Virtual</div>
            </div>
            <div>
              <div className='text-2xl font-semibold'>{data.live}</div>
              <div className='text-sm text-muted-foreground'>Live</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
