import React, { useState } from 'react';
//import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard, Modal, Map} from '../../components';

import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    //slidesToScroll: 4,
    adaptativeHeight: true,
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo" />
          <TextField
            outlined
            label="Pesquisar restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} 
            onKeyPress={handleKeyPress} 
            onChange={(e) => setInputValue(e.target.value)} 
            />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Cantinho 1"/>
            <Card photo={restaurante} title="Cantinho 2"/>
            <Card photo={restaurante} title="Cantinho 3"/>
            <Card photo={restaurante} title="Cantinho 4"/>
            <Card photo={restaurante} title="Cantinho 5"/>
          </Carousel>
          
        </Search>
        <RestaurantCard/>
      </Container>
      <Map query={query}/>
   <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}></Modal>
    </Wrapper>
  );
};

export default Home;
