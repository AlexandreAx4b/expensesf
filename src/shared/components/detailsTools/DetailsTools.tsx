import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material"

interface IDetailsToolsProps {
  textNewButton?: string

  showSaveButton?: boolean
  showSaveBackButton?: boolean
  showDeleteButton?: boolean
  showNewButton?: boolean
  showBackButton?: boolean

  showSaveButtonLoading?: boolean
  showSaveBackButtonLoading?: boolean
  showDeleteButtonLoading?: boolean
  showNewButtonLoading?: boolean
  showBackButtonLoading?: boolean

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

  showSaveButtonLoading = false,
  showSaveBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showNewButtonLoading = false,
  showBackButtonLoading = false,

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

      {(showSaveButton && !showSaveButtonLoading) && (
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

      {showSaveButtonLoading && (
        <Skeleton width={110} height={60} />
      )}

      {(showSaveBackButton && !showSaveBackButtonLoading) && (
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
      {showSaveBackButtonLoading && (
        <Skeleton width={180} height={60} />
      )}

      {(showDeleteButton && !showDeleteButtonLoading) && (
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
      {showDeleteButtonLoading && (
        <Skeleton width={110} height={60} />
      )}

      {(showNewButton && !showNewButtonLoading) && (
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
      {showNewButtonLoading && (
        <Skeleton width={110} height={60} />
      )}

      <Divider variant="middle" orientation="vertical" />

      {(showBackButton && !showBackButtonLoading) && (
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

      {showBackButtonLoading && (
        <Skeleton width={110} height={60} />
      )}

    </Box>
  )
}