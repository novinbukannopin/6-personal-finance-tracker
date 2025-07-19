'use client';

import React, { useEffect, useState } from 'react';
import { columns } from '@/components/finance/columns';
import { DataTable } from '@/components/finance/data-table';

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/finance')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={'text-xl pb-2'}>Personal Finance Tracker</h1>
      <div className={'pt-4'}>
        {data.length > 1 && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
