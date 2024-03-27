import React from 'react'
import { NavLinkMenu, UserNavList } from './UserNav.styled'

export const UserNav = () => {
  return (
        <UserNavList>
            <li>
                <NavLinkMenu to = "/dictionary">Dictionary</NavLinkMenu>
            </li>
            <li>
                <NavLinkMenu to = "/recommend">Reccomend</NavLinkMenu>
            </li>
            <li>
                <NavLinkMenu to = "/training">Training</NavLinkMenu>
            </li>
        </UserNavList>   
  )
}
