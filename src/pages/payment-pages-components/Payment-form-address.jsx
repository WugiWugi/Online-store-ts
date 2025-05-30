function PaymentFormAdress({ formData, setFormData, errors }) {
    return (
        <form className="Payment-form">
            <div className="Payment-form-input-container">
                <input type="text" placeholder="Адресс доставки" value={formData.address} className="inputUserData" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                {errors.address && <p className="error">{errors.address}</p>}
            </div>
            <div className="Payment-form-input-container">
                <label className="inputLabel">Желаемая дата доставки</label>
                <input type="date" className="inputUserData" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div className="Payment-form-input-container">
                <label className="inputLabel">Комментарий к заказу</label>
                <input type="text" className="inputUserData" placeholder="Комментарий" />
            </div>
        </form>
    )

}

export { PaymentFormAdress }