import { Link } from "react-router-dom"
function ThanksPages() {
    return (
        <div className="payment__ready">
            <div className="payment__ready-container">
                <h2 className="payment__thanks-ready-title">Заказ успешно оформлен</h2>
                <Link to={'/'} className="payment-form__header-exit">×</Link>
            </div>
            <div className="payment__thanks-container">
                <p className="payment__thanks-title">Спасибо!</p>
            </div>
        </div>
    )
}

export { ThanksPages }