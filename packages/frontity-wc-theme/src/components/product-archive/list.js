import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import buttonImage from "../design/assets/button.svg";
import { useSpring, a } from "react-spring";

const ProductArchive = ({ state }) => {
  const data = state.source.get(state.router.link);
  let leftPos = 15;
  const springProps = useSpring({
    left: `${leftPos}vw`,
    from: { left: `${leftPos}vw` },
  });

  return (
    <Store>
      <ButtonWrapper>
        <PrevButton
          onClick={(leftPos) => {
            leftPos + 100;
            console.log("prev clicked");
            console.log(leftPos);
          }}
        >
          <img src={buttonImage} alt="Image alt" />
        </PrevButton>
        <NextButton
          onClick={(leftPos) => {
            leftPos - 100;
            console.log("next clicked");
            console.log(leftPos);
          }}
        >
          <img className="nextBtn" src={buttonImage} alt="Image alt" />
        </NextButton>
      </ButtonWrapper>
      <a.div style={springProps}>
        <ProductWrapper>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <Item key={item.id} item={item} />;
            //            return <div key={item.id}>{item.id}</div>
          })}
        </ProductWrapper>
      </a.div>
    </Store>
  );
};

export default connect(ProductArchive);

const ProductWrapper = styled.div`
  display: flex;
`;

const Store = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 70vw;
  position: absolute;
  top: 30vh;
  left: 15vw;
  justify-content: space-between;
  z-index: 999;
`;

const PrevButton = styled.div``;

const NextButton = styled.div`
  .nextBtn {
    transform: rotate(180deg);
  }
`;
