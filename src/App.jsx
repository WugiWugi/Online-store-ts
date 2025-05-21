import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './pages/Header.jsx'
import { RegistrationForm } from './pages/Registration-form.jsx'
import { Footer } from './pages/Footer.jsx'
import { Birds } from './pages/birds.jsx'
import './css/App.css'

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/birds' element={<Birds />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
