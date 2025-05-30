import { useState } from "react"

function PaymentFormPayment({ formData, setFormData }) {
    return (
        <div className="payment__method-container">
            <h3 className="payment__method-title">Способ оплаты:</h3>
            <div className="payment__method-button-container">
                <button onClick={() => { setFormData({ ...formData, paymentMethod: 'left' }) }} className={`payment__method ${formData.paymentMethod === 'left' && 'left'}`}>Наличными или картой<br />при получении</button>
                <button onClick={() => { setFormData({ ...formData, paymentMethod: 'right' }) }} className={`payment__method ${formData.paymentMethod === 'right' && 'left'}`}>Оплата картой<br />на сайте</button>
            </div>
            <div className="payment__method-checkbox-container">
                <input  onChange={(e) => {
                    const checked = e.target.checked;
                    setFormData({ ...formData, checkbox: checked });
                }} type="checkbox" className="payment__method-checkbox" />
                <label className="payment__method-checkbox-label">Оформляя заказ, я даю своё согласие на обработку персональных<br />
                    данных и подтверждаю ознакомление с договором-офертой.</label>
            </div>
        </div>
    )
}

export { PaymentFormPayment }