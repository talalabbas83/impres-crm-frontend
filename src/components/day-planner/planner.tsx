'use client';

import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DayPlanner() {
  const [events] = useState<any[]>([]);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-lg font-medium'>Day Planner</CardTitle>
      </CardHeader>
      <CardContent>
        {events.length === 0 ? (
          <div className='py-8 text-center text-muted-foreground'>
            There are no events planned for today.
          </div>
        ) : (
          <div className='space-y-2'>
            {hours.map((hour) => (
              <div key={hour} className='flex items-center gap-4 border-b py-2 last:border-0'>
                <span className='w-20 text-sm text-muted-foreground'>
                  {hour.toString().padStart(2, '0')}:00
                </span>
                <div className='min-h-[24px] flex-1'>
                  {events
                    .filter((event) => {
                      const eventHour = new Date(event.startTime).getHours();
                      return eventHour === hour;
                    })
                    .map((event) => (
                      <div
                        key={event.id}
                        className='rounded-md bg-primary/10 p-2 text-sm text-primary'
                      >
                        {event.title}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
