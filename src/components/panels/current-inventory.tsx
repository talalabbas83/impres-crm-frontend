import { Package } from 'lucide-react';

import { Card } from '@/components/ui/card';

const inventory = [
  { name: 'Pfacto 5ml', quantity: 130 },
  { name: 'Besophil', quantity: 346 },
  { name: 'Ig Sol', quantity: 0 },
  { name: 'Relixxa', quantity: 146 },
  { name: 'Pfacto 5ml', quantity: 332 }
];

export function CurrentInventory() {
  return (
    <Card className='h-full'>
      <div className='flex items-center gap-2 bg-[#333333] p-3 text-white'>
        <Package className='h-4 w-4' />
        <span className='text-sm font-medium'>Current Inventory</span>
      </div>
      <div className='divide-y'>
        {inventory.map((item, i) => (
          <div key={i} className='flex justify-between bg-white p-3'>
            <span className='text-sm'>{item.name}</span>
            <span className='text-sm text-gray-600'>{item.quantity}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
