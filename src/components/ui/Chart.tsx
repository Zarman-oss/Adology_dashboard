import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from 'recharts';
import { chartData } from '../../data/chartData';

export default function Chart() {
  return (
    <div className='w-full h-[300px] rounded-xl'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={chartData} barCategoryGap='25%'>
          <CartesianGrid strokeDasharray='2 2' stroke='#444' />
          <XAxis dataKey='name' stroke='#fff' />

          {/* Group A */}
          <Bar dataKey='groupA1' stackId='A' fill='#e74c3c' />
          <Bar dataKey='groupA2' stackId='A' fill='#f39c12' />
          <Bar dataKey='groupA3' stackId='A' fill='#3498db' />
          <Bar dataKey='groupA4' stackId='A' fill='#2ecc71' />

          {/* Group B */}
          <Bar dataKey='groupB1' stackId='B' fill='#e74c3c' />
          <Bar dataKey='groupB2' stackId='B' fill='#f39c12' />
          <Bar dataKey='groupB3' stackId='B' fill='#3498db' />
          <Bar dataKey='groupB4' stackId='B' fill='#2ecc71' />

          {/* Group C */}
          <Bar dataKey='groupC1' stackId='C' fill='#e74c3c' />
          <Bar dataKey='groupC2' stackId='C' fill='#f39c12' />
          <Bar dataKey='groupC3' stackId='C' fill='#3498db' />
          <Bar dataKey='groupC4' stackId='C' fill='#2ecc71' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
