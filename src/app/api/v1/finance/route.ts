import { NextRequest, NextResponse } from 'next/server';
import { createFinanceSchema } from '@/schema/finance';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  // @ts-ignore
  const bodyRaw = await req.json();
  const body = createFinanceSchema.parse(bodyRaw);
  await prisma.finance.createMany({
    data: body,
  });

  return NextResponse.json({
    message: 'Data successfully created',
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
}

export async function GET() {
  const finances = await prisma.finance.findMany({
    orderBy: {
      date: 'desc',
    },
  });
  return NextResponse.json(finances);
}
