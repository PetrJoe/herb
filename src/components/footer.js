export function renderFooter() {
  return `
    <footer class="bg-green-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; ${new Date().getFullYear()} Herb Recommendations. All rights reserved.</p>
      </div>
    </footer>
  `;
}