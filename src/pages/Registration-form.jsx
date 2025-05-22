import '../css/Registration-form.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react';

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

    function dataRegistration(e) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function formRegistration(e) {
        e.preventDefault()
        setBtn(e.nativeEvent.submitter.name)
        const number = data.number.split('').filter(x => x !== ' ')
        const password = data.password.split('')
        if (number.length >= 8 && number.length <= 15) {
            setValidation(prev => ({ ...prev, validationNumber: '' }))
        } else {
            setValidation(prev => ({ ...prev, validationNumber: 'Пожалуйста, введите номер в правильном формате' }))
        }

        if(password.filter(y=>y!==' ' && y === Number)&&password.length !== 0){
            setValidation(prev => ({ ...prev, validationPassword: '' }))
        }else{
            setValidation(prev => ({ ...prev, validationPassword: 'Пароль не должен содержать пробелов' }))
        }

    }

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