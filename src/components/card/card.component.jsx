
import './card.styles.css';

const Card = (props) => {
    const {monster} = props;
    const {id, email, name} = monster
  return <div className='card-container' key={id}>
        <img alt={`${id}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <p>{name}</p>
        <p>{email}</p>
    </div>

}

export default Card;
