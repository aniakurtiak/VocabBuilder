import React from 'react'
import { NavLinkMenu, UserNavItem, UserNavList } from './UserNav.styled'

export const UserNav = () => {
  return (
        <UserNavList>
            <UserNavItem>
                <NavLinkMenu to = "/dictionary">Dictionary</NavLinkMenu>
            </UserNavItem>
            <UserNavItem>
                <NavLinkMenu to = "/recommend">Reccomend</NavLinkMenu>
            </UserNavItem>
            <UserNavItem>
                <NavLinkMenu to = "/training">Training</NavLinkMenu>
            </UserNavItem>
        </UserNavList>   
  )
}
