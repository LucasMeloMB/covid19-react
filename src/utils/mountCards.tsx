import { TypeGlobal } from '../types';

export function mountCards(
    country: string | undefined,
    totalCases: TypeGlobal,
    countryCases: TypeGlobal
) {
    return [
        {
            title: 'Total Cases',
            totalCases: !country
                ? totalCases.TotalConfirmed
                : countryCases.TotalConfirmed,
            newCases: !country
                ? totalCases.NewConfirmed
                : countryCases.NewConfirmed,
            type: 'cases',
        },
        {
            title: 'Total Recovereds',
            totalCases: !country
                ? totalCases.TotalRecovered
                : countryCases.TotalRecovered,
            newCases: !country
                ? totalCases.NewRecovered
                : countryCases.NewRecovered,
            type: 'recovereds',
        },
        {
            title: 'Total Deaths',
            totalCases: !country
                ? totalCases.TotalDeaths
                : countryCases.TotalDeaths,
            newCases: !country ? totalCases.NewDeaths : countryCases.NewDeaths,
            type: 'deaths',
        },
    ];
}
