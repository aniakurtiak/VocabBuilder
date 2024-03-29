import { Filters } from 'components/Filters/Filters'
import React from 'react'
import { DashboardContainer } from './Dashboard.styled'

export const Dashboard = () => {
  return (
    <DashboardContainer>
        <Filters/>
    </DashboardContainer>
  )
}
