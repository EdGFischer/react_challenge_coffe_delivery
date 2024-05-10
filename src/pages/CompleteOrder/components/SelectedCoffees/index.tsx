import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { CartCoffeeSelection } from '../CartCoffeeSelection'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cofés Selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <CartCoffeeSelection key={item.id} coffee={item} />
        ))}

        <ConfirmationSection></ConfirmationSection>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
