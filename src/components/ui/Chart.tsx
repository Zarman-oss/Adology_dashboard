import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Month names
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Sample varied data for better visualization
const data = months.map((m, index) => ({
  name: m,
  green: Math.floor(Math.random() * 20) + 5, // Random values between 5 and 25
  darkGreen: Math.floor(Math.random() * 15) + 5,
  blue: Math.floor(Math.random() * 20) + 5,
  yellow: Math.floor(Math.random() * 15) + 5,
  red: Math.floor(Math.random() * 10) + 5,
}));

export default function Chart() {
  // Calculate max value for dynamic Y-axis domain
  const maxValue = Math.max(
    ...data.map((d) => d.green + d.darkGreen + d.blue + d.yellow + d.red)
  );

  return (
    <div className='w-full h-[25rem] rounded-xl'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          barCategoryGap='10%'
          barGap={4}
          barSize={20}
          margin={{ top: 20, right: 10, left: 20, bottom: 5 }} // Increased left margin for YAxis
        >
          {/* Grid & Axis */}
          <CartesianGrid strokeDasharray='3 3' stroke='#888' />
          <XAxis
            dataKey='name'
            stroke='var(--text-color, #fff)' // Theme-aware color
            scale='point'
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            orientation='left' // Explicitly set to left
            stroke='var(--text-color, #fff)'
            domain={[0, Math.ceil(maxValue * 1.1)]} // Dynamic domain with 10% padding
          />

          {/* Tooltip for interactivity */}
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg, #333)',
              color: 'var(--tooltip-text, #fff)',
              borderRadius: '4px',
            }}
          />

          {/* Legend */}
          <Legend
            verticalAlign='top'
            wrapperStyle={{
              paddingBottom: '10px',
              fontSize: '12px',
              color: 'var(--text-color, #fff)',
            }}
          />

          {/* Bars */}
          <Bar dataKey='green' stackId='stack' fill='#2ecc71' name='Green' />
          <Bar
            dataKey='darkGreen'
            stackId='stack'
            fill='#145A32'
            name='Dark Green'
          />
          <Bar dataKey='blue' stackId='stack' fill='#5DADE2' name='Blue' />
          <Bar dataKey='yellow' stackId='stack' fill='#F5B041' name='Yellow' />
          <Bar dataKey='red' stackId='stack' fill='#E74C3C' name='Red' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
