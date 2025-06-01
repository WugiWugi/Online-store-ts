import { BackElement } from './Back-element.jsx';
import { useDispatch, useSelector } from 'react-redux';
import AccountUsersImg from '../assets/Account/AccountUsersImg.png'
import editImg from '../assets/Account/Edit.png'
import productImg from "../assets/busket-img/busket-img.svg";
import "../css/Account.css"
import { useState, useEffect } from 'react';

function AccountPages() {
    const products = useSelector(state => state.users.purchasedProducts);
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users.usersData);
    const [editActive, setActiveEdit] = useState(false)
    const userNumber = useSelector(state => state.users.currentUser.number)
    const [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        userAdress: ''
    })
    const [userDataChange, setUserDataChange] = useState({
        userName: '',
        userEmail: '',
        userAdress: ''
    })
    const [errors, setErrors] = useState({});

    function onChange(e) {
        const { name, value } = e.target
        setUserDataChange(prev => ({
            ...prev,
            [name]: value
        }))
    }
    useEffect(() => {
        if (usersData) {
            setUserData(usersData);
            setUserDataChange(usersData);
        }
    }, [usersData]);
    function onclick(e) {
        e.preventDefault();
        const newErrors = {};
        if (userDataChange.userName && userDataChange.userName.length > 27) {
            newErrors.userNameError = 'Имя не должно быть больше 27 символов';
        }
        if (userDataChange.userEmail) {
            if (!userDataChange.userEmail.match(/^[a-zA-Z.]{1,10}@(gmail\.com|mail\.ru)$/)) {
                newErrors.userEmailError = 'Введите правильный email';
            }
        }
        if (userDataChange.userAdress && userDataChange.userAdress.length > 50) {
            newErrors.userAdressError = 'Адрес не должен быть больше 50 символов';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length !== 0) return;
        setUserData(userDataChange);
        dispatch({ type: 'users/setUsersData', payload: userDataChange });
        setActiveEdit(false);
    }
    console.log(products)
    return (
        <div className="main__bacground">
            <div className="back__container">
                <BackElement />
            </div>
            {editActive &&
                <div className="edit__bacground">
                    <div className="edit__container">
                        <div className="edit__header-container">
                            <h2 className="edit__title">Редактирование аккаунта</h2>
                            <button onClick={() => setActiveEdit(false)} className="edit__exit-btn">×</button>
                        </div>
                        <form className="edit__form">
                            <div className='edit__form-input-container'>
                                <input type="text" value={userDataChange.userName} placeholder='Введите имя' name='userName' onChange={onChange} className="edit__input" />
                                <p className="edit-input-error">{errors.userNameError}</p>
                            </div>
                            <div className='edit__form-input-container'>
                                <input type="text" value={userDataChange.userEmail} placeholder='Введите email' name='userEmail' onChange={onChange} className="edit__input" />
                                <p className="edit-input-error">{errors.userEmailError}</p>
                            </div>
                            <div className='edit__form-input-container'>
                                <input type="text" value={userDataChange.userAdress} placeholder='Введите адрес' name='userAdress' onChange={onChange} className="edit__input" />
                                <p className="edit-input-error">{errors.userAdressError}</p>
                            </div>
                            <button type='submit' onClick={onclick} className="edit__save-btn">Сохранить</button>
                        </form>
                    </div>
                </div>
            }
            <div className="account">
                <div className="account__information">
                    <h3 className="account__information-title">Аккаунт</h3>
                    <div className="account__information-container">
                        <button onClick={() => setActiveEdit(!editActive)} className="account__information-edit"><img src={editImg} alt="" /></button>
                        <div className="account__information-data-container">
                            <img src={AccountUsersImg} alt="" className="account__information-img" />
                            <div className="account__information-data-text">
                                <h4 className="account__information-data-userName">{userData.userName ? userData.userName : 'Ваше имя'}</h4>
                                <div className="account__information-data-userNumber">{userNumber}</div>
                                <div className="account__information-data-userEmail">{userData.userEmail ? userData.userEmail : 'Ваш email'}</div>
                            </div>
                        </div>
                        <div className="account__information-adress-container">
                            <p className="account__information-adress-text">Адресс:</p>
                            <p className="account__information-adress">{userData.userAdress ? userData.userAdress : 'Ваш адрес'}</p>
                        </div>
                    </div>
                </div>
                <div className="account__orders">
                    <h3 className="account__orders-title">Все заказы</h3>

                    <div className="account__orders-container">
                        {products.map((x, i) => (
                            <div key={i} className="account__orders-product-container">
                                <img src={productImg} alt="Product img" />
                                <div className="account__orders-product-text-container">
                                    <h3 className="account__orders-product-name">{x.name}</h3>
                                    <p className="account__orders-product-articul">Артикул: {x.articul}</p>
                                    <p className="account__orders-product-price"><span className="account__orders-product-price-text">Итого:</span>  {x.price} руб.</p>
                                </div>
                                <div className="account__orders-product-status-container">
                                    <p className="account__orders-product-status-text">Статус:</p>
                                    <p className="account__orders-product-status">Отправлено</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


export { AccountPages }