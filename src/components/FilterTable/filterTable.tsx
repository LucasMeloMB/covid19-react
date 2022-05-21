import moment from 'moment';
import { useContext, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import DataContext from '../../context/dataContext';
import { getCountryByDate } from '../../services/apiService';
import toastError, { chartDefaultValue } from '../../utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './filterTable.scss';

function FilterTable() {
    let { country } = useParams();
    const { state, setState } = useContext(DataContext);
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    const Search = () => {
        if (moment(startDate).isAfter(endDate) || moment().isBefore(endDate)) {
            toastError('Filter date invalid!');
            return;
        }
        const start = moment(startDate).format('YYYY-MM-DDT00:00:00[Z]');
        const end = moment(endDate).format('YYYY-MM-DDT23:59:59[Z]');
        if (country) {
            getCountryByDate(country, start, end).then((response) => {
                const chart = response;
                if (chart) {
                    const startSearch =
                        chart.length > 1 ? chart[0] : chartDefaultValue;
                    const endSearch = chart[chart.length - 1];
                    const newConfirmed =
                        endSearch.Confirmed - startSearch.Confirmed;
                    const NewRecovered =
                        endSearch.Recovered - startSearch.Recovered;
                    const NewDeaths = endSearch.Deaths - startSearch.Deaths;
                    setState({
                        ...state,
                        tableStatus: true,
                        chartCountry: chart,
                        countryCases: {
                            Date: endSearch.Date,
                            NewConfirmed: newConfirmed > 0 ? newConfirmed : 0,
                            TotalConfirmed: endSearch.Confirmed,
                            NewRecovered: NewRecovered > 0 ? NewRecovered : 0,
                            TotalRecovered: endSearch.Recovered,
                            NewDeaths: NewDeaths > 0 ? NewDeaths : 0,
                            TotalDeaths: endSearch.Deaths,
                        },
                    });
                }
            });
        }
    };

    return (
        <div className='tableContainer'>
            <div className='filter'>
                <h1>Filter:</h1>
                <div className='filterDate'>
                    <div className='select'>
                        <h1>From:</h1>
                        <ReactDatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                        />
                    </div>
                    <div className='select'>
                        <h1>To:</h1>
                        <ReactDatePicker
                            selected={endDate}
                            onChange={(date: Date) => setEndDate(date)}
                        />
                    </div>
                    <div className='buttom'>
                        <input
                            onClick={() => {
                                Search();
                            }}
                            disabled={!startDate || !endDate}
                            value='Search'
                            type='button'
                        />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default FilterTable;
