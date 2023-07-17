export const PANCAKE_EXTENDED = 'https://tokens.ball.exchange/pancakeswap-extended.json'
export const COINGECKO = 'https://tokens.ball.exchange/coingecko.json'
export const PANCAKE_ETH_DEFAULT = 'https://tokens.ball.exchange/pancakeswap-eth-default.json'
export const PANCAKE_ETH_MM = 'https://tokens.ball.exchange/pancakeswap-eth-mm.json'
export const PANCAKE_BSC_MM = 'https://tokens.ball.exchange/pancakeswap-bnb-mm.json'
export const COINGECKO_ETH = 'https://tokens.coingecko.com/uniswap/all.json'
export const CMC = 'https://tokens.ball.exchange/cmc.json'
export const SHIB_TESTNET = 'https://tokens.ball.exchange/pancakeswap-shib-default.json'

export const ETH_URLS = [PANCAKE_ETH_DEFAULT, PANCAKE_ETH_MM, COINGECKO_ETH, SHIB_TESTNET]
export const BSC_URLS = [PANCAKE_EXTENDED, CMC, COINGECKO, PANCAKE_BSC_MM, SHIB_TESTNET]

// List of official tokens list
export const OFFICIAL_LISTS = [PANCAKE_EXTENDED, PANCAKE_ETH_DEFAULT, PANCAKE_ETH_MM, SHIB_TESTNET]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...BSC_URLS,
  ...ETH_URLS,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [PANCAKE_EXTENDED, PANCAKE_ETH_DEFAULT, PANCAKE_ETH_MM, SHIB_TESTNET]