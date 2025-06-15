import React from 'react';
import '../css/Registration-form.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { fetchUsers, registerUser, clearError, setCurentUser } from '../features/users/usersSlice';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../types/state'; // путь к RootState
import type { AppDispatch } from '../app/store'; // путь к store
import type { User } from '../features/users/usersSlice';

interface FormData {
  number: string;
  password: string;
}

interface ValidationState {
  validationNumber: string;
  validationPassword: string;
}

function RegistrationForm() {
  const [data, setData] = useState<FormData>({ number: '', password: '' });
  const [btn, setBtn] = useState<'sign-up' | 'sign-in' | ''>('sign-up');
  const [validation, setValidation] = useState<ValidationState>({ validationNumber: '', validationPassword: '' });
  const [clickedreg, setClickedReg] = useState<number>(1);
  const [clickedreEntrance, setClickedEntrance] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const users = useSelector((state: RootState) => state.users.list);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    if (error && btn === 'sign-up' && clickedreg >= 1) {
      setValidation(prev => ({
        ...prev,
        validationNumber: 'Пользователь с таким номером уже существует.',
      }));
    }
  }, [error, btn, clickedreg]);

  useEffect(() => {
    if (btn === 'sign-up') {
      setClickedEntrance(0);
    } else if (btn === 'sign-in') {
      setClickedReg(0);
    }
  }, [btn]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentBtn = (e.nativeEvent as SubmitEvent).submitter?.getAttribute('name');
    const number = data.number;
    const password = data.password;

    const errors: ValidationState = {
      validationNumber: '',
      validationPassword: '',
    };

    const listUsers = users.find((user: User) => user.number === number);

    if (currentBtn === 'sign-up') {
      if (btn !== 'sign-up') {
        setValidation({ validationNumber: '', validationPassword: '' });
        setClickedReg(1);
      } else {
        setClickedReg(prev => prev + 1);
      }
      setBtn('sign-up');

      if (clickedreg >= 1) {
        if (number.length <= 0) {
          errors.validationNumber = 'Необходимо заполнить форму';
        } else if (number.length !== 11 || !number.match(/^[89][0-9]+$/)) {
          errors.validationNumber = 'Номер должен начинаться с цифр «89» и состоять из 11 цифр';
        }

        if (password.length === 0) {
          errors.validationPassword = 'Необходимо заполнить форму';
        } else if (password.length < 8 || password.length > 20) {
          errors.validationPassword = 'Пароль должен содержать от 8 до 20 символов.';
        } else if (!password.match(/^[A-Za-zА-Яа-яЁё0-9]+$/)) {
          errors.validationPassword = 'Пароль должен содержать только латинские или русские буквы, либо цифры.';
        }

        if (!errors.validationNumber && !errors.validationPassword) {
          dispatch(registerUser(data));
          dispatch(clearError());
          setBtn('sign-in');
        }

        setValidation(errors);
      }
    } else if (currentBtn === 'sign-in') {
      if (btn !== 'sign-in') {
        setValidation({ validationNumber: '', validationPassword: '' });
        setClickedEntrance(1);
      } else {
        setClickedEntrance(prev => prev + 1);

        if (listUsers) {
          dispatch(setCurentUser(listUsers));
          navigate('/');
        } else {
          setValidation(prev => ({
            ...prev,
            validationNumber: 'такого пользователя нет',
          }));
        }
      }

      setBtn('sign-in');
    }
  };

  return (
    <div className="header__bacground">
      <div className="registration-form__container">
        <div className="registration-form__content">
          <h2 className="registration-form__title">
            {btn === 'sign-up' || btn === '' ? 'Регистрация' : 'Вход в аккаунт'}
          </h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <input
              type="text"
              name="number"
              className="registration-form__input"
              onChange={handleChange}
              value={data.number}
              placeholder="Телефон"
            />
            <p className="registration-form__validation">{validation.validationNumber}</p>
            <input
              type="text"
              name="password"
              className="registration-form__input"
              onChange={handleChange}
              value={data.password}
              placeholder="Пароль"
            />
            <p className="registration-form__validation">{validation.validationPassword}</p>
            <div className={`registration-form__button-container${btn === 'sign-in' ? '-reverse' : ''}`}>
              <button
                type="submit"
                name="sign-in"
                value="sign-in"
                className={`registration-form__sign-in ${btn === 'sign-in' ? 'registration-form__active' : ''}`}
              >
                Войти в аккаунт
              </button>
              <button
                type="submit"
                name="sign-up"
                value="sign-up"
                className={`registration-form__sign-in ${btn === 'sign-up' || btn === '' ? 'registration-form__active' : ''}`}
              >
                Зарегестрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { RegistrationForm };