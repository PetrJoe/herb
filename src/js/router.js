export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPath = window.location.pathname;
    
    // Handle navigation
    window.addEventListener('popstate', () => this.handleRoute());
    document.addEventListener('click', (e) => {
      if (e.target.matches('a') && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const url = new URL(e.target.href);
        this.navigate(url.pathname);
      }
    });
  }

  async handleRoute() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes['/'];
    const content = await route();
    document.querySelector('main').innerHTML = content;
    this.currentPath = path;
    
    // Update title
    const pageTitle = path === '/' ? 'Home' : path.split('/')[1].charAt(0).toUpperCase() + path.split('/')[1].slice(1);
    document.title = `${pageTitle} - Herb Recommendations`;
    
    // Update header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      const { renderHeader } = await import('../components/header.js');
      headerPlaceholder.innerHTML = renderHeader(pageTitle);
    }
  }

  navigate(path) {
    if (this.currentPath !== path) {
      window.history.pushState({}, '', path);
      this.handleRoute();
    }
  }
}