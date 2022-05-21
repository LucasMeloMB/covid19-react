import { ApexOptions } from 'apexcharts';
import moment from 'moment';
import { toast } from 'react-toastify';
import { TypeCountryChart } from '../types';

export default function toastError(text: string) {
    toast.error(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    });
}

export const chartDefaultValue: TypeCountryChart = {
    Active: 0,
    City: '',
    CityCode: '',
    Confirmed: 0,
    Country: '',
    CountryCode: '',
    Date: '',
    Deaths: 0,
    Lat: '',
    Lon: '',
    Province: '',
    Recovered: 0,
};

export const chartOptions: ApexOptions = {
    chart: {
        type: 'area',
        stacked: false,
        height: 350,
        width: '100%',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 0,
    },
    title: {
        text: 'Country Cases',
        align: 'left',
    },
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        labels: {
            formatter: function (val: number) {
                return val.toLocaleString();
            },
        },
    },
};

export const columns = [
    {
        title: 'Date',
        field: 'Date',
        flex: 1,
        render: (value: any) => moment(value.Date).utc().format('l'),
    },
    {
        title: 'Confirmed',
        field: 'Confirmed',
        flex: 1,
        render: (value: any) => value.Confirmed.toLocaleString(),
    },
    {
        title: 'Recovered',
        field: 'Recovered',
        flex: 1,
        render: (value: any) => value.Recovered.toLocaleString(),
    },
    {
        title: 'Deaths',
        field: 'Deaths',
        flex: 1,
        render: (value: any) => value.Deaths.toLocaleString(),
    },
];
