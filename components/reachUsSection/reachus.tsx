import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ContactContainer = styled.section`

  background: #1F1F1D;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;

  span {
    background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #a0a0a0;
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 50px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfoCard = styled.div`
  background: rgba(139, 92, 246, 0.05);
  border: 2px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.4s ease;

  &:hover {
    border-color: #8b5cf6;
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const ContactDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  padding: 15px;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.1);
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 3s ease-in-out infinite;

  img {
    width: 28px;
    height: 28px;
  }

  svg {
    width: 28px;
    height: 28px;
    color: #ffffff;
  }
`;

const ContactText = styled.div`
  flex: 1;

  h4 {
    font-size: 16px;
    color: #8b5cf6;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
    color: #ffffff;
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #8b5cf6;
    }
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const SocialIconLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(139, 92, 246, 0.1);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    border-color: #8b5cf6;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);

    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const FormCard = styled.div`
  background: rgba(139, 92, 246, 0.05);
  border: 2px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.4s ease;

  &:hover {
    border-color: #8b5cf6;
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  color: #8b5cf6;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 16px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;

  &::placeholder {
    color: #666666;
  }

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: #666666;
  }

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
`;

const ErrorDisplay = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  border: none;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 30px;
  }
`;

const SuccessCard = styled.div`
  text-align: center;
  padding: 40px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const SuccessIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 3s ease-in-out infinite;

  svg {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const SuccessTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SuccessText = styled.p`
  font-size: 18px;
  color: #a0a0a0;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required*")
      .matches(/^.{3,255}$/, "Name should be minimum 3 characters.")
      .matches(
        /^[a-zA-Z][a-zA-Z\-\ \.]{2,}$/i,
        "Name should have alphabets only."
      ),
    mobileNumber: yup
      .string()
      .required("Phone Number is Required*")
      .matches(/^[0-9]{10}$/, "Mobile No. should be 10 digits number."),
    comment: yup.string().required("message is required*").min(3).max(300),
  })
  .required();

function ReachMe() {
  const [formStatus, setFormStatus] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  function onSubmit(data: any) {
    var bodyFormData = new FormData();
    bodyFormData.append("entry.752584244", data.name);
    bodyFormData.append("entry.1585333184", data.mobileNumber);
    bodyFormData.append("entry.539832214", data.comment);

    axios
      .post(
        "https://docs.google.com/forms/u/1/d/e/1FAIpQLSe3vgR2rNrzQbLHZGjAa8kDjCra3diNh6Bl4xa7g0xQVuOz8Q/formResponse",
        bodyFormData
      )
      .then((response) => {
        setFormStatus(true);
      })
      .catch((error) => {
        setFormStatus(true);
      });
  }

  return (
    <ContactContainer id="contact">
      <ContentWrapper>
        <Title>
          Let{"'"}s <span>Connect</span>
        </Title>
        <Subtitle>
          Have a project in mind or just want to chat? I{"'"}d love to hear from you!
        </Subtitle>
        <br /><br />
        <ContactGrid>
          {/* Contact Info Side */}
          <ContactInfoCard>
            <InfoTitle>Get in Touch</InfoTitle>
            <InfoText>
              Feel free to reach out to me through any of the following channels. I{"'"}m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </InfoText>
            <br /><br />
            <ContactDetailItem>
              <ContactIcon>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <p>
                  <a href="mailto:kishorenpn6@gmail.com">kishorenpn6@gmail.com</a>
                </p>
              </ContactText>
            </ContactDetailItem>

            <ContactDetailItem>
              <ContactIcon>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </ContactIcon>
              <ContactText>
                <h4>Location</h4>
                <p>Coimbatore, Tamil Nadu, India</p>
              </ContactText>
            </ContactDetailItem>

            <InfoText style={{ marginTop: '30px', marginBottom: '15px' }}>
              Connect with me on social media
            </InfoText>

            <SocialIconsWrapper>
              <SocialIconLink
                href="https://www.linkedin.com/in/kishore-n-132a80179"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="LinkedIn" />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/KishoreNanthagopal98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.png" alt="GitHub" />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/kishore_np/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.png" alt="Instagram" />
              </SocialIconLink>
              <SocialIconLink href="mailto:kishorenpn6@gmail.com">
                <img src="/email.png" alt="Email" />
              </SocialIconLink>
            </SocialIconsWrapper>
          </ContactInfoCard>

          {/* Form Side */}
          <FormCard>
            {!formStatus ? (
              <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup>
                  <FormLabel>Name *</FormLabel>
                  <InputField
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <ErrorDisplay>{errors.name?.message as string}</ErrorDisplay>
                  )}
                </FormGroup>

                <FormGroup>
                  <FormLabel>Mobile Number *</FormLabel>
                  <InputField
                    type="text"
                    placeholder="Enter your mobile number"
                    maxLength={10}
                    {...register("mobileNumber")}
                  />
                  {errors.mobileNumber && (
                    <ErrorDisplay>{errors.mobileNumber?.message as string}</ErrorDisplay>
                  )}
                </FormGroup>

                <FormGroup>
                  <FormLabel>Message *</FormLabel>
                  <TextArea
                    placeholder="Type your message here..."
                    {...register("comment")}
                  />
                  {errors.comment && (
                    <ErrorDisplay>{errors.comment?.message as string}</ErrorDisplay>
                  )}
                </FormGroup>

                <SubmitButton type="submit">Send Message</SubmitButton>
              </StyledForm>
            ) : (
              <SuccessCard>
                <SuccessIcon>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SuccessIcon>
                <SuccessTitle>Thank You!</SuccessTitle>
                <SuccessText>
                  Your message has been sent successfully. I{"'"}ll get back to you as soon as possible.
                </SuccessText>
              </SuccessCard>
            )}
          </FormCard>
        </ContactGrid>
      </ContentWrapper>
    </ContactContainer>
  );
}

export default ReachMe;
