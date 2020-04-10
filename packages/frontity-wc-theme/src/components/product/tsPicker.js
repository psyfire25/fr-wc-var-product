import { styled } from "frontity";
import ProductImage from "./product-image";

const TSPicker = () => {
  return (
    <PickerWrapper>
      <ProductImage />
    </PickerWrapper>
  );
};

export default TSPicker;

const PickerWrapper = styled.div`
  width: 100vw;
  display: flex;
`;
