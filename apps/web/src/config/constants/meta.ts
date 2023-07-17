import memoize from 'lodash/memoize'
import { ContextApi } from '@pancakeswap/localization'
import { PageMeta } from './types'
import { ASSET_CDN } from './endpoints'

export const DEFAULT_META: PageMeta = {
  title: 'Ball Exchange',
  description:
    'Custom-built liquidity infrastructure to support builders & generate real yield. TOP 1 project launched on Shibarium',
  image: `${ASSET_CDN}/images/og/default.jpg`,
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string; image?: string } }
  defaultTitleSuffix: string
}

const getPathList = (t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/': { title: t('Home') },
      '/swap': { basePath: true, title: t('Exchange'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/limit-orders': { basePath: true, title: t('Limit Orders'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/add': { basePath: true, title: t('Add Liquidity'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/remove': { basePath: true, title: t('Remove Liquidity'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/liquidity': { title: t('Liquidity'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/find': { title: t('Import Pool') },
      '/competition': { title: t('Trading Battle') },
      '/prediction': { title: t('Prediction'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/prediction/leaderboard': { title: t('Leaderboard'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/farms': { title: t('Farms'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/farms/auction': { title: t('Farm Auctions'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/pools': { title: t('Pools'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/lottery': { title: t('Lottery'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/ifo': { title: t('Initial Farm Offering'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/teams': { basePath: true, title: t('Leaderboard'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/voting': { basePath: true, title: t('Voting'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/voting/proposal': { title: t('Proposals'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/voting/proposal/create': { title: t('Make a Proposal'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/info': {
        title: `${t('Overview')} - ${t('Info')}`,
        description: 'View statistics for Ball exchanges.',
        image: `${ASSET_CDN}/images/og/default.jpg`,
      },
      '/info/pairs': {
        title: `${t('Pairs')} - ${t('Info')}`,
        description: 'View statistics for Ball exchanges.',
        image: `${ASSET_CDN}/images/og/default.jpg`,
      },
      '/info/tokens': {
        title: `${t('Tokens')} - ${t('Info')}`,
        description: 'View statistics for Ball exchanges.',
        image: `${ASSET_CDN}/images/og/default.jpg`,
      },
      '/nfts': { title: t('NFT Marketplace'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/nfts/collections': { basePath: true, title: t('Collections'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/nfts/activity': { title: t('Activity'), image: `${ASSET_CDN}/images/og/default.jpg` },
      '/profile': { basePath: true, title: t('Profile') },
      '/pancake-squad': { basePath: true, title: t('Pancake Squad') },
      '/pottery': { basePath: true, title: t('Pottery'), image: `${ASSET_CDN}/images/og/default.jpg` },
    },
    defaultTitleSuffix: t('Ball Exchange'),
  }
}

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta => {
    const pathList = getPathList(t)
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]]

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
        image: pathMetadata.image,
      }
    }
    return null
  },
  (path, t, locale) => `${path}#${locale}`,
)
