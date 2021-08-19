<<<<<<< Updated upstream
import React from 'react';
import {Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './styles';
import ReactStarts from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'; 

const RestaurantCard = ({restaurant, onClick}) => (
<Restaurant>
    <RestaurantInfo onClick={onClick}>
        <Title>{restaurant.name}</Title>
        <ReactStarts count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c">Avaliação</ReactStarts>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
=======
import React from 'react';
import {Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './styles';
>>>>>>> parent of 4cf36d8 (finalizando  skeleton e lottie)
import ReactStarts from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'; 

<<<<<<< HEAD
const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant>
      <RestaurantInfo onClick={onClick}>
=======
const RestaurantCard = ({restaurant, onClick}) => (
<Restaurant>
    <RestaurantInfo onClick={onClick}>
>>>>>>> parent of 4cf36d8 (finalizando  skeleton e lottie)
        <Title>{restaurant.name}</Title>
        <ReactStarts count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c">Avaliação</ReactStarts>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
<<<<<<< HEAD
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};
=======
>>>>>>> Stashed changes
        <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } alt="Foto do restaurante" />
    </RestaurantInfo>
</Restaurant>    
);
<<<<<<< Updated upstream
=======
>>>>>>> parent of 4cf36d8 (finalizando  skeleton e lottie)
>>>>>>> Stashed changes

export default RestaurantCard;
 