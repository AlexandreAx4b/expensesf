import { Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/initial" element={<p>Página Inicial</p>} />
      <Route path="*" element={<Navigate to='/initial'/>} />
    </Routes>
  )
}