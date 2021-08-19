import React, { useState} from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import ReactStarts from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {

const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant>
      <RestaurantInfo onClick={onClick}>
        <Title>{restaurant.name}</Title>
        <ReactStarts count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c">
          Avaliação
        </ReactStarts>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto
            imageLoaded={imageLoaded}
          src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
          onLoad={() => setImageLoaded(true)}
          alt="Foto do restaurante"
        />
    {!imageLoaded && <Skeleton width="100px" height="100px"/>}
    </Restaurant>
  );
};

export default RestaurantCard;
