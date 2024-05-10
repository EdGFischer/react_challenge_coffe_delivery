import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeCard } from '../CoffeCard'
import { CoffeesList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeesList>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesList>
    </OurCoffeesContainer>
  )
}
