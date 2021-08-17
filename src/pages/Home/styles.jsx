import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 25%;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
`;

export const Logo = styled.img`
  padding-bottom: 15px;
  width: 20vh;
  margin: auto;
  
`;

export const Map = styled.div`
  background-color: #f01a1a;
  width: 70%;
  max-width: 70vw;
  height: 500px;
`;

export const Carousel = styled(Slider)`
.slick-slide{
  margin-right: 1px;
}

`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;
