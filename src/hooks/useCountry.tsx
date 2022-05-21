import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/dataContext';
import { getCountryAllStatus } from '../services/apiService';
import { TypeCountry } from '../types';
import { chartDefaultValue } from '../utils';

export function useCountry() {
    let { country } = useParams();
    const { state, setState } = useContext(DataContext);
    const { countries } = state;
    const countryData = countries.find(
        (countryData: TypeCountry) => countryData.Slug === country
    );

    useEffect(() => {
        if (country && countryData) {
            getCountryAllStatus(country).then((result) => {
                const chart = result;
                if (chart) {
                    const today = chart[chart.length - 1];
                    const yesterday =
                        chart.length > 1
                            ? chart[chart.length - 2]
                            : chartDefaultValue;
                    setState({
                        ...state,
                        countryName: today.Country,
                        countryCode: countryData.CountryCode.toLowerCase(),
                        tableStatus: false,
                        chartCountry: chart,
                        countryCases: {
                            Date: today.Date,
                            NewConfirmed: today.Confirmed - yesterday.Confirmed,
                            TotalConfirmed: today.Confirmed,
                            NewDeaths: today.Deaths - yesterday.Deaths,
                            TotalDeaths: today.Deaths,
                            NewRecovered: today.Recovered - yesterday.Recovered,
                            TotalRecovered: today.Recovered,
                        },
                    });
                }
            });
        }
    }, [country, countryData]);
}
