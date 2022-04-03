import React from 'react';
import { RadialBar, RadialBarChart, Tooltip } from 'recharts';

const MyRadialBarChart = () => {
    

    // const {info} = props

    // const { month, investment, sell, revenue } = info

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div >

            <h2 className='text-4xl font-bold bg-gray-300 mx-48 rounded-t-xl'>Data Chart</h2>

            <RadialBarChart
                width={1300}
                height={1300}
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}

                className="mx-auto"
            >

                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='month' />

                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='investment' />

                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='revenue' />

                <Tooltip />

            </RadialBarChart>

        </div>
    );
};

export default MyRadialBarChart;