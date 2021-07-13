import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

const SectionWrapper = styled.div`
  width: 100%;
  margin: 3rem 0;
  background: #3c50e0;
  padding: 12.5rem 5rem;
`;

const SectionInnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
  }
`;

const ContactUsInfo = styled.div`
  flex: 0 0 40%;
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const ContactUsForm = styled.form`
  flex: 0 0 60%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex: 0 0 100%;
    flex-direction: column;
  }
`;

const PrimaryText = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

const SecondaryText = styled.p`
  font-size: 1, 5rem;
  color: #ffffff;
  width: 90%;
  line-height: 2.25rem;
  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  color: #f0f5fc;
  opacity: 0.7;
  pointer-events: none;
  transition: all 0.4s ease;
`;

const TextAreaLabel = styled.label`
  position: absolute;
  top: 10%;
  left: 0.5rem;
  color: #f0f5fc;
  opacity: 0.7;
  pointer-events: none;
  transition: all 0.4s ease;
`;

const InputContainer = styled.div`
  flex: 0 0 calc(50% - 4rem);
  margin: 2.75rem 2rem;
  margin-top: 0;
  position: relative;
  border-bottom: 1px solid rgba(235, 243, 255, 0.2);

  &.active ${Label} {
    transform: translateY(-140%);
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 4rem);
    margin: 2.75rem 0rem;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 2rem 0.5rem;
  background: transparent;
  caret-color: #ffffff;
  font-size: 1.75rem;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 2rem 0rem;
  }
`;

const TextAreaInputContainer = styled.div`
  position: relative;
  flex: 0 0 calc(100% - 4rem);
  margin: 1rem 2rem;
  border-bottom: 1px solid rgba(235, 243, 255, 0.2);

  &.active ${TextAreaLabel} {
    transform: translateY(-120%);
  }

  @media (max-width: 768px) {
    margin: 1rem 0rem;
  }
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  padding: 0.75rem 0.5rem;
  background: transparent;
  caret-color: #ffffff;
  font-size: 1.75rem;
  height: 4.5rem;
  color: #ffffff;
  max-height: 7.5rem;
  overflow: auto;
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 0.75rem 0rem;
  }
`;

const SendButton = styled.button`
  outline: none;
  border: none;
  background: #ffffff;
  color: #3c50e0;
  margin: 4.5rem 2rem 2.5rem 2rem;
  padding: 2rem 7.5rem;
  box-shadow: 0px 8px 12px rgba(46, 61, 118, 0.24);
  border-radius: 8px;
  font-size: 1.75rem;
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  display: inline-block;

  @media (max-width: 768px) {
    margin: 4.5rem 0 2.5rem 0;
  }
`;

export const GetInTouch = () => {
  useEffect(() => {
    const nameInput = document.getElementById('name');
    const nameInputContainer = document.getElementById('nameInputContainer');
    const emailInput = document.getElementById('email');
    const emailInputContainer = document.getElementById('emailInputContainer');
    const locationInput = document.getElementById('location');
    const locationInputContainer = document.getElementById('locationInputContainer');
    const phoneInput = document.getElementById('phone');
    const phoneInputContainer = document.getElementById('phoneInputContainer');
    const messageInput = document.getElementById('message');
    const messageInputContainer = document.getElementById('messageInputContainer');

    nameInput.addEventListener('focus', () => {
      nameInputContainer.classList.add('active');
    });
    nameInput.addEventListener('blur', () => {
      nameInputContainer.classList.remove('active');
    });

    emailInput.addEventListener('focus', () => {
      emailInputContainer.classList.add('active');
    });
    emailInput.addEventListener('blur', () => {
      emailInputContainer.classList.remove('active');
    });

    locationInput.addEventListener('focus', () => {
      locationInputContainer.classList.add('active');
    });
    locationInput.addEventListener('blur', () => {
      locationInputContainer.classList.remove('active');
    });

    phoneInput.addEventListener('focus', () => {
      phoneInputContainer.classList.add('active');
    });
    phoneInput.addEventListener('blur', () => {
      phoneInputContainer.classList.remove('active');
    });

    messageInput.addEventListener('focus', () => {
      messageInputContainer.classList.add('active');
    });
    messageInput.addEventListener('blur', () => {
      messageInputContainer.classList.remove('active');
    });

    return () => {
      nameInput.removeEventListener('focus', () => {
        nameInputContainer.classList.add('active');
      });
      nameInput.removeEventListener('blur', () => {
        nameInputContainer.classList.remove('active');
      });

      emailInput.removeEventListener('focus', () => {
        emailInputContainer.classList.add('active');
      });
      emailInput.removeEventListener('blur', () => {
        emailInputContainer.classList.remove('active');
      });

      locationInput.removeEventListener('focus', () => {
        locationInputContainer.classList.add('active');
      });
      locationInput.removeEventListener('blur', () => {
        locationInputContainer.classList.remove('active');
      });

      phoneInput.removeEventListener('focus', () => {
        phoneInputContainer.classList.add('active');
      });
      phoneInput.removeEventListener('blur', () => {
        phoneInputContainer.classList.remove('active');
      });

      messageInput.removeEventListener('focus', () => {
        messageInputContainer.classList.add('active');
      });
      messageInput.removeEventListener('blur', () => {
        messageInputContainer.classList.remove('active');
      });
    };
  }, []);

  return (
    <SectionWrapper>
      <SectionInnerContainer>
        <ContactUsInfo>
          <PrimaryText>Let's get in touch</PrimaryText>
          <SecondaryText>
            Our team is happy to answer your sales questions. Fill out the form and we’ll be in
            touch as soon as possible.
          </SecondaryText>
        </ContactUsInfo>
        <ContactUsForm>
          <InputContainer id="nameInputContainer">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" autoComplete="off" />
          </InputContainer>
          <InputContainer id="emailInputContainer">
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" autoComplete="off" />
          </InputContainer>
          <InputContainer id="locationInputContainer">
            <Label htmlFor="location">Location</Label>
            <Input type="text" id="location" autoComplete="off" />
          </InputContainer>
          <InputContainer id="phoneInputContainer">
            <Label htmlFor="phone">Mobile Number</Label>
            <Input type="text" id="phone" autoComplete="off" />
          </InputContainer>
          <TextAreaInputContainer id="messageInputContainer">
            <TextAreaLabel htmlFor="message">Your message (optional)</TextAreaLabel>
            <TextAreaInput id="message"></TextAreaInput>
          </TextAreaInputContainer>
          <SendButton>Send</SendButton>
        </ContactUsForm>
      </SectionInnerContainer>
    </SectionWrapper>
  );
};
