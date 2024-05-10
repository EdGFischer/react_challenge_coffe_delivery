import { ReactNode } from 'react'
import { SectioTitleContainer } from './style'
import { RegularText } from '../../../../components/Typography'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTiltle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectioTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectioTitleContainer>
  )
}
