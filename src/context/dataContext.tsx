import React, { createContext, useEffect, useState } from 'react';
import { getTotalCases } from '../services/apiService';
import { TypeCountry, TypeCountryChart, TypeGlobal } from '../types';

type DataType = {
    countryName: string;
    countryCode: string;
    countries: TypeCountry[];
    countrySearch: TypeCountry[];
    chartCountry: TypeCountryChart[];
    tableStatus: boolean;
    totalCases: TypeGlobal;
    countryCases: TypeGlobal;
};

type PropsDataContext = {
    state: DataType;
    setState: React.Dispatch<React.SetStateAction<DataType>>;
};

const dataDefault: PropsDataContext = {
    state: {
        countryName: '',
        countryCode: '',
        countries: [],
        countrySearch: [],
        chartCountry: [],
        tableStatus: false,
        totalCases: {
            Date: '',
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0,
        },
        countryCases: {
            Date: '',
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0,
        },
    },
    setState: () => {},
};

const DataContext = createContext<PropsDataContext>(dataDefault);

const DataContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(dataDefault.state);

    useEffect(() => {
        getTotalCases().then((response) => {
            const totalCases = response?.Global;
            const countries = response?.Countries;
            if (totalCases && countries)
                setState({
                    ...state,
                    totalCases,
                    countries,
                    countrySearch: countries,
                });
        });
    }, []);

    return (
        <DataContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
export { DataContextProvider };
export default DataContext;
