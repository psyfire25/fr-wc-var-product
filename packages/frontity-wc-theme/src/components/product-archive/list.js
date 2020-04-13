import React from "react";
import { connect, styled, useState} from "frontity";
import Item from "./list-item";
import buttonImage from "../design/assets/button.svg";
import { useSpring, a } from "react-spring";

const ProductArchive = ({ state }) => {
  const data = state.source.get(state.router.link);
  
  const [style, setStyle] = useState({
    transform: translateX(${pos})
  });

  const [pos, setPos] = useState({
    let pos = 
    setStyle({ ...style, transform: translateX`${x}%` });
  });
  const moveEProductWrapper = (val) => {
    if (pos >= -385) {
      let res = pos + val;
      setPos({ ...style, transform: translateX(`${res}%`vw})
    }
  };

  return (
    <Store>
      <ButtonWrapper>
        <PrevButton onClick={moveEProductWrapper(70)}>
          <img src={buttonImage} alt="Image alt" />
        </PrevButton>
        <NextButton onClick={moveEProductWrapper(-70)}>
          <img className="nextBtn" src={buttonImage} alt="Image alt" />
        </NextButton>
      </ButtonWrapper>
      <a.div>
        <ProductWrapper id="pw">
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
  transform: translateX(${pos}vw);
  display: flex;
  position: absolute;
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
