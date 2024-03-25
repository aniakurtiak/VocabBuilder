import React from 'react'
import { NavLink } from 'react-router-dom'
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
