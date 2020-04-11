import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import buttonImage from "../design/assets/button.svg";
import { useSpring, a } from "react-spring";

const ProductArchive = ({ state }) => {
  // const moveR = ({ pos }, val) => {
  //   if (val >= -385) {
  //     return;
  //   } else {
  //     val + 70;
  //     return val;
  //   }
  // };
  // let moveL = (val) => {
  //   if (val <= -35) {
  //     return;
  //   } else {
  //     val - 70;
  //     return val;
  //   }
  // };
  this.state = {
    pos: -385,
  };
  const data = state.source.get(state.router.link);
  // const springProps = () =>
  //   useSpring({
  //     to: { transform: translateX(`${leftPos}vw`) },
  //     from: { transform: translateX(`${leftPos}vw`) },
  //   });

  return (
    <Store>
      <ButtonWrapper>
        <PrevButton
          onClick={() => {
            console.log("prev Click");
            console.log(pos);

            if (pos <= -385) {
              return;
            } else {
              this.state.pos + 70;
            }
          }}
        >
          <img src={buttonImage} alt="Image alt" />
        </PrevButton>
        <NextButton
          onClick={() => {
            console.log("next Click");
            console.log(pos);
            if (pos >= -385) {
              return;
            } else {
              pos - 70;
              return pos;
            }
          }}
        >
          <img className="nextBtn" src={buttonImage} alt="Image alt" />
        </NextButton>
      </ButtonWrapper>
      <a.div>
        <ProductWrapper style={{ transform: this.state.pos + "vw" }}>
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
