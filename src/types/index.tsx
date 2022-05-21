export type TypeCountry = {
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
};

export type TypeCountryChart = {
    Active: number;
    City: string;
    CityCode: string;
    Confirmed: number;
    Country: string;
    CountryCode: string;
    Date: string;
    Deaths: number;
    Lat: string;
    Lon: string;
    Province: string;
    Recovered: number;
};

export type TypeGlobal = {
    Date: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
};

export type TypeTotalCases = {
    Countries: TypeCountry[];
    Global: TypeGlobal;
};

export type CardsList = {
    title: string;
    totalCases: number;
    newCases: number;
    type: string;
};
