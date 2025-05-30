import { useDispatch, useSelector } from 'react-redux';

function PaymentFormFooter({ step, nextStep }) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.users.busket);
    const totalSum = products.reduce((sum, product) => {
        return sum + (product.totalPrice || product.price);
    }, 0);
    return (
        <div className="payment-form__footer">
            <div className="payment-form__footer-container">
                <p className="payment-form__footer-total-price"><span className="payment-form__footer-total">Итого:</span> {totalSum} руб</p>
                <button onClick={nextStep} className="payment-form__footer-next-btn">{step === 3 ? 'Оплатить' : 'Дальше'}</button>
            </div>
        </div>
    )
}

export { PaymentFormFooter }