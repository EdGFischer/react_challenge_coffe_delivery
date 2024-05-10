import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { TitleText } from '../../../../components/Typography'
import { SectionTiltle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSelectionContainer } from './styles'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSelectionContainer>
        <SectionTiltle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber o pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />
        <AddressForm />
      </FormSelectionContainer>
      <FormSelectionContainer>
        <SectionTiltle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={
            <CurrencyDollar color={colors['brand-purple-dark']} size={22} />
          }
        />
        <PaymentMethodOptions />
      </FormSelectionContainer>
    </CompleteOrderFormContainer>
  )
}
