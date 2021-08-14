import React from 'react';
import {Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './styles';
import ReactStarts from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'; 
const RestaurantCard = () => (
<Restaurant>
    <RestaurantInfo>
        <Title>Casa do Caminho</Title>
        <ReactStarts count={5} isHalf edit={false} value={4} activeColor="#e7711c">Avaliação</ReactStarts>
        <Address>Rua Rio de Janeiro, 91</Address>
        <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
    </RestaurantInfo>
</Restaurant>    
);

export default RestaurantCard;
 