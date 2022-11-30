import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1186131,
    risk: 1,
    lpSymbol: 'SAWON-BUSD LP',
    lpAddresses: { 56: '0xbAf32Aa941b469C433F5990022f2010B40A0124D', }, // SAWON-BUSD LP swap.c4ei.net 56
    tokenSymbol: 'SAWON',
    tokenAddresses: { 56: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    image: 'sawon-busd',
  },
  {
    pid: 1186131, // 2022-11-18
    risk: 2,
    lpSymbol: 'SAWON-wBNB LP',
    lpAddresses: { 56: '0x6a48d37EC1257EdF54b99b99B4E9E3bcbA598AE5', }, // SAWON-BNB LP swap.c4ei.net 56
    tokenSymbol: 'SAWON',
    tokenAddresses: { 56: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    image: 'sawon-bnb',
    // isDisplay: 'N',
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'wBNB-BUSD LP',
    lpAddresses: { 56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', },
    tokenSymbol: 'BNB',
    tokenAddresses: { 56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    // isDisplay: 'N',
  },
]

export default farms
