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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/v1/finance', {
        method: 'POST',
        body: JSON.stringify(data.filter((data) => data.date != '')),
      });
      const result = await res.json();
      console.log(result);
    } catch {
      console.error(e);
    } finally {
      setData([]);
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={'text-xl pb-2'}>Personal Finance Tracker</h1>
      <div className={'pb-4'}>
        <CSVReader
          parserOptions={{ header: true }}
          onFileLoaded={(data) => setData(data)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div className={'pt-4'}>
        {data.length > 1 && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
