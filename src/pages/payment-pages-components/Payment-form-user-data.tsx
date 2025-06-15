import React from 'react';
import { FormData, FormErrors } from '../../types/types';

interface PaymentUserDataProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
}

function PaymentUserData({ formData, setFormData, errors }: PaymentUserDataProps) {
  return (
    <form className="Payment-form">
      <div className="Payment-form-input-container">
        <input
          type="text"
          placeholder="ФИО"
          className="inputUserData"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="Payment-form-input-container">
        <input
          type="text"
          className="inputUserData"
          placeholder="Телефон"
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <div className="Payment-form-input-container">
        <input
          type="text"
          className="inputUserData"
          placeholder="E-mail"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
    </form>
  );
}

export { PaymentUserData };