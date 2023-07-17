
import { useRouter } from 'next/router'
import { Menu as UikitMenu, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import {  languageList } from '@pancakeswap/localization'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import UserMenu from './UserMenu'
import { useMenuItems } from './hooks/useMenuItems'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'


const Menu = (props) => {
  const { pathname } = useRouter()

  const menuItems = useMenuItems()

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })
  return (
    <>
      <UikitMenu
        linkComponent={(linkProps) => {
          return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
        }}
        rightSide={
          <>
            <NetworkSwitcher />
            <UserMenu />
          </>
        }
        langs={languageList}
        links={menuItems}
        subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        {...props}
      />
    </>
  )
}

export default Menu
