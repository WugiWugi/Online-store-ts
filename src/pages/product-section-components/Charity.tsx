import React, { FC } from 'react';
import phoeImg from '../../assets/main-img/phone/phone.png';

const Charity: FC = () => {
  return (
    <div className="charity">
      <form className="charity__form">
        <h2 className="charity__title">
          Пожертвуйте на благо проекта
        </h2>
        <div className="charity__form-checkbox-container">
          <label className="charity__form-checkbox-block">
            <input type="checkbox" name="monthly" className='charity__form-checkbox' />
            Ежемесячные выплаты
          </label>
          <label className="charity__form-checkbox-block">
            <input type="checkbox" name="one-time" className='charity__form-checkbox' />
            Единовременная выплата
          </label>
        </div>
        <div className="charity__form-filling-container">
          <input type="text" className="charity__form-filling" placeholder="Введите сумму" />
          <button className="charity__form-fillin-btn" type="submit">
            Пожертвовать
          </button>
        </div>
      </form>
      <div className="charity__img-container">
        <img src={phoeImg} alt="phone img" className='charity__img' />
      </div>
    </div>
  );
};

export { Charity };