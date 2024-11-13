import { Router } from './router.js';
import { getHomeContent, getCatalogContent, getAboutContent, getContactContent } from './pages.js';
import { renderNavigation } from '../components/navigation.js';
import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

// Initialize common elements
document.addEventListener('DOMContentLoaded', () => {
  // Insert navigation
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = renderNavigation();
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = renderFooter();
  }

  // Initialize router
  const router = new Router({
    '/': getHomeContent,
    '/catalog/': getCatalogContent,
    '/about/': getAboutContent,
    '/contact/': getContactContent
  });

  // Handle initial route
  router.handleRoute();
});