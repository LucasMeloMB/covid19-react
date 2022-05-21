import { useNavigate } from 'react-router-dom';
import { TypeCountry } from '../../types';
import './flagButton.scss';

function FlagButton({ Country, CountryCode, Slug }: TypeCountry) {
    let navigate = useNavigate();
    return (
        <button
            className='flag-card'
            onClick={() => navigate(`/covid19-react/${Slug}`)}
        >
            <img
                className='flag'
                src={`https://flagpedia.net/data/flags/w160/${CountryCode.toLowerCase()}.png`}
                alt={'brasil'}
            />
            <h3>{Country}</h3>
        </button>
    );
}

export default FlagButton;
