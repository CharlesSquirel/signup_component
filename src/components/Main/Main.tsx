import React from 'react'
import { FormContainer, MainConainer, OfferSpan, OfferWrapper, TextContainer, Title } from './StyledMain'
import Form from '../Form/Form'

const Main: React.FC = () => {
  return (
    <MainConainer>
        <TextContainer>
            <Title>Learn to code by watching others</Title>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </TextContainer>
        <FormContainer>
            <OfferWrapper><OfferSpan>Try it free 7 days</OfferSpan>then $20/mo. thereafter</OfferWrapper>
            <Form></Form>
        </FormContainer>
    </MainConainer>
  )
}

export default Main