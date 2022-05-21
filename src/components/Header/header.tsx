import './header.scss';
import globe from '../../assets/images/planet-icon.png';
import { useContext } from 'react';
import DataContext from '../../context/dataContext';
import { useNavigate } from 'react-router-dom';
import { Icon, IconButton } from '@mui/material';

function Header() {
    let navigate = useNavigate();
    const { state } = useContext(DataContext);
    const { countryName, countryCode } = state;

    return (
        <header>
            <div className='content'>
                <div className='title'>
                    {countryName !== '' && (
                        <IconButton
                            onClick={() => navigate(`/covid19-react`)}
                            color='inherit'
                            aria-label='back to home page'
                        >
                            <Icon className='icon'>reply</Icon>
                        </IconButton>
                    )}
                    <div>COVID Status</div>
                </div>
                <div className='currentCountry'>
                    {countryName !== '' ? (
                        <>
                            <img
                                className='flag'
                                src={`https://flagpedia.net/data/flags/w80/${countryCode}.png`}
                                alt='Flag'
                            />
                            <div>{`${countryName}`}</div>
                        </>
                    ) : (
                        <>
                            <img className='globe' src={globe} alt='Globe' />
                            <div>Global</div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
