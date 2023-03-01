import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Bank from './pages/Bank'
import Cep from './pages/Cep'
import Cnpj from './pages/Cnpj'
import Ncm from './pages/Ncm'
import './main.module.scss'
import 'react-tooltip/dist/react-tooltip.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cep' element={<Cep />} />
          <Route path='/bancos' element={<Bank />} />
          <Route path='/cnpj' element={<Cnpj />} />
          <Route path='/ncm' element={<Ncm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>        
      </Router>
  </React.StrictMode>,
)
