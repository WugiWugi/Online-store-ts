import { Header } from './pages/Header.jsx'
import { RegistrationForm } from './pages/Registration-form.jsx'
import './css/App.css'

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <RegistrationForm />
      </main>
    </>
  )
}

export default App
