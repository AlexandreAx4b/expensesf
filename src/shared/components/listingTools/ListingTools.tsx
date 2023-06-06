import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"

interface IListingToolsProps {
  searchText?: string;
  showTextSearch?: boolean;
  changeSearchText?: (newText: string) => void;
  newButtonText?: string;
  showNewButton?: boolean;
  clickNew?: () => void
}
export const ListingTools: React.FC<IListingToolsProps> = ({
  searchText = '',
  showTextSearch = false,
  changeSearchText,
  newButtonText = 'Novo',
  showNewButton = true,
  clickNew,
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

      {showTextSearch && (
        <TextField
          size='small'
          placeholder='pesquisar...'
          value={searchText}
          onChange={(e) => changeSearchText?.(e.target.value)}
        />
      )}

      <Box flex={1} display='flex' justifyContent='end'>
        {showNewButton && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={clickNew}
            endIcon={<Icon>add</Icon>}
          >
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  )
}