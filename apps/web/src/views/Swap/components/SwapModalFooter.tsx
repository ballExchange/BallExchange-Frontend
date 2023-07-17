import { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Trade, TradeType, CurrencyAmount, Currency } from '@pancakeswap/sdk'
import { Button, Text, AutoRenewIcon, AutoColumn } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { Field } from 'state/swap/actions'
import { computeTradePriceBreakdown, formatExecutionPrice, warningSeverity } from 'utils/exchange'
import { AutoRow, RowBetween, RowFixed } from 'components/Layout/Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import { StyledBalanceMaxMini, SwapCallbackError } from './styleds'

const SwapModalFooterContainer = styled(AutoColumn)`
  margin-top: 24px;
  line-height: 40px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.default};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
`

export default function SwapModalFooter({
  trade,
  slippageAdjustedAmounts,
  isEnoughInputBalance,
  onConfirm,
  swapErrorMessage,
  disabledConfirm,
}: {
  trade: Trade<Currency, Currency, TradeType>
  slippageAdjustedAmounts: { [field in Field]?: CurrencyAmount<Currency> }
  isEnoughInputBalance: boolean
  onConfirm: () => void
  swapErrorMessage?: string | undefined
  disabledConfirm: boolean
}) {
  const { t } = useTranslation()
  const [showInverted, setShowInverted] = useState<boolean>(false)
  const { priceImpactWithoutFee, realizedLPFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const severity = warningSeverity(priceImpactWithoutFee)

  return (
    <>
      <SwapModalFooterContainer>
        <RowBetween mb='10px' align="center">
          <Text fontSize="14px">{t('Price')}</Text>
          <Text
            fontSize="14px"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              textAlign: 'right',
              paddingLeft: '10px',
            }}
          >
            {formatExecutionPrice(trade, showInverted)}
            <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
              <AutoRenewIcon width="14px" />
            </StyledBalanceMaxMini>
          </Text>
        </RowBetween>

        <RowBetween mb='10px' >
          <RowFixed>
            <Text fontSize="14px">
              {trade.tradeType === TradeType.EXACT_INPUT ? t('Minimum received') : t('Maximum sold')}
            </Text>
          </RowFixed>
          <RowFixed>
            <Text fontSize="14px">
              {trade.tradeType === TradeType.EXACT_INPUT
                ? slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4) ?? '-'
                : slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4) ?? '-'}
            </Text>
            <Text fontSize="14px" marginLeft="4px">
              {trade.tradeType === TradeType.EXACT_INPUT
                ? trade.outputAmount.currency.symbol
                : trade.inputAmount.currency.symbol}
            </Text>
          </RowFixed>
        </RowBetween>
        <RowBetween mb='10px' >
          <RowFixed>
            <Text fontSize="14px">{t('Price Impact')}</Text>
          </RowFixed>
          <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <Text fontSize="14px">{t('Liquidity Provider Fee')}</Text>
          </RowFixed>
          <Text fontSize="14px">
            {realizedLPFee ? `${realizedLPFee?.toSignificant(6)} ${trade.inputAmount.currency.symbol}` : '-'}
          </Text>
        </RowBetween>
      </SwapModalFooterContainer>

      <AutoRow>
        <Button
          variant={severity > 2 ? 'danger' : 'primary'}
          onClick={onConfirm}
          disabled={disabledConfirm}
          mt="12px"
          id="confirm-swap-or-send"
          width="100%"
        >
          {severity > 2 || (trade.tradeType === TradeType.EXACT_OUTPUT && !isEnoughInputBalance)
            ? t('Swap Anyway')
            : t('Confirm Swap')}
        </Button>

        {swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
      </AutoRow>
    </>
  )
}
