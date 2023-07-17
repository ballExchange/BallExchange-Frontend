import { useTranslation } from '@pancakeswap/localization'
import { Currency, CurrencyAmount, Percent, TradeType } from '@pancakeswap/sdk'
import { Pair } from '@pancakeswap/smart-router/evm'
import { Modal, ModalV2, QuestionHelper, SearchIcon, Text, Flex, Link, AutoColumn } from '@pancakeswap/uikit'

import { RowBetween, RowFixed } from 'components/Layout/Row'
import { BUYBACK_FEE, LP_HOLDERS_FEE, TOTAL_FEE, TREASURY_FEE } from 'config/constants/info'
import { useState } from 'react'
import { Field } from 'state/swap/actions'
import FormattedPriceImpact from './FormattedPriceImpact'
import { RouterViewer } from './RouterViewer'
import SwapRoute from './SwapRoute'

function TradeSummary({
  inputAmount,
  outputAmount,
  tradeType,
  slippageAdjustedAmounts,
  priceImpactWithoutFee,
  realizedLPFee,
  hasStablePair = false,
  isMM = false,
}: {
  hasStablePair?: boolean
  inputAmount?: CurrencyAmount<Currency>
  outputAmount?: CurrencyAmount<Currency>
  tradeType?: TradeType
  slippageAdjustedAmounts: {
    INPUT?: CurrencyAmount<Currency>
    OUTPUT?: CurrencyAmount<Currency>
  }
  priceImpactWithoutFee?: Percent
  realizedLPFee?: CurrencyAmount<Currency>
  isMM?: boolean
}) {
  const { t } = useTranslation()
  const isExactIn = tradeType === TradeType.EXACT_INPUT
  const totalFeePercent = `${(TOTAL_FEE * 100).toFixed(2)}%`
  const lpHoldersFeePercent = `${(LP_HOLDERS_FEE * 100).toFixed(2)}%`
  const treasuryFeePercent = `${(TREASURY_FEE * 100).toFixed(4)}%`
  const buyBackFeePercent = `${(BUYBACK_FEE * 100).toFixed(4)}%`

  return (
    <AutoColumn style={{ padding: '0 16px' }}>
      <RowBetween mb='10px'>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {isExactIn ? t('Minimum received') : t('Maximum sold')}
          </Text>
        </RowFixed>
        <RowFixed>
          <Text fontSize="14px">
            {isExactIn
              ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${outputAmount.currency.symbol}` ?? '-'
              : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${inputAmount.currency.symbol}` ?? '-'}
          </Text>
        </RowFixed>
      </RowBetween>
      {priceImpactWithoutFee && (
        <RowBetween  mb='10px'>
          <RowFixed>
            <Text fontSize="14px" color="textSubtle">
              {t('Price Impact')}
            </Text>
          </RowFixed>

          {isMM ? <Text color="textSubtle">--</Text> : <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />}
        </RowBetween>
      )}

      {realizedLPFee && (
        <RowBetween  mb='10px'>
          <RowFixed>
            <Text fontSize="14px" color="textSubtle">
              {t('Liquidity Provider Fee')}
            </Text>
          </RowFixed>
          <Text fontSize="14px">{`${realizedLPFee.toSignificant(4)} ${inputAmount.currency.symbol}`}</Text>
        </RowBetween>
      )}
    </AutoColumn>
  )
}

export interface AdvancedSwapDetailsProps {
  hasStablePair?: boolean
  pairs?: Pair[]
  path?: Currency[]
  priceImpactWithoutFee?: Percent
  realizedLPFee?: CurrencyAmount<Currency>
  slippageAdjustedAmounts?: {
    INPUT?: CurrencyAmount<Currency>
    OUTPUT?: CurrencyAmount<Currency>
  }
  inputAmount?: CurrencyAmount<Currency>
  outputAmount?: CurrencyAmount<Currency>
  tradeType?: TradeType
  isMM?: boolean
}

export function AdvancedSwapDetails({
  pairs,
  path,
  priceImpactWithoutFee,
  realizedLPFee,
  slippageAdjustedAmounts,
  inputAmount,
  outputAmount,
  tradeType,
  hasStablePair,
  isMM = false,
}: AdvancedSwapDetailsProps) {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showRoute = Boolean(path && path.length > 1)
  return (
    <AutoColumn gap="0px">
      {inputAmount && (
        <>
          <TradeSummary
            inputAmount={inputAmount}
            outputAmount={outputAmount}
            tradeType={tradeType}
            slippageAdjustedAmounts={slippageAdjustedAmounts}
            priceImpactWithoutFee={priceImpactWithoutFee}
            realizedLPFee={realizedLPFee}
            hasStablePair={hasStablePair}
            isMM={isMM}
          />
          {showRoute && (
            <>
              <RowBetween style={{ padding: '0 16px' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Text fontSize="14px" color="textSubtle">
                    {t('Route')}
                  </Text>
                </span>
                <SwapRoute path={path} />
                <ModalV2 closeOnOverlayClick isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)}>
                  <Modal
                    title={
                      <Flex justifyContent="center">
                        {t('Route')}{' '}
                      </Flex>
                    }
                    onDismiss={() => setIsModalOpen(false)}
                  >
                    <RouterViewer
                      isMM={isMM}
                      inputCurrency={inputAmount.currency}
                      pairs={pairs}
                      path={path}
                      outputCurrency={outputAmount.currency}
                    />
                  </Modal>
                </ModalV2>
              </RowBetween>
            </>
          )}
        </>
      )}
    </AutoColumn>
  )
}
