import React from "react";
import { FormContainer, InputContainer, StyledButton, StyledButtonContainer, StyledErrorMessage, StyledInput, StyledTermsInfo } from "./StyledForm";

const Form: React.FC = () => {
  return (
    <FormContainer>
      <InputContainer>
        <label htmlFor="firstName">First Name</label>
        <StyledInput id="firstName" name="firstName" type="text" placeholder="First Name" autoComplete="off"/>
        <StyledErrorMessage>Invalid</StyledErrorMessage>
      </InputContainer>
      <InputContainer>
        <label htmlFor="lastName">Last Name</label>
        <StyledInput id="lastName" name="lastName" type="text" placeholder="Last Name" autoComplete="off"/>
        <StyledErrorMessage>Invalid</StyledErrorMessage>
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">Email Address</label>
        <StyledInput id="email" name="email" type="email" placeholder="Email Address" autoComplete="off"/>
        <StyledErrorMessage>Invalid</StyledErrorMessage>
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput id="password" name="password" type="password" placeholder="Password" autoComplete="off"/>
        <StyledErrorMessage>Invalid</StyledErrorMessage>
      </InputContainer>
      <StyledButtonContainer>
        <StyledButton>Claim your free trial</StyledButton>
        <StyledTermsInfo>
          By clicking the button, you are agreeing to our <span>Terms and Services</span>
        </StyledTermsInfo>
      </StyledButtonContainer>
    </FormContainer>
  );
};

export default Form;
