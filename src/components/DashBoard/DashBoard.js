import React, { createContext, useEffect, useState } from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

export const ChartContext = createContext();
const DashBoard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, [])
    return (
        <ChartContext.Provider value={charts}>
            <div>
                <MyLineChart></MyLineChart>
                <MyBarChart></MyBarChart>
            </div>
        </ChartContext.Provider>
    );
};

export default DashBoard;