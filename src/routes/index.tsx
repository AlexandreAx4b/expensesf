import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"
import { useEffect } from "react";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

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
      <Route path="/initial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>toggleDrawer</Button>} />
      <Route path="*" element={<Navigate to='/initial' />} />
    </Routes>
  )
}