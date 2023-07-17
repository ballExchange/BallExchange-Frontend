import { ERC20Token, ChainId } from '@pancakeswap/sdk'
import { bscTokens,shibTestnetTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './lp'
import { Ifo } from './types'

export const cakeBnbLpToken = new ERC20Token(ChainId.SHIB_TESTNET, CAKE_BNB_LP_MAINNET, 18, 'CAKE-BNB LP')

const ifos: Ifo[] = [
  {
    id: 'ball',
    address: '0xcA5A6663838A1340B9DbE015973F85374D288302',
    // 0x457D0AB4790540Da9d26961AE3bBfc1440481228
    // 0x01607d668c3eD9F39038068C4d611d244ba6A249
    // 0x665911B85B33750eC6dF4dFe32A46C27c3D32951
    // 0x2B07b7Ad1a0bc1476a36F7723673DBdd048d4d33
    // 0xe183C716714C2f56c5A580CCC250d01BffBc9f12
	// 0xcA5A6663838A1340B9DbE015973F85374D288302
    isActive: true,
    name: 'Ball Exchange',
    plannedStartTime: 196574317, // Mon Jan 16 2023 12:00:00 UTC
    poolBasic: {
      raiseAmount: '$40.500',
    },
    poolUnlimited: {
      raiseAmount: '$125.000',
    },
    currency: shibTestnetTokens.usdt,
    token: shibTestnetTokens.cake,
    campaignId: '512100000',
    articleUrl: '#',
    tokenOfferingPrice: 0.5,
    currencyPrice: 1,
    version: 3.2,
    twitterUrl: 'https://twitter.com/BallShibarium',
    description:  '',
    vestingTitle: '',
  },
]

export default ifos
