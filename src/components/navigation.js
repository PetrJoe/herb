export function renderNavigation() {
  return `
    <nav class="bg-green-700 text-white p-2">
      <div class="container mx-auto flex gap-4">
        <a href="/" class="hover:text-green-200">Home</a>
        <a href="/catalog/" class="hover:text-green-200">Catalog</a>
        <a href="/about/" class="hover:text-green-200">About</a>
        <a href="/contact/" class="hover:text-green-200">Contact</a>
      </div>
    </nav>
  `;
}