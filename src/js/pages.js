export async function getHomeContent() {
  return `
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Welcome to Our Herb Guide</h2>
      <p class="text-gray-700">Discover the perfect herbs for your needs. Our expert recommendations will help you find the right herbs for cooking, medicinal purposes, or gardening.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Featured Herbs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold mb-2">Basil</h3>
          <p class="text-sm text-gray-600">Perfect for Italian cuisine and pesto.</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold mb-2">Rosemary</h3>
          <p class="text-sm text-gray-600">Great for roasted meats and potatoes.</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold mb-2">Lavender</h3>
          <p class="text-sm text-gray-600">Used in aromatherapy and teas.</p>
        </div>
      </div>
    </section>
  `;
}

export async function getCatalogContent() {
  return `
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Basil</h3>
        <p class="text-sm text-gray-600 mb-2">Perfect for Italian cuisine and pesto.</p>
        <p class="text-sm font-medium text-green-600">Growing difficulty: Easy</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Rosemary</h3>
        <p class="text-sm text-gray-600 mb-2">Great for roasted meats and potatoes.</p>
        <p class="text-sm font-medium text-green-600">Growing difficulty: Medium</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Thyme</h3>
        <p class="text-sm text-gray-600 mb-2">Excellent for soups and stews.</p>
        <p class="text-sm font-medium text-green-600">Growing difficulty: Easy</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Sage</h3>
        <p class="text-sm text-gray-600 mb-2">Traditional herb for poultry dishes.</p>
        <p class="text-sm font-medium text-green-600">Growing difficulty: Medium</p>
      </div>
    </div>
  `;
}

export async function getAboutContent() {
  return `
    <section class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
      <p class="text-gray-700 mb-4">
        We are passionate herb enthusiasts dedicated to sharing our knowledge and love for herbs with the world. Our team consists of experienced gardeners, herbalists, and culinary experts.
      </p>
      <p class="text-gray-700 mb-4">
        Founded in 2023, we aim to make herb growing and usage accessible to everyone, from beginners to experienced gardeners.
      </p>
      <h2 class="text-2xl font-semibold mb-4 mt-8">Our Mission</h2>
      <p class="text-gray-700">
        To provide accurate, helpful information about herbs and their uses, helping people make informed decisions about growing and using herbs in their daily lives.
      </p>
    </section>
  `;
}

export async function getContactContent() {
  return `
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <form class="space-y-4" id="contact-form">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
        </div>
        <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  `;
}