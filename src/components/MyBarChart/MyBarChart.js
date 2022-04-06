import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../DashBoard/DashBoard';

const MyBarChart = () => {
    const data = useContext(ChartContext)
    return (
        <div>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="sell" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default MyBarChart;