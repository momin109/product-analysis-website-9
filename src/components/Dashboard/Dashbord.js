import React, { useEffect, useState } from 'react';
import { LineChart } from 'recharts';


export const ChartContext = React.createContext();
const Dashbord = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, [])
    return (
        <div>
            <ChartContext.Provider value={charts}>
                <div className='grid grid-cols-2'>
                    <LineChart></LineChart>
                </div>
            </ChartContext.Provider>
        </div>
    );
};

export default Dashbord;
