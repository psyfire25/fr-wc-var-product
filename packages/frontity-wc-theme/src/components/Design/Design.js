import { styled } from "frontity";
import Image from "./Image";

const Design = () => {
  return (
    <DesignPicker className="designPicker">
      <Content>
        <Image className="images" />
      </Content>
    </DesignPicker>
  );
};

export default Design;

const DesignPicker = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 30vh;
  padding: 10vw;
`;
const Content = styled.div``;
