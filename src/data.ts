export interface Project {
  id: string;
  title: string;
  type: string;
  github: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'MULTI-AI-SDK',
    type: 'PACKAGE',
    github: 'https://github.com/codewithAdarsh1/multi-ai-sdk',
    live: 'https://www.npmjs.com/package/multi-ai-sdk',
    image: '/img/multi-ai-sdk.png'
  },
  {
    id: '02',
    title: 'SHOPMETA',
    type: 'E-COMMERCE',
    github: 'https://github.com/codewithAdarsh1/ShopMeta',
    live: 'https://codewithadarsh1.github.io/ShopMeta',
    image: '/img/ShopMeta.png'
  },
  {
    id: '03',
    title: 'NEON RUSH',
    type: 'GAME',
    github: 'https://github.com/codewithAdarsh1/neon_rush_game',
    live: 'https://codewithadarsh1.github.io/neon_rush_game',
    image: '/img/neon_rush_game.png'
  },
  {
    id: '04',
    title: 'TERRA EARTH',
    type: 'WEB APP',
    github: 'https://github.com/codewithAdarsh1/terra-earth',
    live: '#',
    image: '/img/terra-earth.png'
  },
  {
    id: '05',
    title: 'PORTFOLIO',
    type: 'SHOWCASE',
    github: 'https://github.com/codewithAdarsh1/my-portfilo',
    live: 'https://codewithadarsh1.github.io/my-portfilo',
    image: '/img/my-portfilo.png'
  },
  {
    id: '06',
    title: 'REFLEX CIRCUIT',
    type: 'APPLICATION',
    github: 'https://github.com/codewithAdarsh1/ReflexCircuit',
    live: 'https://codewithadarsh1.github.io/ReflexCircuit',
    image: '/img/ReflexCircuit.png'
  },
  {
    id: '07',
    title: 'DEPENDRA SHOP',
    type: 'E-COMMERCE',
    github: 'https://github.com/codewithAdarsh1/dependra-shop',
    live: 'https://codewithadarsh1.github.io/dependra-shop',
    image: '/img/dependra-shop.png'
  },
  {
    id: '08',
    title: 'TO-DO LIST',
    type: 'UTILITY',
    github: 'https://github.com/codewithAdarsh1/to-do-list',
    live: 'https://codewithadarsh1.github.io/to-do-list',
    image: '/img/to-do-list.png'
  },
  {
    id: '09',
    title: 'SEARCH SORTING',
    type: 'ALGORITHM',
    github: 'https://github.com/codewithAdarsh1/search-sorting',
    live: 'https://codewithadarsh1.github.io/search-sorting',
    image: '/img/search-sorting.png'
  },
  {
    id: '10',
    title: 'UI/UX DESIGN',
    type: 'CONCEPT',
    github: 'https://github.com/codewithAdarsh1/ui-ux',
    live: 'https://codewithadarsh1.github.io/ui-ux',
    image: '/img/ui-ux.png'
  }
];
