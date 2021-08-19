import React, { useState } from 'react';
import { useSelector } from 'react-redux';
//import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map, Loader } from '../../components';

import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle, ModalTitle, ModalContent} from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState(null);
  const [query, setQuery] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    adaptativeHeight: true,
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  };

  const handleOpenModal = (placeId) => {
    setPlaceId(placeId);
    setModalOpened(true);
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo" />
          <TextField
            outlined
            label="Pesquisar restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          {restaurants.length > 0 ? (
            <>
            <CarouselTitle>Na sua área</CarouselTitle>
            <Carousel {...settings}>
              {restaurants.map((restaurant) => (
                <Card
                  key={restaurant.place_id}
                  title={restaurant.name}
                  photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                />
              ))}
            </Carousel>
            </>

          ):(
            <Loader/>
          )}

        </Search>

        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>

      <Map query={query} placeId={placeId} />
      <Modal 
      open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? "Aberto agora :)" : "Fechado no momento :("}</ModalContent>
      </Modal>
    </Wrapper>
  );
};

export default Home;
