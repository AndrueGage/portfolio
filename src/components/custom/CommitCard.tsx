'use client'

import {
  LineChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Line,
  ResponsiveContainer
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

export default function CommitCard({data} :any) {

  return (
    <Card className="sm:col-span-2 w-full lg:max-w-[358px]  rounded-xl flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
        <div>
          <CardDescription>Github</CardDescription>
          <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
            {data.totalCommits}
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              Commits this week
            </span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer
          config={{
            resting: {
              label: 'COUNT',
              color: 'hsl(var(--chart-1))',
            },
          }}
          className="w-full h-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data.formattedData}
              margin={{
                top: 10,
                right: 25,
                left: 25,
                bottom: 10,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--muted-foreground))"
                strokeOpacity={0.5}
              />
              <YAxis 
                hide 
                domain={['dataMin - 1', 'dataMax + 1']} 
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => {
                  const date = new Date(`${value}T00:00:00Z`);
                  return date.toLocaleString('en-US', {
                    weekday: 'short',
                    timeZone: 'UTC'
                  });
                }}
                
              />
              <Line
                dataKey="count"
                type="monotone"
                name="Commit Count"
                stroke="var(--color-resting)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  fill: 'var(--color-resting)',
                  stroke: 'var(--color-resting)',
                  r: 6,
                }}
              />
              <ChartTooltip
                content={(
                  <ChartTooltipContent
                    indicator="line"
                    labelFormatter={(value) => {
                      const date = new Date(`${value}T00:00:00Z`);
                      return  date.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        timeZone: 'UTC'
                      });
                    }}
                  />
                )}
                cursor={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}