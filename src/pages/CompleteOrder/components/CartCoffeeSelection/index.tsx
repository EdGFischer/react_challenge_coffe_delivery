import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CardContext'
import {
  ActionContainer,
  CartCoffeeSelectionContainer,
  RemoveButton,
} from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CartCoffeeProps {
  coffee: CartItem
}

export function CartCoffeeSelection({ coffee }: CartCoffeeProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeTotal)

  return (
    <CartCoffeeSelectionContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.photo}</RegularText>
          <ActionContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            ></QuantityInput>
            <RemoveButton onClick={handleRemove}>
              <Trash size="16" /> Remover
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>
      <p>{formattedPrice}</p>
    </CartCoffeeSelectionContainer>
  )
}
