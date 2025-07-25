'use client';

import React, { useEffect, useState } from 'react';
import { columns } from '@/components/finance/columns';
import { DataTable } from '@/components/finance/data-table';
import { ChartPieCategory } from '@/components/chart/pie-category';
import { ChartLineTrend } from '@/components/chart/line-chart-trend';

export default function Page() {
  const [data, setData] = useState(null);
  const [analyticsPie, setAnalyticsPie] = useState(null);
  const [trend, setTrend] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/finance')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });

    fetch('/api/v1/analytics')
      .then((res) => res.json())
      .then((data) => {
        setAnalyticsPie(data);
        setLoading(false);
      });

    fetch('/api/v1/trend')
      .then((res) => res.json())
      .then((data) => {
        setTrend(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={'text-xl pb-2'}>Personal Finance Tracker</h1>
      <div className={'pt-4'}>
        <DataTable columns={columns} data={data} />
      </div>
      <div className={'flex gap-4 pt-4'}>
        <ChartPieCategory chartData={analyticsPie} />
        <ChartLineTrend chartData={trend} />
      </div>
    </div>
  );
}
