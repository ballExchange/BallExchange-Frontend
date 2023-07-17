import { ChainId } from '@pancakeswap/sdk'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'

interface GetPerpetualUrlProps {
  chainId: ChainId
  languageCode: string
  isDark: boolean
}

export const getPerpetualUrl = ({ chainId, languageCode, isDark }: GetPerpetualUrlProps) => {
  const perpChain = chainId === ChainId.ETHEREUM ? 'ethereum' : 'bnbchain'
  return `https://perp.ball.exchange/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
    isDark,
  )}&chain=${perpChain}`
}
