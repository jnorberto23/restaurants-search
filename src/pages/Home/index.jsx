import React, { useState } from 'react';
//import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import Card from '../../components/ImageCard';

import { Container, Search, Logo, Wrapper, Map, Carousel, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    //slidesToScroll: 4,
    adaptativeHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo" />
          <TextField
            outlined
            label="Pesquisar restaurantes"
            // onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
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
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
