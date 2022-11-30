export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  releaseBlockNumber: number
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',
  // 'TWT' = 'TWT',
  // 'UST' = 'UST',
  'WCAKE' = 'WCAKE',
  // 'VAULT' = 'VAULT',
  // 'BTCB' = 'BTCB',
  'SAWON' = 'SAWON',
  // 'PLUM' = 'PLUM',
  // 'SLIME' = 'SLIME',
  // 'TAKO' = 'TAKO'
  'MATIC' = 'MATIC',
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native MATIC behave differently than pools using a token
  'MATIC' = 'Matic', // Pools using native MATIC behave differently than pools using a token
}

export interface Address {
  97?: string
  137: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  depositUrl?: string
  image?: string
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: string
  contractAddress: Address
  poolCategory: PoolCategory
  projectLink: string,
  withBurnFee?: boolean,
  burnFee?: number,
  isLPReward ?: boolean,  isLPStake ?: boolean,
  withwithdrawDepositFee?:boolean,
  depositFee?:number,
  noApy?:boolean,
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  tokenDecimals: number
  startBlock? :number
  endBlock? : number
  isApe?: boolean
  slimeRounding? : number,
  isSlimeAMM? : boolean
}

export type Nft = {
  name: string
  description: string
  originalImage: string
  previewImage: string
  blurImage: string
  sortOrder: number
  bunnyId: number
}
