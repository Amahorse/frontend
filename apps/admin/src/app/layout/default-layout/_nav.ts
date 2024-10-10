import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Home',
    variant: 'menu.home',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Utenti',
    url: '/users',
    variant: 'menu.users',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Nuovo',
        url: '/users/user',
        icon: 'nav-icon-bullet',
        variant: 'menu.new'
      },
      {
        name: 'Lista',
        url: '/users/list',
        icon: 'nav-icon-bullet',
        variant: 'menu.list'
      }
    ]
  },
  {
    name: 'Documentazione API',
    url: '/api-docs',
    variant: 'menu.api_documentation',
    iconComponent: { name: 'cil-code' }
  }
];
