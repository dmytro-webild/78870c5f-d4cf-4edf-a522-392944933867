export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/order', label: 'Order', pageFile: 'ProductsPage' },
  { path: '/products', label: 'Products', pageFile: 'ProductsPage' },
  { path: '/contact', label: 'Contact', pageFile: 'ContactPage' },
  { path: '/checkout', label: 'Checkout', pageFile: 'CheckoutPage' },
];
