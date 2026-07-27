# 🛍️ MiniStore

MiniStore is a frontend e-commerce project that I built mainly to understand and practice **Redux Toolkit** in a real React application.

Instead of only learning Redux Toolkit concepts separately, I wanted to use them in a project where multiple components actually need to share and update the same data.

The project includes products, authentication, cart, wishlist, filtering, sorting, and a simple checkout flow.

---

## 🚀 Tech Stack

I used the following technologies:

* React.js
* Redux Toolkit
* React Redux
* React Router
* Axios
* React Hook Form
* Tailwind CSS
* Lucide React
* LocalStorage
* DummyJSON API

---

## 📦 Product API

Products are fetched from the DummyJSON Products API.

The store currently contains products from categories such as:

* Beauty
* Groceries
* Furniture
* Fragrances

I used **Axios** with Redux Toolkit's `createAsyncThunk()` to fetch the products and store them inside Redux.

---

## ✨ Features

### Authentication

Users can register and log in to MiniStore.

Since this is a frontend-only project, registered users and login information are handled using LocalStorage.

The currently logged-in user is also stored in Redux so that different components can access the authentication state.

The checkout page is protected, which means a user needs to log in before completing checkout.

---

### Products

Products are fetched from an external API and stored inside the Redux store.

The product page includes:

* Product cards
* Search
* Category filtering
* Price sorting
* Rating sorting
* Loading state
* Error handling
* Add to cart
* Add to wishlist

Search, category, and sorting are handled locally because they are only required by the product page.

---

### 🛒 Cart

The cart is managed using a separate Redux slice.

Users can:

* Add products to cart
* Increase quantity
* Decrease quantity
* Remove products
* Clear the complete cart
* See total cart items
* See total price

If a product is already in the cart, the Add to Cart button changes into quantity controls.

The cart is also stored in LocalStorage so refreshing the browser doesn't remove the products.

The Navbar cart count automatically updates whenever the cart changes.

---

### ❤️ Wishlist

Users can save products they like to their wishlist.

The wishlist supports:

* Add to wishlist
* Remove from wishlist
* Clear wishlist
* Add wishlist products to cart
* Dynamic wishlist count in Navbar

Wishlist data is also stored in LocalStorage.

---

### 🔍 Search, Filter & Sort

The product page allows users to find products more easily.

Users can search products by name, filter them by category, and sort them based on price or rating.

I kept this state inside the Product page using `useState()` instead of Redux because it doesn't need to be shared across the application.

This was also a useful part of the project for understanding when Redux is actually needed and when normal React state is enough.

---

### 💳 Checkout

The checkout page displays the products currently available in the cart along with the total amount.

Users enter their shipping information using a form built with React Hook Form.

The checkout is only a simulation because this project doesn't have a backend or real payment integration.

After placing an order, the cart is cleared from Redux and LocalStorage.

---

## 🧠 Redux Toolkit

Redux Toolkit is the main reason I built this project.

I divided the global state into separate slices so that each feature has its own responsibility.

```text
Redux Store
│
├── auth
│   └── Logged-in user
│
├── product
│   ├── Products
│   ├── Loading
│   └── Error
│
├── cart
│   └── Cart items
│
└── wishlist
    └── Wishlist items
```

Some important Redux Toolkit concepts I used are:

* `configureStore()`
* `createSlice()`
* `createAsyncThunk()`
* `useDispatch()`
* `useSelector()`
* Reducers
* Actions
* `extraReducers`
* Async API handling

---

## 🔄 Redux Data Flow

One thing this project helped me understand better is how Redux data actually moves through an application.

For normal actions:

```text
User Action
     ↓
Component
     ↓
dispatch(action)
     ↓
Reducer
     ↓
Redux Store
     ↓
useSelector()
     ↓
UI Updates
```

For fetching products:

```text
Product Page
     ↓
dispatch(fetchProducts())
     ↓
createAsyncThunk()
     ↓
Axios API Request
     ↓
DummyJSON
     ↓
fulfilled / rejected
     ↓
Redux Store
     ↓
Product Page Updates
```

---

## 📁 Project Structure

The project is organized by separating reusable components, pages, Redux features, layouts, routes, and hooks.

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── Login.jsx
│   └── Register.jsx
│
├── features/
│   ├── auth/
│   │   └── authSlice.js
│   │
│   ├── products/
│   │   └── productSlice.js
│   │
│   ├── cart/
│   │   └── cartSlice.js
│   │
│   └── wishlist/
│       └── wishlistSlice.js
│
├── pages/
│   ├── HomePage.jsx
│   ├── ProductPage.jsx
│   ├── CartPage.jsx
│   ├── WishlistPage.jsx
│   └── CheckoutPage.jsx
│
├── layout/
│   ├── PublicLayout.jsx
│   └── ProtectedLayout.jsx
|   └── GuestLayout.jsx
│
├── hooks/
│   └── useAuthHook.js
│
├── routes/
│   └── AppRoutes.jsx
│
├── store/
│   └── store.js
│
└── App.jsx
```

---

## 💡 What I Learned

Before building MiniStore, I understood Redux Toolkit mostly from a theoretical point of view.

Building this project made concepts like `dispatch`, reducers, slices, selectors, and async thunks much easier to understand.

For example, when a product is added to the cart, I only update the Redux cart state. The Navbar and Cart page automatically receive the updated data because both of them are reading from the same Redux store.

That helped me understand why global state management is useful.

I also learned that **not every state should be stored in Redux**.

Things like authentication, products, cart, and wishlist make sense in Redux because multiple parts of the application need them.

Things like search text, selected category, and sorting only belong to the Product page, so I kept them as local React state.

---

## 🛠️ Challenges I Faced

While building the project, I faced a few issues that helped me understand Redux better.

One challenge was keeping the cart synchronized between Redux and LocalStorage. I wanted the cart to update immediately through Redux but also remain available after refreshing the browser.

Another challenge was handling products that were already in the cart. Instead of adding duplicate products, I had to check the product ID and increase its quantity.

I also had to understand the difference between normal reducers and `extraReducers`. Normal reducers worked well for cart and wishlist actions, while `extraReducers` were useful for handling the pending, fulfilled, and rejected states of `createAsyncThunk()`.

---

## 🔮 Things I Could Add Later

The current version is focused mainly on frontend development and Redux Toolkit.

Some features I could add in the future are:

* Product details page
* Pagination
* Better authentication with a real backend
* User profiles
* Order history
* Real payment integration
* Toast notifications
* Dark mode
* Backend database
* Admin dashboard

---

## ▶️ Running the Project

Clone the project and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

---

## 📌 Note

MiniStore is a learning project and does not use a real backend or payment system.

The main goal of this project was to understand **Redux Toolkit by actually using it in a complete React application** rather than only learning the concepts individually.

---

## 👨‍💻 Author

Built as part of my Redux Toolkit learning and mini-hackathon challenge.
