import axios from 'axios';
import { TypeCountryChart, TypeTotalCases } from '../types';

const request = axios.create({
    timeout: 10000,
    baseURL: 'https://api.covid19api.com',
});

async function getTotalCases() {
    try {
        const response = await request.get<TypeTotalCases>('summary');
        return response?.data;
    } catch (error) {
        console.log('Error', error);
    }
}

async function getCountryAllStatus(country: string) {
    try {
        const response = await request.get<TypeCountryChart[]>(
            `total/dayone/country/${country}`
        );
        return response?.data;
    } catch (error) {
        console.log('Error', error);
        return [];
    }
}

async function getCountryByDate(country: string, from: string, to: string) {
    try {
        const params = { params: { from, to } };
        const response = await request.get<TypeCountryChart[]>(
            `country/${country}`,
            params
        );
        return response?.data;
    } catch (error) {
        console.log('Error', error);
        return [];
    }
}

export default request;
export { getTotalCases, getCountryAllStatus, getCountryByDate };
