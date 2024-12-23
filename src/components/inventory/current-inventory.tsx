import type { InventoryItem } from '@/types/dashboard';

import { Package } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

interface CurrentInventoryProps {
  items: InventoryItem[];
}

export function CurrentInventory({ items }: CurrentInventoryProps) {
  return (
    <Card>
      <div className='flex items-center gap-2 p-3 text-white'>
        <Package className='h-4 w-4' />
        <span className='text-sm font-medium'>Current Inventory</span>
      </div>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead className='text-right'>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.name}</TableCell>
                <TableCell className='text-right'>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
