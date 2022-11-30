import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'SAWON-BUSD LP',
    lpAddresses: { 137: '0x89e485E5c252A3289CB6BFF07FbBDeEf8dEE0372', }, // SAWON-BUSD LP swap.c4ei.net 137
    tokenSymbol: 'SAWON',
    tokenAddresses: { 137: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    image: 'sawon-busd',
  },
  {
    pid: 4, // 2022-11-18
    risk: 2,
    lpSymbol: 'SAWON-wMATIC LP',
    lpAddresses: { 137: '0x91BE7d2884Ec195107598D607105Be9dc2265E7B', }, // SAWON-MATIC LP swap.c4ei.net 137
    tokenSymbol: 'SAWON',
    tokenAddresses: { 137: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.MATIC,
    quoteTokenAdresses: contracts.wbnb,
    image: 'sawon-matic',
    // isDisplay: 'N',
  },
  {
    pid: 5,
    risk: 1,
    lpSymbol: 'wMATIC-BUSD LP',
    lpAddresses: { 137: '0xF508DfA40709Fd456A136B47cB5ab363AD039f7f', },
    tokenSymbol: 'MATIC',
    tokenAddresses: { 137: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    // isDisplay: 'N',
  },
]

export default farms
