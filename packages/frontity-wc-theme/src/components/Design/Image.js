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
  top: 0vw;
  left: 14vw;
  width: 60%;
  height: 30vh;
  padding: 10vw;
`;
