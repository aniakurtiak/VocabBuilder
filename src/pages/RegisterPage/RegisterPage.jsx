import React from 'react';
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
  PictueStyle,
  RegisterWrapper,
  VectorSvg,
} from './RegisterPage.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(register(values));
    console.log(values);
  }

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required')
      .matches(/^[\p{L}\s]+$/u, 'Name must contain only letters and spaces'),
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email')
      .required('Required'),
    password: Yup.string()
    .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'The password must consist of 6 English letters and 1 numberd')
      .required('Required'),
  });

  return (
    <RegisterWrapper>

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
        <AuthTitle>Register</AuthTitle>
        <AuthText>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </AuthText>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, status }) => (
            <FormStyle>
              <FieldStyle name="name" placeholder="Name" />
              <ErrMsg name="name" component="div" />
              <FieldStyle type="email" name="email" placeholder="Email" />
              <ErrMsg name="email" component="div" />
              <FieldStyle
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrMsg name="password" component="div" />
              <BtnSubmit type="submit">Register</BtnSubmit>
            </FormStyle>
          )}
        </Formik>
        <LinkStyle to="/login">Login</LinkStyle>
      </AuthContainer>

      <VectorSvg />
    </RegisterWrapper>
  );
};

export default RegisterPage
