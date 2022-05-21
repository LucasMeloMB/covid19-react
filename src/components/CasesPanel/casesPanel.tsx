import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../context/dataContext';
import { mountCards } from '../../utils/mountCards';
import { CardsList } from '../../types';
import Card from '../Card/card';
import './casesPanel.scss';
import moment from 'moment';

function CasesPanel() {
    let { country } = useParams();
    const {
        state: { totalCases, countryCases },
    } = useContext(DataContext);
    const totalList: CardsList[] = mountCards(
        country,
        totalCases,
        countryCases
    );
    const lastUpdated: string = !country ? totalCases.Date : countryCases.Date;

    return (
        <>
            <h3 className='update'>
                {`Data last updated: ${moment(lastUpdated).utc().format('l')}`}
            </h3>
            <div className='list'>
                {totalList &&
                    totalList.map((card, index) => (
                        <Card {...card} key={`${index}-${card.title}`} />
                    ))}
            </div>
        </>
    );
}

export default CasesPanel;
