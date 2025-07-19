'use client';

import CSVReader from 'react-csv-reader';
import React from 'react';
import { columns } from '@/components/finance/columns';
import { DataTable } from '@/components/finance/data-table';
import { RULES } from '@/config/config';

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
        body: JSON.stringify(
          categorizedItems.filter((data) => data.date != ''),
        ),
      });
      const result = await res.json();
      console.log(result);
    } catch {
      console.error(e);
    } finally {
      setData([]);
    }
  };

  const categorizedItems = data.map((item) => {
    let category = 'other';

    for (const [cat, keywords] of Object.entries(RULES)) {
      for (const keyword of keywords) {
        if (item.description.toLowerCase().includes(keyword)) {
          category = cat;
          break;
        }
      }
      if (category !== 'other') break;
    }

    return {
      ...item,
      category,
    };
  });

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={'text-xl pb-2'}>Personal Finance Tracker</h1>
      <div className={'pb-4'}>
        <CSVReader
          parserOptions={{ header: true }}
          onFileLoaded={(data) => console.log(data)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div className={'pt-4'}>
        {data.length > 1 && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
