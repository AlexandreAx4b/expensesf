import { DetailsTools, ListingTools } from "../../shared/components"
import { BaseLayout } from "../../shared/layouts"

export const Dashboard = () => {

  return (
    <BaseLayout
      titulo="Página Inicial"
      barraFerramentas={(
        <DetailsTools showSaveBackButton />
      )}>
      testando
    </BaseLayout>

  )
}