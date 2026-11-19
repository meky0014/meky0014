/**
 * Top Navigation Bar Configuration
 *
 * Customize the links displayed in the primary header masthead.
 */

export interface NavItem {
  /** Navigation item label */
  title: string;
  /** Destination route or external URL */
  url: string;
}

export const navigation: NavItem[] = [
  { title: 'Background', url: '/background/' },
  { title: 'Projects', url: '/projects/' },
  //{ title: 'Teaching', url: '/teaching/' },
  { title: 'Skills', url: '/skills/' },
  //{ title: 'Blog Posts', url: '/posts/' },
  { title: 'CV', url: '/cv/' },
  { title: 'Guide', url: '/markdown/' },
];
