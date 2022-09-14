import Card from '../card/card.component';
import './card-list.styles.css';
const CardList = ({monsters}) => {
  // app rerenders every time props change too
  // The first app.js render, the props is an empty array
  // right after componenetDidMount, the second render will be the list

 return <div className='card-list'>
     {monsters.map( (monster) => {
        return <Card monster={monster} key={monster.id}/>
      })}
    </div>

}

export default CardList;