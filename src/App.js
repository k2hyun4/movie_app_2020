import React from 'react';
import PropTypes from 'prop-types'

function Food({name, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>rating : {rating} / 5.0</h2>  
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired
}

const foodILike = [
  {
    id: 1, 
    name: "kimchi", 
    rating: 4
  },
  {
    id: 2,
    name: "kimbab", 
    rating: 5
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} rating={dish.rating}/>;
}

function App() {
  return (
    <div>
      console.log(foodILike.map(renderFood))
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
