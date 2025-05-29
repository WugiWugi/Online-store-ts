
import '../css/Registration-form.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers, registerUser, clearError, setCurentUser } from '../features/users/usersSlice';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const [data, setData] = useState({ number: '', password: '' });
    const [btn, setBtn] = useState('sign-up');
    const [validation, setValidation] = useState({ validationNumber: '', validationPassword: '' });
    const [clickedreg, setClickedReg] = useState(1);
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);
    const error = useSelector(state => state.users.error);
    const navigate = useNavigate()

    useEffect(() => {
        if (error && btn === 'sign-up' && clickedreg >= 1) {
            setValidation(prev => ({
                ...prev,
                validationNumber: 'Пользователь с таким номером уже существует.'
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
    const [clickedreEntrance, setClickedEntrance] = useState(0);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const currentBtn = e.nativeEvent.submitter.name;
        const number = data.number;
        const password = data.password;
        const errors = {
            validationNumber: '',
            validationPassword: ''
        };
        const listUsers = users.find(user => user.number === number)

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
                    errors.validationNumber = 'Пожалуйста, введите номер в правильном формате.';
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
                    dispatch(setCurentUser(listUsers))
                    navigate('/')
                } else {
                    setValidation(prev => ({ ...prev, validationNumber: 'такого пользователя нет' }))
                }
            }
            setBtn('sign-in');
        }
    };

    return (
        <div className="header__bacground">
            <div className="registration-form__container">
                <div className="registration-form__content">
                    <h2 className="registration-form__title">{btn === 'sign-up' || btn === '' ? 'Регистрация' : 'Вход в аккаунт'}</h2>
                    <form onSubmit={handleSubmit} className="registration-form">
                        <input type="text" name="number" className="registration-form__input" onChange={handleChange} value={data.number} placeholder="Телефон" />
                        <p className="registration-form__validation">{validation.validationNumber}</p>
                        <input type="text" name="password" className="registration-form__input" onChange={handleChange} value={data.password} placeholder="Пароль" />
                        <p className="registration-form__validation">{validation.validationPassword}</p>
                        <div className={`registration-form__button-container${btn === 'sign-in' ? '-reverse' : ''}`}>
                            <button type='submit' name='sign-in' value="sign-in" className={`registration-form__sign-in ${btn === 'sign-in' ? 'registration-form__active' : ''}`}>Войти в аккаунт</button>
                            <button type='submit' name='sign-up' value="sign-up" className={`registration-form__sign-in ${btn === 'sign-up' || btn === '' ? 'registration-form__active' : ''}`}>Зарегестрироваться</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { RegistrationForm }