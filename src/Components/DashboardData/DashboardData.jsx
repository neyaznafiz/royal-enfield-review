import React, { useEffect, useState } from 'react';
import MyRadialBarChart from '../MyRadialBarChart/MyRadialBarChart';

const DashboardData = () => {

    const [infos, setInfos] = useState([])

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res => res.json())
            .then(data => setInfos(data))

    }, [])

    return (
        <div>
         {/* {
             infos.map(info => <MyRadialBarChart info={info}></MyRadialBarChart>)
         } */}
        </div>
    );
};

export default DashboardData;