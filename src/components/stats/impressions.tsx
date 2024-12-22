import type { IMPression } from '@/types/dashboard';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface IMPressionsCardProps {
  data: IMPression;
}

export function IMPressionsCard({ data }: IMPressionsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>IMPressions</CardTitle>
      </CardHeader>
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
