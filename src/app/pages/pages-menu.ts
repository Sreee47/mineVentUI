import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title : "Dashboard",
 link: '/pages/dashboard',
   home: true,
  },
  {
    title: 'Mine 1',
    // icon: 'nb-home',
    // link : '/pages/dashboard',
  
    children: [
          {
            title: 'Stope 1',
            link: '/pages/dashboard/stopedetails',
          },
          {
            title: 'Stope 2',
            link: '/pages/dashboard/stopetwo',
          },
          {
            title: 'Stope 3',
            link: '/pages/dashboard/stoperthree',
          },
          {
            title: 'Stope 4',
            link: '/pages/dashboard/stopefour',
          },
          {
            title: 'Stope 5',
            link: '/pages/dashboard/stopefive',
          },
          {
            title: 'Stope 6',
            link: '/pages/dashboard/stopesix',
          },
         
        ],
  },
 
 
];
