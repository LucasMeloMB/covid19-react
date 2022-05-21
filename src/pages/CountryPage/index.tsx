import CasesPanel from '../../components/CasesPanel/casesPanel';
import ApexChart from '../../components/Chart/chart';
import FilterTable from '../../components/FilterTable/filterTable';
import Header from '../../components/Header/header';
import Table from '../../components/Table/table';
import { useCountry } from '../../hooks/useCountry';
import './country.scss';

function CountryPage() {
    useCountry();
    return (
        <>
            <Header />
            <div className='country'>
                <div className='cards'>
                    <CasesPanel />
                </div>
                <div className='body'>
                    <FilterTable />
                    <div className='chart'>
                        <ApexChart />
                    </div>
                    <div className='table'>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CountryPage;
