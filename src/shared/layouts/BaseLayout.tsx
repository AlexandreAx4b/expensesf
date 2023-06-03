import { ReactNode } from "react"
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../contexts"

interface IBaseLayoutProps {
  children: ReactNode
  titulo: string
  barraFerramentas?: ReactNode
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children, titulo, barraFerramentas }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={0.5}>
      <Box padding={1} display='flex' alignItems='center' gap={0.5} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        {smDown &&
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        }
        <Typography
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
        >
          {titulo}
        </Typography>
      </Box>
      {barraFerramentas && (
        <Box>
          {barraFerramentas}
        </Box>
      )}
      <Box flex={1} overflow='auto'>
        {children}
      </Box>
    </Box>

  )
}