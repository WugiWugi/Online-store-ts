import React from 'react';
import { Link } from 'react-router-dom';

function PaymentFormHeader() {
  return (
    <div className="payment-form__header">
      <div className="payment-form__header-container">
        <div className="payment-form__header-title-container">
          <h2 className="payment-form__header-title">Оплата и доставка</h2>
          <p className="payment-form__header-subtitle">10% от стоимости вашего заказа идут в фонд</p>
        </div>
        <Link to={'/'} className="payment-form__header-exit">
          ×
        </Link>
      </div>
    </div>
  );
}

export { PaymentFormHeader };