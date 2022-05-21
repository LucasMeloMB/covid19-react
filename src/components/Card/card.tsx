import { CardsList } from '../../types';
import './card.scss';

function Card({ title, totalCases, newCases, type }: CardsList) {
    return (
        <div className='card'>
            <div className='cardContent'>
                <div className='cardText'>{title}</div>
                <div className='bigNumber'>{totalCases.toLocaleString()}</div>
                <div className='smallNumberWrapper'>
                    <span className='smallNumber'>
                        {newCases.toLocaleString()}
                    </span>
                    new {type}
                </div>
            </div>
        </div>
    );
}

export default Card;
