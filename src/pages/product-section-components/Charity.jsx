import phoeImg from '../../assets/main-img/phone/phone.png'

function Charity() {
    return (
        <div className="charity">
            <form className="charity__form">
                <h2 className="charity__title">Пожертвуйте на благо проекта</h2>
                <div className="charity__form-checkbox-container">
                    <label htmlFor="" className="charity__form-checkbox-block">
                        <input type="checkbox" name="One-time" className='charity__form-checkbox'/>
                        Ежимесячные выплаты
                    </label>
                    <label htmlFor="" className="charity__form-checkbox-block">
                        <input type="checkbox" name="One-time" className='charity__form-checkbox'/>
                        Eдиноразовая выплата
                    </label>
                </div>
                <div className="charity__form-filling-container">
                    <input type="text" className="charity__form-filling" placeholder="Введите сумму" />
                    <button className="charity__form-fillin-btn">Пожертвовать</button>
                </div>
            </form>
            <div className="charity__img-container">
                <img src={phoeImg} alt="phone img" className='charity__img' />
            </div>
        </div>
    )
}

export { Charity }