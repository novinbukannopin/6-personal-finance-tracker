import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { filterCategorySchema } from '@/schema/finance';

export async function GET(req: NextRequest) {
  // @ts-ignore
  const bodyRaw = await req.json();
  console.log(bodyRaw);
  const body = filterCategorySchema.parse(bodyRaw);
  const finances = await prisma.finance.findMany({
    orderBy: {
      date: 'desc',
    },
    where: {
      category: body ? body.category : undefined,
    },
  });
  return NextResponse.json(finances);
}
