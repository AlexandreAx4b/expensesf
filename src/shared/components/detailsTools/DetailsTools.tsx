import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"

interface IDetailsToolsProps {
  textNewButton?: string

  showSaveButton?: boolean
  showSaveBackButton?: boolean
  showDeleteButton?: boolean
  showNewButton?: boolean
  showBackButton?: boolean

  clickSaveButton?: () => void
  clickSaveBackButton?: () => void
  clickDeleteButton?: () => void
  clickNewButton?: () => void
  clickBackButton?: () => void
}

export const DetailsTools: React.FC<IDetailsToolsProps> = ({
  textNewButton = 'Novo',

  showSaveButton = true,
  showSaveBackButton = false,
  showDeleteButton = true,
  showNewButton = true,
  showBackButton = true,

  clickSaveButton,
  clickSaveBackButton,
  clickDeleteButton,
  clickNewButton,
  clickBackButton,

}) => {
  const theme = useTheme()

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      height={theme.spacing(5)}
      component={Paper}>

      {showSaveButton && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={clickSaveButton}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}

      {showSaveBackButton && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickSaveBackButton}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e Voltar
        </Button>
      )}

      {showDeleteButton && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickDeleteButton}
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}

      {showNewButton && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickNewButton}
          startIcon={<Icon>add</Icon>}
        >
          {textNewButton}
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />

      {showBackButton && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickBackButton}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
    </Box>
  )
}