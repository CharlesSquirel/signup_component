import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 540px;
  height: auto;
  padding: 40px;
  background-color: var(--white);
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  @media (max-width: 870px) {
    gap: 16px;
    width: 327px;
    padding: 24px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const StyledInput = styled.input`
  width: 460px;
  height: 56px;
  padding-left: 32px;
  background: var(--white);
  border: 1px solid var(--input-border);
  border-radius: 5px;
  outline: 0;
  font-weight: var(--semi-bold);
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: var(--gray);
  ::placeholder {
    opacity: 0.75;
  }
  :focus {
    border: 1px solid var(--violet);
    opacity: 1;
  }
  @media (max-width: 870px) {
    width: 279px;
    padding-left: 20px;
  }
`;
export const StyledErrorMessage = styled.p`
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  color: var(--pink);
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledButton = styled.button`
  width: 460px;
  height: 56px;
  background: var(--green);
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  border: none;
  font-weight: var(--semi-bold);
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 1px;
  color: var(--white);
  :hover {
    background: var(--green-hover);
  }
  @media (max-width: 870px) {
    width: 279px;
  }
`;
export const StyledTermsInfo = styled.p`
  font-weight: var(--regular);
  font-size: 11px;
  line-height: 26px;
  text-align: center;
  color: var(--terms-color);
  span {
    color: var(--pink);
  }
  @media (max-width: 870px) {
    line-height: 21px;
  }
`;
