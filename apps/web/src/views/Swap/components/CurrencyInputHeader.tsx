import {
  Flex,
  HistoryIcon,
  IconButton,
  NotificationDot,
  Swap,
  useModal,
} from '@pancakeswap/uikit'

import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import RefreshIcon from 'components/Svg/RefreshIcon'
import { ReactElement, useCallback } from 'react'
import { useExpertModeManager } from 'state/user/hooks'
import { SettingsMode } from '../../../components/Menu/GlobalSettings/types'

interface Props {
  title: string | ReactElement
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
  hasAmount: boolean
  onRefreshPrice: () => void
}


const CurrencyInputHeader: React.FC<React.PropsWithChildren<Props>> = ({
  subtitle,
  hasAmount,
  onRefreshPrice,
  title,
}) => {
  const [expertMode] = useExpertModeManager()
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  const handleOnClick = useCallback(() => onRefreshPrice?.(), [onRefreshPrice])


  const titleContent = (
    <Flex width="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
      <Flex flexDirection="column" alignItems="flex-start" width="100%" marginBottom={15}>
        <Swap.CurrencyInputHeaderTitle>{title}</Swap.CurrencyInputHeaderTitle>
      </Flex>
      <Flex justifyContent="start" width="100%" height="17px" alignItems="center" mb="14px">
        <Swap.CurrencyInputHeaderSubTitle>{subtitle}</Swap.CurrencyInputHeaderSubTitle>
      </Flex>
      <Flex width="100%" justifyContent="end">
        <NotificationDot show={expertMode}>
          <GlobalSettings color="textSubtle" mr="0" mode={SettingsMode.SWAP_LIQUIDITY} />
        </NotificationDot>
        <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
          <HistoryIcon color="textSubtle" width="24px" />
        </IconButton>
        <IconButton variant="text" scale="sm" onClick={handleOnClick}>
          <RefreshIcon disabled={!hasAmount} color="textSubtle" width="27px" />
        </IconButton>
      </Flex>
    </Flex>
  )

  return <Swap.CurrencyInputHeader title={titleContent} subtitle={<></>} />
}

export default CurrencyInputHeader
