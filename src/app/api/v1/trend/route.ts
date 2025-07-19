import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  // @ts-ignore
  const data = await prisma.finance.groupBy({
    by: ['date'],
    _count: {
      total: true,
    },
  });

  const chartData = data?.map((item) => ({
    category: item.date,
    total: item._count.total,
    fill: `var(--color-${item.date})`,
  }));

  return NextResponse.json({ chartData });
}
