import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useAppThemeContext } from "../shared/contexts"

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/initial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Testando</Button>} />
      <Route path="*" element={<Navigate to='/initial' />} />
    </Routes>
  )
}