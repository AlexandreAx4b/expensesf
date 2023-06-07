import { DetailsTools } from "../../shared/components"
import { BaseLayout } from "../../shared/layouts"

export const Dashboard = () => {

  return (
    <BaseLayout
      titulo="Página Inicial"
      barraFerramentas={(
        <DetailsTools
        showNewButton
        showSaveBackButton
        showSaveBackButtonLoading
        showBackButton={false}
        />
      )}>
      testando
    </BaseLayout>

  )
}