import React from 'react';
import { FunnelChart, Funnel, XAxis, LabelList, Tooltip } from 'recharts';

const MyFunnelChart = () => {

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
        <FunnelChart width={730} height={250}>
            <Tooltip />
            <Funnel
                dataKey={'revenue'}
                data={data}
                >
                     <LabelList position="right" fill="#000" stroke="none" dataKey="month" />
            </Funnel>
            {/* <XAxis dataKey='investment'></XAxis> */}
        </FunnelChart>
    );
};

export default MyFunnelChart;