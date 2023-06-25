import React from 'react'
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts'

const data = [
    { name: "Group A", value: 2400 },
    { name: 'Group B', value: 4567 },

]

const COLORS = ['#ce93d8', '#5c6bc0']

const SimplePieCharts = () => {
  return (
    <div style={{ width: '100%', height: 200}}>
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    dataKey="value" 
                    data={data}
                    innerRadius={60}
                    outerRadius={85}
                    fill="#82ca9d"
                >
                   {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}     
                </Pie>
                <Tooltip />
            </PieChart>

        </ResponsiveContainer>
    </div>
  )
}

export default SimplePieCharts