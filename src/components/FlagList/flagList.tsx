import { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/dataContext';
import FlagButton from '../FlagButton/flagButton';
import './flagList.scss';

function FlagList() {
    const { state, setState } = useContext(DataContext);
    const { countries, countrySearch } = state;

    function searchCharacter(event: string) {
        const countrySearch = countries.filter((value) =>
            value.Country.toLowerCase().includes(event.toLowerCase())
        );
        setState({ ...state, countrySearch });
    }

    return (
        <div className='container'>
            <div className='search-bar'>
                <h1 className='title-input'>Search </h1>
                <input
                    type='text'
                    onChange={(event) => searchCharacter(event.target.value)}
                />
            </div>
            <div className='flag-grid'>
                {countrySearch &&
                    countrySearch.map((country, index) => (
                        <FlagButton
                            {...country}
                            key={`${index}-${country.Slug}`}
                        />
                    ))}
            </div>
        </div>
    );
}

export default FlagList;
