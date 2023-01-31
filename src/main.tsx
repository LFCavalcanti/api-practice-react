import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App'
import Menu from './components/Menu'
import Bank from './pages/Bank'
import Cep from './pages/Cep'
import Cnpj from './pages/Cnpj'
import Default from './pages/Default'
import Ncm from './pages/Ncm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Default />} />
          <Route path='/cep' element={<Cep />} />
          <Route path='/bancos' element={<Bank />} />
          <Route path='/cnpj' element={<Cnpj />} />
          <Route path='/ncm' element={<Ncm />} />
        </Routes>        
      </Router>
    </main>
  </React.StrictMode>,
)
