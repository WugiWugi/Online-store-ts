import { useDispatch, useSelector } from 'react-redux';
import { pushProductsPurchased } from '../features/users/usersSlice';
import { PaymentFormHeader } from './payment-pages-components/Payment-form-header'
import { PaymentFormFooter } from './payment-pages-components/Payment-form-footer'
import { PaymentUserData } from './payment-pages-components/Payment-form-user-data'
import { PaymentFormAdress } from './payment-pages-components/Payment-form-address'
import { PaymentFormPayment } from './payment-pages-components/Payment-form-payment'
import { ThanksPages } from './payment-pages-components/Thanks-pages'
import { useEffect, useState } from 'react';
import '../css/Payment-form.css'


function FormPayment() {
    const dispatch = useDispatch()
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        paymentMethod: 'left',
        checkbox: false
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (step === 4) {
            dispatch(pushProductsPurchased())
        }
    }, [step])
    const validateStep = () => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.name) newErrors.name = 'Введите ФИО';
            if (formData.phone.length !== 11 || !formData.phone.match(/^89\d{9}$/)) newErrors.phone = 'Пожалуйста, введите номер в правильном формате.'
            if (!formData.email) {
                newErrors.email = 'Введите email';
            } else if (!formData.email.match(/^[a-zA-Z.]{1,10}@(gmail\.com|mail\.ru)$/
            )) {
                newErrors.email = 'Введите email в правильном формате';
            }
        }

        if (step === 2) {
            if (!formData.address) newErrors.address = 'Введите адрес';
        }

        if (step === 3) {
            if (formData.checkbox !== true) newErrors.checkbox = 'Для продолжения поставьте галочку';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep()) {
            if (step < 4) {
                setStep(prev => prev + 1);
            }

        }
    };
    return (
        <div className="main__bacground">
            <div className="payment-form">
                {step >= 1 && step <= 3 && (<>
                    <div className="payment-form__container">
                        <PaymentFormHeader />
                        {step === 1 && <PaymentUserData formData={formData} setFormData={setFormData} errors={errors} />}
                        {step === 2 && <PaymentFormAdress formData={formData} setFormData={setFormData} errors={errors} />}
                        {step === 3 && <PaymentFormPayment formData={formData} setFormData={setFormData} errors={errors} />}
                        <PaymentFormFooter step={step} nextStep={nextStep} />
                    </div>
                </>)}
                {step === 4 && <ThanksPages />}
            </div>
        </div>

    )
}

export { FormPayment }