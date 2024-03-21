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
  LinkStyle,
  RegisterWrapper,
  StatusText,
  VectorSvg,
} from './RegisterPage.styled';
import { Formik } from 'formik';

const RegisterPage = () => {
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
      .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Error password')
      .required('Required'),
  });

  return (
    <RegisterWrapper>
      <picture>
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
      </picture>

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
          onSubmit={(values, { setStatus }) => {
            setStatus({ successPassword: 'Success password' }); // Встановлення статусу успіху для пароля
            // Отримання інших дій, наприклад, відправка даних на сервер або виконання інших дій після успішної валідації
          }}
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
              {status && status.successPassword && (
                <StatusText>{status.successPassword}</StatusText> // Відображення повідомлення про успіх, якщо воно є в статусі
              )}
              <BtnSubmit type="submit">Register</BtnSubmit>
            </FormStyle>
          )}
        </Formik>
        <LinkStyle to="/login">Login</LinkStyle>

      </AuthContainer>

      <BenefitsList>
        <BenefitItem>Word</BenefitItem>
        <BenefitItem>Translation</BenefitItem>
        <BenefitItem>Grammar</BenefitItem>
        <BenefitItem>Progress</BenefitItem>
      </BenefitsList>

      <VectorSvg />
    </RegisterWrapper>
  );
};

export default RegisterPage;
