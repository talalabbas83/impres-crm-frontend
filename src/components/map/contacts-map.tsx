import type { Contact } from '@/types/dashboard';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactsMapProps {
  contacts: Contact[];
}

export function ContactsMap({ contacts }: ContactsMapProps) {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle className='text-lg'>Map: Contacts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='relative h-[400px] w-full rounded-md bg-muted'>
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className='absolute flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground'
              style={{
                // Convert lat/lng to relative positions for demo
                left: `${((contact.lng + 97) * 100) % 90}%`,
                top: `${((contact.lat - 49) * 100) % 80}%`
              }}
            >
              {index + 1}
            </div>
          ))}
          <div className='absolute bottom-2 right-2 text-xs text-muted-foreground'>
            Map placeholder - Google Maps API not configured
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
