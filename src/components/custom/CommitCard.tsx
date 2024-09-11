'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Line,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const CommitCard = () => {
  const [commitCount, setCommitCount] = useState(0);
  const [weekData, setWeekData] = useState<{ date: string; count: number }[]>([]);

  const fetchCommits = async () => {
    try {
      const response = await fetch('/api/email/commits/');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCommitCount(data.totalCommits);

      const formattedData = data.weekData.map((commit: { date: string; count: number }) => ({
        date: commit.date,
        count: commit.count,
      }));
      setWeekData(formattedData);
    } catch (error) {
      console.error('Error fetching commits:', error);
    }
  };

  useEffect(() => {
    fetchCommits(); 
    const intervalId = setInterval(fetchCommits, 43200000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <Card className="flex flex-col lg:max-w-md">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
        <div>
          <CardDescription>Github</CardDescription>
          <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
            {commitCount}
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              commits
            </span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center">
        <ChartContainer
          config={{
            resting: {
              label: 'Commits',
              color: 'hsl(var(--chart-1))',
            },
          }}
          className="w-full"
        >
          <LineChart
            width={400}
            height={200}
            data={weekData}
            margin={{
              left: 14,
              right: 14,
              top: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="hsl(var(--muted-foreground))"
              strokeOpacity={0.5}
            />
            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                });
              }}
            />
            <Line
              dataKey="count"
              type="natural"
              fill="var(--color-resting)"
              stroke="var(--color-resting)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                fill: 'var(--color-resting)',
                stroke: 'var(--color-resting)',
                r: 4,
              }}
            />
            <ChartTooltip
              content={(
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    });
                  }}
                />
              )}
              cursor={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CommitCard;
