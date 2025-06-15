import React, { FC } from 'react';
import { BackElement } from './Back-element.js';
import '../css/About.css';

const About: FC = () => {
    return (
        <div className="main__bacground">
            <div className="about">
                <BackElement />
                <h2 className="about__title">Оплата и доставка</h2>
                <h3 className="about__subtitle">Доставка и самовывоз</h3>
                <p className="about__text">Интернет-заказы формируются менеджером в течение 1–2 дней.</p>
                <p className="about__text"><strong>Самовывоз:</strong> после подтверждения менеджером и оплаты заказа. Заказ можно забрать в любой день с 12 до 20, по адресу: Стромынский переулок, дом 6.</p>
                <h3 className="about__subtitle">Доставка кормов и малогабаритных товаров:</h3>
                <ul className="about__list">
                    <li className="about__list-item">В пределах МКАД: от 300 рублей.</li>
                    <li className="about__list-item">За МКАД до 5 км: от 500 рублей</li>
                    <li className="about__list-item">За МКАД до 10 км: от 800 рублей</li>
                    <li className="about__list-item">За МКАД более 10 км: от 900 рублей</li>
                </ul>
                <p className="about__text">Цену доставки устанавливает курьерская служба Dostavista.</p>
                <p className="about__text">Поправки к заказу после подтверждения заказа менеджером принимаются только по телефону +7 (926) 953–73–35 не позднее чем за 3 часа до<br />ожидаемого времени прибытия заказа.</p>
                <p className="about__text">Живые/замороженные корма и хрупкие товары доставляются только по Москве.</p>
                <p className="about__text">Доставка крупногабаритных или тяжёлых товаров осуществляется силами транспортных компаний.</p>
                <p className="about__text">Доставка в регионы осуществляется транспортными компаниями ПЭК и Байкал Сервис. Стоимость услуги оплачивается клиентом.</p>
                <h3 className="about__subtitle">Оплата</h3>
                <p className="about__text">Оплатить заказ вы можете одним из следующих способов:</p>
                <ul className="about__list">
                    <li className="about__list-item">Наличными при получении (при заказе до 5000₽ по Москве и Московской области)</li>
                    <li className="about__list-item">Оплата онлайн</li>
                </ul>
                <h4 className="about__subsubtitle">Оплата онлайн (через систему ROBOKASSA)</h4>
                <p className="about__text">
                    Наш интернет-магазин работает на основе системы электронных платежей ROBOKASSA, объединяющей в себе различные формы оплаты без<br />комиссии:
                </p>
                <ul className="about__list">
                    <li className="about__list-item">Банки</li>
                    <li className="about__list-item">Пластиковые карты</li>
                    <li className="about__list-item">Оплата через iPhone</li>
                    <li className="about__list-item">Выставление счёта в интернет-банк</li>
                    <li className="about__list-item">Оплата в розничных сетях</li>
                    <li className="about__list-item">Электронные деньги</li>
                    <li className="about__list-item">Терминалы моментальной оплаты</li>
                </ul>
                <p className="about__text">При оформлении заказа через меню корзины выберите из списка подходящий способ доставки и форму оплаты «Оплата через Робокассу»,<br />после чего нажмите на кнопку «Отправить».</p>
                <p className="about__text">В появившемся на экране уведомлении при нажатии на кнопку «Оплатить» произойдет автоматический переход на страницу с вариантами оплаты, где<br />вам потребуется выбрать нужный вам способ и, указав требуемые в инструкции данные, совершить оплату.</p>
                <p className="about__text">После этого заказ считается подтверждённым и начинает формироваться.</p>
            </div>
        </div>
    );
};

export { About };