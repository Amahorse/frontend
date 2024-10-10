import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Home',
    variant: 'menu.home',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'New Order',
    variant: 'menu.new_order',
    url: '/new-order',
    iconComponent: { name: 'cil-playlist-add' }
  },
  {
    name: 'Storico Ordini',
    variant: 'menu.orders_history',
    url: '/orders-history',
    iconComponent: { name: 'cil-list' }
  },
  {
    name: 'Scarica Listino',
    url: '/listing-download',
    variant: 'menu.listing_download',
    iconComponent: { name: 'cil-cloud-download' }
  },
  {
    name: 'Statistiche',
    url: '/statistics',
    variant: 'menu.statistics',
    iconComponent: { name: 'cil-chart' }
  },
  {
    name: 'Dropshipping',
    url: '/dropshipping',
    variant: 'menu.dropshipping',
    iconComponent: { name: 'cil-transfer' },
    children: [
      {
        name: 'Nuovo Ordine',
        url: '/dropshipping/new-order',
        icon: 'nav-icon-bullet',
        variant: 'menu.new_order'
      },
      {
        name: 'Storico Ordini',
        url: '/dropshipping/orders-history',
        icon: 'nav-icon-bullet',
        variant: 'menu.orders_history'
      },
      {
        name: 'Clienti',
        url: '/dropshipping/customers',
        icon: 'nav-icon-bullet',
        variant: 'menu.customers'
      }
    ]
  },
  {
    name: 'Documentazione API',
    url: '/api-docs',
    variant: 'menu.api_documentation',
    iconComponent: { name: 'cil-code' }
  },
  {
    name: 'Help Center',
    url: '/help-center',
    variant: 'menu.help_center',
    iconComponent: { name: 'cil-life-ring' }
  },
  {
    name: 'Communication Kit',
    url: '/communication-kit',
    variant: 'menu.communication_kit',
    iconComponent: { name: 'cil-image' }
  },
];
