import { ChainId, ERC20Token, WBONE } from '@pancakeswap/sdk'
import { USDC_SHIBTESTNET,  USDT_SHIBTESTNET, CAKE_SHIBTESTNET } from './common'

export const shibTestnetTokens = {
  cake: CAKE_SHIBTESTNET,
  wbone: WBONE[ChainId.SHIB_TESTNET],
  usdc: USDC_SHIBTESTNET,
  usdt: USDT_SHIBTESTNET,
}
