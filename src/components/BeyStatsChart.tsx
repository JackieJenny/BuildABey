import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

interface Stats {
  attack: number;
  defense: number;
  stamina: number;
}

interface Props {
  stats: Stats;
}

export default function BeyStatsChart({ stats }: Props) {
  const data = [
    { name: 'ATTACK', value: stats.attack },
    { name: 'DEFENCE', value: stats.defense },
    { name: 'STAMINA', value: stats.stamina },
  ];

  return (
      <div className="w-full h-[200px]">
        <ResponsiveContainer>
          <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
              barCategoryGap={20}
          >
            <XAxis type="number" domain={[0, 10]} hide />
            <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#fff',
                  fontSize: 16,
                  fontWeight: 600,
                }}
                width={90}
            />
            <Bar
                dataKey="value"
                barSize={28}
                radius={999}
                fill="#d1d5db"
                background={{
                  radius: 999,
                  fill: 'transparent',
                  stroke: '#fff',
                  strokeWidth: 1.5,
                }}
            >

            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
}
