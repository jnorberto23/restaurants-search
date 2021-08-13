import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import { Container, Search, Logo, Wrapper, Map, CarouselTittle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

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
          <CarouselTittle>Na sua área</CarouselTittle>
        </Search>
      </Container>
      <Map/>
    </Wrapper>
   
  );
};

export default Home;
