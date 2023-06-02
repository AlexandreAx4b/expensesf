import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route path="/initial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>toggleDrawer</Button>} />
      <Route path="*" element={<Navigate to='/initial' />} />
    </Routes>
  )
}