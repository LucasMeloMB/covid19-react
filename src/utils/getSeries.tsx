import { TypeCountryChart } from '../types';

export function getSeries(chartCountry: TypeCountryChart[]) {
    const seriesCases = chartCountry.map((date) => {
        return {
            x: date.Date,
            y: date.Confirmed,
        };
    });

    const seriesRecovereds = chartCountry.map((date) => {
        return {
            x: date.Date,
            y: date.Recovered,
        };
    });

    const seriesDeath = chartCountry.map((date) => {
        return {
            x: date.Date,
            y: date.Deaths,
        };
    });

    const series = [
        {
            name: 'TotalCases',
            data: seriesCases,
        },
        {
            name: 'Recovereds',
            data: seriesRecovereds,
        },
        {
            name: 'Deaths',
            data: seriesDeath,
        },
    ];

    return series;
}
