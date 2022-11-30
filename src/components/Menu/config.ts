import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://swap.c4ei.net/swap?chainId=137',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.c4ei.net/liquidity?chainId=137',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'SafeFarms',
  //   icon: 'FarmIcon',
  //   href: 'http://safefarms.klay.c4ei.net/info',
  // },
  // {
  //   label: 'Launch Pools',
  //   icon: 'PoolIcon',
  //   href: '/launch',
  // },
  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://klay.c4ei.net/Audit.pdf',
  // },


  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   items: [
  //     {
  //       label: 'Techrate',
  //       href: '/Audit.pdf',
  //     },
  //     {
  //       label: 'CERTIK',
  //       href: 'https://certik.org/projects/marshmallow',
  //     },
  //   ],
  // },

  // {
  //   label: 'Partnership',
  //   icon: 'AuditIcon',
  //   href: 'https://forms.gle/UdsH5aEU3JxroM5G9',
  // },
  {
    label: 'Token Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SAWON Scan',
        href: 'https://polygonscan.com/account/0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66',
      },
      // {
      //   label: 'SAWON Price Graph',
      //   href: 'https://dex.guru/token/0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66-bsc',
      // }
      // ,{
      //   label: 'TOFY BSC Scan',
      //   href: 'https://polygonscan.com/token/0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      // },
      // {
      //   label: 'TOFY Price Graph',
      //   href: 'https://charts.bogged.finance/?token=0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      // }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/c4ei",
      },
      {
        label: "Telegram",
        href: "https://t.me/c4eiAirdrop",
      },
      {
        label: "설명서",
        href: "https://docs.google.com/document/d/1qT76SW6ft_nKA7guj16Ty_veOo-s2vI_0KNB2OP3ugc/edit?usp=sharing",
      },
    ],
  },
]

export default config
