import { styled } from "frontity";
import sourceImg from "./assets/tsDesigns/Blue Cat (JP).png";
const Image = () => {
  return (
    <ImageContainer>
      <img src={sourceImg} alt="source image" />
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div`
  position: absolute;
  top: 30vw;
  left: 0;
  width: 100%;
  height: 30vh;
  padding: 10vw;
`;
