 import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface Stats {
  attack: number;
  defense: number;
  stamina: number;
}

interface Props {
  stats: Stats;
}



const colors = ['#ef4444', '#10b981', '#3b82f6']

export default function BeyStatsChart({stats}: Props) {
  const data = [
    { name: 'Attack', value: stats.attack },
    { name: 'Defense', value: stats.defense },
    { name: 'Stamina', value: stats.stamina },
  ];


  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 10]}/>
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" radius={[0, 6, 6, 0]}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
