import React, { useContext } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../DashBoard/DashBoard';

const MyLineChart = () => {
    const data = useContext(ChartContext)
    return (
        <div>
            <LineChart width={600} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey="investment" stroke="#8884d8"></Line>
                <Line dataKey="sell" stroke="##82ca9d"></Line>
            </LineChart>
        </div>
    );
};

export default MyLineChart;