const categories = () => {
  fetch(`https://fakestoreapi.com/products/categories`)
    .then((res) => res.json())
    .then((data) => displayCategories(data));
};

let allProductsData = [];

const allProducts = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((products) => {
      allProductsData = products;
      displayProducts(products);
      showTopRatedProducts(products);
    });
};

const openProductModal = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      const modal = document.getElementById("my_modal_2");
      const title = document.getElementById("modal-title");
      const image = document.getElementById("modal-image");
      const description = document.getElementById("modal-description");
      const price = document.getElementById("modal-price");
      const rating = document.getElementById("modal-rating");

      title.textContent = product.title;
      image.src = product.image;
      image.alt = product.title;
      description.textContent = product.description;
      price.textContent = `$${product.price}`;
      rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;

      modal.showModal();
    });
};

// show all Categories
let currentCategory = "All";

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-btn");
  categoryContainer.innerHTML = "";

  // All button
  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  setActiveClass(allBtn, "All");

  allBtn.addEventListener("click", () => {
    currentCategory = "All";
    displayProducts(allProductsData);
    displayCategories(categories);
  });

  categoryContainer.append(allBtn);

  // all category buttons
  for (let category of categories) {
    const btn = document.createElement("button");
    btn.textContent = category;
    setActiveClass(btn, category);

    btn.addEventListener("click", () => {
      currentCategory = category;

      const filtered = allProductsData.filter(
        (product) => product.category === category,
      );

      displayProducts(filtered);
      displayCategories(categories);
    });

    categoryContainer.append(btn);
  }
};

// active class for category buttons
const setActiveClass = (btn, category) => {
  btn.className = "btn btn-outline rounded-md h-8 transition";

  if (category === currentCategory) {
    btn.classList.remove("btn-outline");
    btn.classList.add("bg-indigo-600", "text-white");
  }
};

// Show all products
const displayProducts = (products) => {
  const productContainer = document.getElementById("products-card");
  productContainer.innerHTML = "";

  for (let product of products) {
    // console.log("this is a", product);
    const productCard = document.createElement("div");
    productCard.innerHTML = `
        <div
            class="md:max-w-sm lg:max-w-[350px] bg-white rounded-xl overflow-hidden border border-gray-200"
          >
            <!-- Product Image -->
            <div class="bg-gray-100 flex items-center justify-center">
              <img
                src=${product.image}
                alt="Backpack"
                class="w-full h-48 object-contain p-4"
              />
            </div>

            <!-- Card Body -->
            <div class="p-5">
              <!-- Top Row -->
              <div class="flex items-center justify-between mb-3">
                <span
                  class="text-xs font-medium bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full"
                >
                  ${product.category}
                </span>

                <div class="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 text-yellow-400 mr-1 mb-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.454a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.377-2.454a1 1 0 00-1.175 0l-3.377 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.075 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.966z"
                    />
                  </svg>
                  <span>${product.rating.rate} (${product.rating.count})</span>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-semibold text-gray-800 mb-2 truncate">
                ${product.title}
              </h3>

              <!-- Price -->
              <p class="text-2xl font-bold text-gray-900 mb-4">$${product.price}</p>

              <!-- Buttons -->
              <div class="flex gap-3">
                <!-- Details Button -->
                <button
                  class="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                  onclick="openProductModal(${product.id})"
                >
                  <i class="fa-regular fa-eye"></i>
                  Details
                </button>

                <!-- Add Button -->
                <button
                  class="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 transition cursor-pointer"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
        `;

    productContainer.append(productCard);
  }
};



categories();
allProducts();
