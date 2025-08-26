import {
  LucideDraftingCompass,
  LucideHatGlasses,
  LucideHome,
  LucideMessageCircle,
  LucideNotebook,
  LucideSearch,
  LucideShoppingBag,
} from 'lucide-react';

export const navItems = [
  { to: '/brands', text: 'Brands', icon: LucideHome },
  { to: '/inspire', text: 'Inspire', icon: LucideSearch },
  {
    to: '/market-intelligence',
    text: 'Market Intelligence',
    icon: LucideShoppingBag,
  },
  { to: '/ad-spend', text: 'Ad Spend', icon: LucideDraftingCompass },
  { to: '/track-band', text: 'Track Band', icon: LucideHatGlasses },
  { to: '/brief-module', text: 'Brief Module', icon: LucideNotebook },
  { to: '/inquire', text: 'Inquire', icon: LucideMessageCircle },
];
