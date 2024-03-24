import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import illustrationMob from '../../img/illustrationMob.png';
import illustrationMob2x from '../../img/illustrationMob@2x.png';
import illustrationDesktop from '../../img/illustrationDesktop.png';
import illustrationDesktop2x from '../../img/illustrationDesktop@2x.png';
import illustrationMobWebp from '../../img//illustrationMob.webp';
import illustrationMob2xWebp from '../../img/illustrationMob@2x.webp';
import illustrationDesktopWebp from '../../img/illustrationDesktop.webp';
import illustrationDesktop2xWebp from '../../img/illustrationDesktop@2x.webp';
import {
  AuthContainer,
  AuthText,
  AuthTitle,
  BenefitItem,
  BenefitsList,
  BtnSubmit,
  ErrMsg,
  FieldStyle,
  FormStyle,
  Image,
  ImgWrap,
  LinkStyle,
  LoginrWrapper,
  PictueStyle,
  StatusText,
  VectorSvg,
} from './LoginPage.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(logIn(values));
    console.log(values);
  }

  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email')
      .required('Required'),
    password: Yup.string()
    .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Error password')
      .required('Required'),
  });

  return (
    <LoginrWrapper>
      <ImgWrap>
        <PictueStyle>
          <source
            srcSet={`${illustrationDesktopWebp} 1x, ${illustrationDesktop2xWebp} 2x`}
            media="(min-width: 1440px)"
            type="image/webp"
          />
          <source
            srcSet={`${illustrationDesktop} 1x, ${illustrationDesktop2x} 2x`}
            media="(min-width: 1440px)"
          />
          <source
            srcSet={`${illustrationMobWebp} 1x, ${illustrationMob2xWebp} 2x`}
            media="(max-width: 767px)"
            type="image/webp"
          />
          <source
            srcSet={`${illustrationMob} 1x, ${illustrationMob2x} 2x`}
            media="(max-width: 767px)"
          />
          <Image src={illustrationMobWebp} alt="people reading dictionary" />
        </PictueStyle>

        <BenefitsList>
          <BenefitItem>Word</BenefitItem>
          <BenefitItem>Translation</BenefitItem>
          <BenefitItem>Grammar</BenefitItem>
          <BenefitItem>Progress</BenefitItem>
        </BenefitsList>
      </ImgWrap>

      <AuthContainer>
        <AuthTitle>Login</AuthTitle>
        <AuthText>
        Please enter your login details to continue using our service:
        </AuthText>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, status }) => (
            <FormStyle>
              <FieldStyle type="email" name="email" placeholder="Email" />
              <ErrMsg name="email" component="div" />
              <FieldStyle
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrMsg name="password" component="div" />
              {status && status.successPassword && (
                <StatusText>{status.successPassword}</StatusText> // Відображення повідомлення про успіх, якщо воно є в статусі
              )}
              <BtnSubmit type="submit">Login</BtnSubmit>
            </FormStyle>
          )}
        </Formik>
        <LinkStyle to="/register">Register</LinkStyle>
      </AuthContainer>

      <VectorSvg />
    </LoginrWrapper>
  );
};

export default LoginPage;
