import { Carousel } from "antd";
import styled from "styled-components";

const CarouselStyled = styled(Carousel)`
  width: auto;
  @media (max-width: 768px) {
    margin-top: 64px;
  }
`
const CarouselComponent = () => {
    return (
      <>
      <CarouselStyled autoplay dots={false} effect={'fade'}>
      <img src="/images/BGlogin.png"/>
      </CarouselStyled>
      </>
    );
}

export default CarouselComponent;