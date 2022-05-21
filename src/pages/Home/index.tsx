import { useContext, useEffect } from 'react';
import CasesPanel from '../../components/CasesPanel/casesPanel';
import FlagList from '../../components/FlagList/flagList';
import Header from '../../components/Header/header';
import DataContext from '../../context/dataContext';
import './home.scss';

function Home() {
    const { state, setState } = useContext(DataContext);
    const { countries } = state;
    useEffect(() => {
        setState({
            ...state,
            countryName: '',
            countryCode: '',
            countrySearch: countries,
        });
    }, []);
    return (
        <>
            <Header />
            <div className='home'>
                <div className='cards'>
                    <CasesPanel />
                </div>
                <div className='flags'>
                    <FlagList />
                </div>
            </div>
        </>
    );
}

export default Home;
