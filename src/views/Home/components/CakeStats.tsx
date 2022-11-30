import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceSawonBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 16px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const sawonPrice = usePriceSawonBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = sawonPrice.times(circSupply);

  let sawonPerBlock = 0;
  if(farms && farms[0] && farms[0].sawonPerBlock){
    sawonPerBlock = new BigNumber(farms[0].sawonPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="40px">
          {TranslateString(534, 'Sawon Stats')}
        </Heading>
        <Row>
          <Text fontSize="20px">{TranslateString(536, 'Total SAWON Supply')}</Text>
          {cakeSupply && <CardValue fontSize="20px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="20px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(538, 'Total SAWON Burned')}</Text>
          <CardValue fontSize="20px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(540, 'New SAWON/block')}</Text>
          <Text bold fontSize="20px">{sawonPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
