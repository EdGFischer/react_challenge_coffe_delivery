import { InputHTMLAttributes, forwardRef } from 'react'
import {
  InputStyleContainer,
  InputStyled,
  InuptWrapper,
  RightText,
} from './styles'
import { RegularText } from '../Typography'

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InuptWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InuptWrapper>
    )
  },
)

Input.displayName = 'Input'
