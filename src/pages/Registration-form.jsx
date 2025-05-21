import '../css/Registration-form.css'

function RegistrationForm() {
    return (
        <div className="registration-form-bacground">
            <div className="registration-form__container">
                <div className="registration-form__content">
                    <h2 className="registration-form__title">Регистрация</h2>
                    <form className="registration-form">
                        <input type="text" className="registration-form__input" placeholder="Телефон" />
                        <input type="text" className="registration-form__input" placeholder="Пароль" />
                        <div className="registration-form__button-container">
                            <button className="registration-form__sign-in">Войти в аккаунт</button>
                            <button className="registration-form__sign-up">Зарегестрироваться</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export { RegistrationForm }