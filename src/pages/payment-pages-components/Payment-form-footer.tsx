import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import type { Product } from '../../features/users/usersSlice';

interface PaymentFormFooterProps {
  step: number;
  nextStep: () => void;
}

const PaymentFormFooter: FC<PaymentFormFooterProps> = ({ step, nextStep }) => {
  const products = useSelector((state: RootState) => state.users.busket) as Product[];
  const totalSum = Array.isArray(products)
    ? products.reduce((sum, product) => sum + (product.totalPrice || product.price), 0)
    : 0;

  return (
    <div className="payment-form__footer">
      <div className="payment-form__footer-container">
        <p className="payment-form__footer-total-price">
          <span className="payment-form__footer-total">Итого:</span> {totalSum} руб
        </p>
        <button onClick={nextStep} className="payment-form__footer-next-btn">
          {step === 3 ? 'Оплатить' : 'Дальше'}
        </button>
      </div>
    </div>
  );
};

export { PaymentFormFooter };