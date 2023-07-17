import {
  MenuItemsType,
  SwapIcon,
  EarnIcon,
  TrophyIcon,
  RocketIcon,
  SunIcon,
  MoonIcon,
  SmartContractIcon,
  DropdownMenuItems,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Liquidity'),
      icon: TrophyIcon,
      fillIcon: TrophyIcon,
      href: '/liquidity',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Farms'),
      href: '/farms',
      showItemsOnMobile: false,
      icon: EarnIcon,
      fillIcon: EarnIcon,
      image: '/images/decorations/pe2.png',
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Pool'),
      href: '/pools',
      showItemsOnMobile: false,
      icon: MoonIcon,
      fillIcon: MoonIcon,
      image: '/images/decorations/pe2.png',
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: 'IFO',
      href: '/ifo',
      showItemsOnMobile: false,
      icon: SunIcon,
      hideSubNav: true,
      items: [
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('NFT'),
      href: 'https://nft.ball.exchange',
      icon: RocketIcon,
      showItemsOnMobile: false,
      fillIcon: RocketIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      image: '/images/decorations/nft.png',
      items: [],
    },
    
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
