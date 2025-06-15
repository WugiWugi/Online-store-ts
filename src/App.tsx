import React from 'react';
import { useEffect, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, logoutUser } from './features/users/usersSlice';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './pages/Header';
import { RegistrationForm } from './pages/Registration-form';
import { Footer } from './pages/Footer';
import { Busket } from './pages/Busket';
import { About } from './pages/About';
import { ProductSections } from './pages/Product-sections';
import { CatalogPages } from './pages/Catalog-pages';
import { ProductPages } from './pages/Product-pages';
import { FormPayment } from './pages/Form-payment';
import { AccountPages } from './pages/Account-pages';
import { data, type DataType }  from './pages/Products-data';
import type { RootState } from './types/state'; 
import type { AppDispatch } from './app/store'; 
export const userContext = createContext<DataType | null>(null);

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.users.currentUser);
  const users = useSelector((state: RootState) => state.users.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!user?.number) {
      navigate('/registration');
      return;
    }

    const userVerification = users.find((x: typeof user) => x && user && x.number === user.number);
    if (!userVerification) {
      dispatch(logoutUser());
      navigate('/registration');
      return;
    }

    if (window.location.pathname === '/registration') {
      navigate('/');
    }
  }, [users, user, dispatch, navigate]);

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <userContext.Provider value={data}>
          <Routes>
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/" element={<ProductSections />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogPages/:catalogPagesName" element={<CatalogPages />} />
            <Route path="/productPages/:productPagesName" element={<ProductPages />} />
            <Route path="/busket" element={<Busket />} />
            <Route path="/formPayment" element={<FormPayment />} />
            <Route path="/AccountPages" element={<AccountPages />} />
          </Routes>
        </userContext.Provider>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;