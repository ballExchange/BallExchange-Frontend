import { useMemo } from 'react'
import { Flex, useMatchBreakpoints, Pool } from '@pancakeswap/uikit'
import BallExchange from 'views/Ifos/components/BallExchange'
import { usePoolsWithVault } from 'state/pools/hooks'
import { Token } from '@pancakeswap/sdk'
import BallApplyIfo from 'views/Ifos/components/BallApplyIfo'
import IfoVesting from './IfoVesting/index'

const IfoPoolVaultCard = () => {
 const { isMobile } = useMatchBreakpoints()
  const { pools } = usePoolsWithVault()
  const cakePool = useMemo(
    () => pools.find((pool) => pool.userData && pool.sousId === 0),
    [pools],
  ) as Pool.DeserializedPool<Token>

  return (
    
    <Flex width="100%" maxWidth={400} alignItems="center" flexDirection="column">
    
    {!isMobile && (
     <BallExchange name='Ball Exchange' />
     )}
    {!isMobile && (
     <IfoVesting pool={cakePool} />
     )}
    </Flex>
   
  )
}

export default IfoPoolVaultCard
