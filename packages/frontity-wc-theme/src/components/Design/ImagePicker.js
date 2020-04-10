import { useSpring, a } from "react-spring";
import { styled } from "frontity";
import Image from "./Image";

const ImagePicker = () => {
  return (
    <ImagePickerWrapper>
      <Image />
    </ImagePickerWrapper>
  );
};

export default ImagePicker;

const ImagePickerWrapper = styled.div`
  width: 1005;
`;
