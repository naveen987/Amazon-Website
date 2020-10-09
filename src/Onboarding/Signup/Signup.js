/* eslint-disable global-require */
import React from 'react';
import { 
 Container, StyledImage, LoginCard, StyledInput, Header, StyledButton, Label, PrivacyText, StyledLink, StyledDivider, StyledButtons
} from './styles';

const SignUp = () => (
  <Container>
    <StyledImage src={require('../../assests/Amazon.svg')} alt="" />
    <LoginCard>
      <Header>Login</Header>
      <Label>Email or mobile phone number</Label>
      <StyledInput />
      <StyledButton>Continue</StyledButton>
      <PrivacyText>
        By continuing, you agree to Amazon's 
        <StyledLink href="www.google.com">Conditions of Use</StyledLink> 
        and 
        <StyledLink href="www.google.com">Privacy Notice.</StyledLink>
      </PrivacyText>
    </LoginCard>
    <StyledDivider plain>New to Amazon?</StyledDivider>
    <StyledButtons>Create your Amazon account</StyledButtons>
  </Container>
);
export default SignUp;
