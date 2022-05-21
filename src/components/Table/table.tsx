import { useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DataContext from '../../context/dataContext';
import MaterialTable from 'material-table';
import { columns } from '../../utils';
import 'react-toastify/dist/ReactToastify.css';
import './table.scss';

function Table() {
    const {
        state: { tableStatus, chartCountry },
        setState,
    } = useContext(DataContext);

    return (
        <div className='table'>
            {tableStatus && (
                <MaterialTable
                    title='Filtered Cases'
                    data={chartCountry}
                    columns={columns}
                    options={{ showTitle: true, search: false, paging: true }}
                />
            )}
        </div>
    );
}

export default Table;
