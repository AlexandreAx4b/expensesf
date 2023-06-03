import { Routes, Route, Navigate } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOption } = useDrawerContext();

  useEffect(() => {
    setDrawerOption([
      {
        icon: 'home',
        path: '/initial',
        label: 'Página Inicial'
      }
    ])
  }, [])

  return (
    <Routes>
      <Route path="/initial" element={<Dashboard/>} />
      <Route path="*" element={<Navigate to='/initial' />} />
    </Routes>
  )
}