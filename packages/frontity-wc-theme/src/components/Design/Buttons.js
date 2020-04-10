import { styled } from "frontity";
import buttonImage from "../design/assets/button.svg";

const Buttons = () => {
  const prevClickHandler = () => {};
  const nextClickHandler = () => {};
  return (
    <ButtonWrapper>
      <PrevButton onClick={prevClickHandler}>
        <img src={buttonImage} alt="Image alt" />
      </PrevButton>
      <NextButton onClick={nextClickHandler}>
        <img className="nextBtn" src={buttonImage} alt="Image alt" />
      </NextButton>
    </ButtonWrapper>
  );
};

export default Buttons;

const ButtonWrapper = styled.div`
  display: flex;
  width: 70vw;
  position: absolute;
  top: 30vh;
  left: 15vw;
  justify-content: space-between;
`;

const PrevButton = styled.div``;

const NextButton = styled.div`
  .nextBtn {
    transform: rotate(180deg);
  }
`;
