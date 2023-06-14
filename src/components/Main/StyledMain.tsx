import styled from "styled-components";

export const MainConainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  width: 100vw;
  height: 100vh;
  padding: 121px 165px;
  @media (max-width: 870px) {
    flex-direction: column;
    gap: 64px;
    padding: 88px 24px;
    height: auto;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 525px;
  @media (max-width: 870px) {
    gap: 16px;
    width: 327px;
    p {
      text-align: center;
    }
  }
`;
export const Title = styled.h1`
  font-weight: var(--bold);
  font-size: 50px;
  line-height: 55px;
  letter-spacing: -0.520833px;
  @media (max-width: 870px) {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.291667px;
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const OfferWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 540px;
  height: 60px;
  background-color: var(--violet);
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.267857px;
  @media (max-width: 870px) {
    display: block;
    width: 327px;
    height: 88px;
    align-self: center;
    padding: 18px 66px;
    text-align: center;
  }
`;
export const OfferSpan = styled.span`
  font-weight: 700;
`;
