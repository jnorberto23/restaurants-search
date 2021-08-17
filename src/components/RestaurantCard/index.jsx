import React from 'react';
import {Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './styles';
import ReactStarts from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'; 

const RestaurantCard = ({restaurant}) => (
<Restaurant>
    <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStarts count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c">Avaliação</ReactStarts>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } alt="Foto do restaurante" />
    </RestaurantInfo>
</Restaurant>    
);

export default RestaurantCard;
 