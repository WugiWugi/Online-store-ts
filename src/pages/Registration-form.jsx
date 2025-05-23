import '../css/Registration-form.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function RegistrationForm() {
    const [btn, setBtn] = useState('sign-up')
    const [data, setData] = useState({
        number: '',
        password: ''
    })
    const [validation, setValidation] = useState({
        validationNumber: '',
        validationPassword: ''
    }
    )
    const [users, setUsers] = useState([]);

    function dataRegistration(e) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function formRegistration(e) {
        e.preventDefault();
        const currentBtn = e.nativeEvent.submitter.name;

        const number = data.number;
        const password = data.password;

        const errors = {
            validationNumber: '',
            validationPassword: ''
        };

        if (currentBtn === 'sign-up') {
            if (number.length !== 11 || !number.match(/^[89][0-9]+$/)) {
                errors.validationNumber = 'Пожалуйста, введите номер в правильном формате.';
            }
            if (password.length === 0) {
                errors.validationPassword = 'Необходимо заполнить форму';
            } else if (password.length < 8 || password.length > 20) {
                errors.validationPassword = 'Пароль должен содержать от 8 до 20 символов.';
            } else if (!password.match(/^[A-Za-zА-Яа-яЁё0-9]+$/)) {
                errors.validationPassword = 'Пароль должен содержать только латинские или русские буквы, либо цифры.';
            }
        }

        setValidation(errors);

        if (errors.validationNumber || errors.validationPassword) {
            return;
        }

        // Теперь можно отправлять на сервер
        const res = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ number, password }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            alert(`Ошибка сервера: ${errorData.message}`);
        } else {
            alert('Регистрация прошла успешно!');
        }
    }

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('http://localhost:3000/users');
                if (!res.ok) throw new Error('Ошибка сети');
                const data = await res.json();
                setUsers(data);  // Используем setUsers, которую объявили выше
            } catch (error) {
                console.error('Ошибка при получении пользователей:', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className="registration-form-bacground">
            <div className="registration-form__container">
                <div className="registration-form__content">
                    <h2 className="registration-form__title">{btn === 'sign-up' ? 'Регистрация' : 'Вход в аккаунт'}</h2>
                    <form onSubmit={formRegistration} className="registration-form">
                        <input type="text" name="number" className="registration-form__input" onChange={dataRegistration} value={data.number} placeholder="Телефон" />
                        <p className="registration-form__validation">{validation.validationNumber}</p>
                        <input type="text" name="password" className="registration-form__input" onChange={dataRegistration} value={data.password} placeholder="Пароль" />
                        <p className="registration-form__validation">{validation.validationPassword}</p>
                        <div className={`registration-form__button-container${btn === 'sign-in' ? '-reverse' : ''}`}>
                            <button type='submit' name='sign-in' value="sign-in" className={`registration-form__sign-in ${btn === 'sign-in' ? 'registration-form__active' : ''}`}>Войти в аккаунт</button>
                            <button type='submit' name='sign-up' value="sign-up" className={`registration-form__sign-in ${btn === 'sign-up' ? 'registration-form__active' : ''}`}>Зарегестрироваться</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { RegistrationForm }