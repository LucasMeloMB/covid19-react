import { useState, useContext, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DataContext from '../../context/dataContext';
import { getSeries } from '../../utils/getSeries';
import { chartOptions } from '../../utils';
import './chart.scss';

function ApexChart() {
    const {
        state: { chartCountry },
    } = useContext(DataContext);
    const [series, setSeries] = useState(getSeries(chartCountry));

    useEffect(() => {
        let series = getSeries(chartCountry);
        setSeries(series);
    }, [chartCountry]);

    return (
        <div id='chart'>
            <ReactApexChart
                options={chartOptions}
                series={series}
                type='area'
                height={250}
            />
        </div>
    );
}

export default ApexChart;
