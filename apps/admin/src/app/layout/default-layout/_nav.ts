import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Home',
    variant: 'menu.home',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'New Order',
    variant: 'menu.new_order',
    url: '/base/breadcrumbs',
    iconComponent: { name: 'cil-playlist-add' }
  },
  {
    name: 'Storico Ordini',
    variant: 'menu.orders_history',
    url: '/base/accordion',
    iconComponent: { name: 'cil-list' }
  },
  {
    name: 'Scarica Listino',
    url: '/theme/typography',
    variant: 'menu.listing_download',
    iconComponent: { name: 'cil-cloud-download' }
  },
  {
    name: 'Statistiche',
    url: '/theme/typography',
    variant: 'menu.statistics',
    iconComponent: { name: 'cil-chart' }
  },
  {
    name: 'Dropshipping',
    url: '/base',
    variant: 'menu.dropshipping',
    iconComponent: { name: 'cil-transfer' },
    children: [
      {
        name: 'Nuovo Ordine',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet',
        variant: 'menu.new_order'
      },
      {
        name: 'Storico Ordini',
        url: '/base/accordion',
        icon: 'nav-icon-bullet',
        variant: 'menu.orders_history'
      },
      {
        name: 'Clienti',
        url: '/base/cards',
        icon: 'nav-icon-bullet',
        variant: 'menu.customers'
      },
      {
        name: 'API',
        url: '/base/cards',
        icon: 'nav-icon-bullet',
        variant: 'menu.api'
      }
    ]
  },
  {
    name: 'Documentazione API',
    url: '/theme/typography',
    variant: 'menu.api_documentation',
    iconComponent: { name: 'cil-code' }
  },
  {
    name: 'Help Center',
    url: '/theme/typography',
    variant: 'menu.help_center',
    iconComponent: { name: 'cil-life-ring' }
  },
  {
    name: 'Communication Kit',
    url: '/theme/typography',
    variant: 'menu.communication_kit',
    iconComponent: { name: 'cil-image' }
  },
];
