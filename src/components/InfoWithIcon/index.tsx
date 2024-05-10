import { ReactNode } from 'react'
import { IconContainer, InfoWidthIconContainer } from './styles'

interface InfoWidthIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWidthIconProps) {
  return (
    <InfoWidthIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWidthIconContainer>
  )
}
