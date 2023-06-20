import React from "react";
import { Formik, FormikProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormContainer, InputContainer, StyledButton, StyledButtonContainer, StyledErrorMessage, StyledInput, StyledTermsInfo } from "./StyledForm";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string()
    .required("Required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least one uppercase letter, lowercase letter, and digit"),
});

const Form: React.FC = () => {
  const handleSubmit = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    alert("Your account has been created");
    formikHelpers.resetForm({ values: initialValues });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleSubmit, getFieldProps, touched, errors }: FormikProps<FormValues>) => (
        <FormContainer onSubmit={handleSubmit} noValidate>
          <InputContainer>
            <label htmlFor="firstName">First Name</label>
            <StyledInput id="firstName" type="text" placeholder="First Name" autoComplete="off" {...getFieldProps("firstName")} />
            {touched.firstName && errors.firstName && <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="lastName">Last Name</label>
            <StyledInput id="lastName" type="text" placeholder="Last Name" autoComplete="off" {...getFieldProps("lastName")} />
            {touched.lastName && errors.lastName && <StyledErrorMessage>{errors.lastName}</StyledErrorMessage>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email Address</label>
            <StyledInput id="email" type="email" placeholder="Email Address" autoComplete="off" {...getFieldProps("email")} />
            {touched.email && errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <StyledInput id="password" type="password" placeholder="Password" autoComplete="off" {...getFieldProps("password")} />
            {touched.password && errors.password && <StyledErrorMessage>{errors.password}</StyledErrorMessage>}
          </InputContainer>
          <StyledButtonContainer>
            <StyledButton type="submit">Claim your free trial</StyledButton>
            <StyledTermsInfo>
              By clicking the button, you are agreeing to our <span>Terms and Services</span>
            </StyledTermsInfo>
          </StyledButtonContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;
