import { Link } from 'react-router-dom';

const ListItem = ({ name, id, rating, image }) => {
    return (
        <Link to={`/singleshow/${id}`}>
            <div className="list-item">
                <img src={image} alt={name} />
                <div className='card-info'>
                    <p className='it-name'>{name}</p>
                    <p className='it-rating'>{rating}</p>
                </div>
            </div>
        </Link>
    )
}

export default ListItem;