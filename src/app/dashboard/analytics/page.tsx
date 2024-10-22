'use client';

import { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

interface ChartData {
  month: number;
  year: number;
  desktop: number;
  mobile: number;
}

const chartData: ChartData[] = [
  { year: 2023, month: 1, desktop: 1836, mobile: 80 },
  { year: 2023, month: 2, desktop: 305, mobile: 200 },
  { year: 2023, month: 3, desktop: 237, mobile: 120 },
  { year: 2023, month: 4, desktop: 73, mobile: 190 },
  { year: 2023, month: 5, desktop: 209, mobile: 130 },
  { year: 2023, month: 6, desktop: 2414, mobile: 140 },
  { year: 2023, month: 7, desktop: 1836, mobile: 80 },
  { year: 2023, month: 8, desktop: 305, mobile: 200 },
  { year: 2023, month: 9, desktop: 237, mobile: 1250 },
  { year: 2023, month: 10, desktop: 73, mobile: 190 },
  { year: 2023, month: 11, desktop: 209, mobile: 130 },
  { year: 2023, month: 12, desktop: 214, mobile: 1430 },
  { year: 2024, month: 1, desktop: 1500, mobile: 300 },
  { year: 2024, month: 2, desktop: 320, mobile: 210 },
];

const chartConfig: ChartConfig = {
  desktop: { label: 'Desktop', color: '#2563eb' },
  mobile: { label: 'Mobile', color: '#7CFC00' },
};

export default function Analytic() {
  const [selectedYear, setSelectedYear] = useState<number>(2023);
  const [filteredData, setFilteredData] = useState<ChartData[]>([]);

  const handleFilter = () => {
    const data = chartData
      .filter((item) => item.year === selectedYear)
      .sort((a, b) => a.month - b.month);

    setFilteredData(data);
  };

  useEffect(() => {
    handleFilter();
  }, [selectedYear]);

  const handleRemoveFilters = () => {
    setSelectedYear(2023);
    setFilteredData(chartData.filter((item) => item.year === 2023));
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Analytics</h2>
      <div className="w-full h-auto flex flex-col pb-10 items-center bg-white">
        <div className="w-full border-b p-4 flex gap-5 items-center">
          <Select onValueChange={(value) => setSelectedYear(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o ano" />
            </SelectTrigger>
            <SelectContent>
            <SelectContent>
              {Array.from(new Set(chartData.map((item) => item.year))).map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
            </SelectContent>
          </Select>
          <Button variant="destructive" onClick={handleRemoveFilters}>
            Remover Filtros
          </Button>
        </div>
        <div className="max-h-[600px] max-w-[1000px] w-full">
          <ChartContainer config={chartConfig} className="w-full h-full border p-3 m-5">
            <BarChart data={filteredData} width={800} height={400}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickFormatter={(month) =>
                  new Date(0, month - 1).toLocaleString('default', { month: 'short' })
                }
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
              <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
