'use client';

import CSVReader from 'react-csv-reader';
import React from 'react';
import { columns } from '@/components/finance/columns';
import { DataTable } from '@/components/finance/data-table';

export default function Home() {
  const [data, setData] = React.useState<DATA[]>([]);

  type DATA = {
    date: string;
    description: string;
    total: string;
    category: string;
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={'text-xl pb-2'}>Personal Finance Tracker</h1>
      <div className={"pb-4"}>
        <CSVReader
          parserOptions={{ header: true }}
          onFileLoaded={(data) => setData(data)}
        />
      </div>
      <div className={'pt-4'}>
        {data.length > 1 && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
