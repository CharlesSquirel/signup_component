import styled from "styled-components";

export const MainConainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  width: 100vw;
  height: 100vh;
  padding: 121px 165px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 525px;
`;
export const Title = styled.h1`
  font-weight: var(--bold);
  font-size: 50px;
  line-height: 55px;
  letter-spacing: -0.520833px;
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
`;
export const OfferSpan = styled.span`
font-weight: 700;
`;
