import { components, gettingStarted } from '$content/index.js';

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
};

export type SidebarNavItem = NavItem & {
  items: SidebarNavItem[];
};

export const PAGES_NEW: string[] = [];

const topLevelDocs = gettingStarted
  .filter((doc) => doc.path !== 'index')
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((doc) => ({
    title: doc.title,
    href: `/docs/${doc.path}`,
    items: []
  }));

const componentDocs = components
  .filter((doc) => doc.title !== 'Components')
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((doc) => ({
    title: doc.title,
    href: `/docs/${doc.path}`,
    items: []
  }));

export const sidebarNavItems: SidebarNavItem[] = [
  {
    title: 'Start',
    items: [{ title: 'Introduction', href: '/docs', items: [] }, ...topLevelDocs]
  },
  {
    title: 'Components',
    items: componentDocs
  }
];

export const mainNavItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Docs', href: '/docs' },
  { title: 'Components', href: '/docs/components' },
  { title: 'Install', href: '/docs/installation' }
];

export function getFullNavItems(): SidebarNavItem[] {
  return [
    { title: 'Introduction', href: '/docs', items: [] },
    ...topLevelDocs,
    { title: 'Components', href: '/docs/components', items: [] },
    ...componentDocs
  ];
}

const fullNavItems = getFullNavItems();

export function findNeighbors(pathName: string): {
  previous: SidebarNavItem | null;
  next: SidebarNavItem | null;
} {
  const path = pathName.split('?')[0].split('#')[0];
  const index = fullNavItems.findIndex((item) => item.href === path);

  return {
    previous: index > 0 ? fullNavItems[index - 1] : null,
    next: index >= 0 && index < fullNavItems.length - 1 ? fullNavItems[index + 1] : null
  };
}
