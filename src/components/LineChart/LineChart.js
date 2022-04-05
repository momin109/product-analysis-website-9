import React, { useContext } from 'react';
import { Legend, Line, Tooltip, XAxis } from 'recharts';
import { ChartContext } from '../Dashboard/Dashbord';

const LineChart = () => {
    const data = useContext(ChartContext)
    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <XAxis></XAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey={"sell"}></Line>
                <Line dataKey={"investment"}></Line>
            </LineChart>
        </div>
    );
};

export default LineChart;