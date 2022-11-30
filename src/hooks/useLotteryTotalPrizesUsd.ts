import { usePriceSawonBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalSawon = getBalanceNumber(totalRewards)
  const sawonPriceBusd = usePriceSawonBusd()

  return totalSawon * sawonPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
