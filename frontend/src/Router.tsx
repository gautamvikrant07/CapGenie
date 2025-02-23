import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './features/home/Home'

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}