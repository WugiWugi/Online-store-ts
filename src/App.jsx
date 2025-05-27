import { React, useEffect, createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, registerUser, clearError, setCurentUser, logoutUser } from './features/users/usersSlice';
import { Routes, Route } from 'react-router-dom'
import { Header } from './pages/Header.jsx'
import { RegistrationForm } from './pages/Registration-form.jsx'
import { Footer } from './pages/Footer.jsx'
import { Productsections } from './pages/Product-sections.jsx'
import { CatalogPages } from './pages/Catalog-pages.jsx'
import { useNavigate } from 'react-router-dom';
import {data} from './pages/Products-data'
export const userContext = createContext()

function App() {
  const user = useSelector(state => state.users.currentUser);
  const users = useSelector(state => state.users.list);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  useEffect(() => {
    if (!user?.number) {
      navigate('/registration');
      return;
    }
    const userVerification = users.find(x => x.number === user.number);
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
            <Route path='/registration' element={<RegistrationForm />} />
            <Route path='/' element={<Productsections />} />
            <Route path="/catalogPages/:catalogPagesName" element={<CatalogPages />} />
          </Routes>
        </userContext.Provider>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
