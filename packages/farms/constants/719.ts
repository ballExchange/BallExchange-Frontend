import { shibTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
   {
    pid: 0,
    lpAddress: '0x77cC36fa796b35804e9CA28b935511AF98d1D15a',
    token: shibTestnetTokens.cake,
    quoteToken: shibTestnetTokens.cake,
    lpSymbol: 'dBALLPOOL LP',
  },
  {
    pid: 1,
    lpAddress: '0xfc1a4bD0110225143449861d0af68A6f7D18770d',
    token: shibTestnetTokens.wbone,
    quoteToken: shibTestnetTokens.usdt,
    lpSymbol: 'BONE-USDT LP',
  },
{
    pid: 2,
    lpAddress: '0x5315192F3C7FDAEdFC7C50cc0221eff56F787009',
    token: shibTestnetTokens.usdc,
    quoteToken: shibTestnetTokens.usdt,
    lpSymbol: 'USDC-USDT LP',
  },
  {
    pid: 3,
    lpAddress: '0xF032d725E82007F42cAA83E9704E4ca665b99728',
    token: shibTestnetTokens.cake,
    quoteToken: shibTestnetTokens.usdc,
    lpSymbol: 'BALL-USDC LP',
  },
  {
    pid: 4,
    lpAddress: '0x11485a561adDD671DBFAc201ed50435067477FfA',
    token: shibTestnetTokens.cake,
    quoteToken: shibTestnetTokens.usdt,
    lpSymbol: 'BALL-USDT LP',
  },
  {
    pid: 5,
    lpAddress: '0x85679D5B929287DA09ccbd2b27cB333F8A8c26f3',
    token: shibTestnetTokens.cake,
    quoteToken: shibTestnetTokens.wbone,
    lpSymbol: 'BALL-BONE LP',
  }
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
