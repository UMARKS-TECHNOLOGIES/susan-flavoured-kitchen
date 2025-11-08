📦 ecommerce-food/
├── 📁 public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/
│   │   ├── products/
│   │   └── categories/
│   └── manifest.json
│
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── data/             # Static JSONs (e.g. sample products.json)
│   │
│   ├── 📁 components/
│   │   ├── ui/               # Reusable UI (mostly from shadcn)
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── layout/           # Layout-level components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SidebarCart.jsx
│   │   │
│   │   ├── shared/           # Smaller reusable blocks
│   │   │   ├── ProductCard.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   └── animations/       # Framer Motion wrappers
│   │       ├── FadeIn.jsx
│   │       ├── SlideUp.jsx
│   │       └── ScaleIn.jsx
│   │
│   ├── 📁 pages/
│   │   ├── Home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── FeaturedMeals.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Menu/
│   │   │   ├── Filters.jsx
│   │   │   ├── MenuList.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Product/
│   │   │   ├── ProductDetails.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Cart/
│   │   │   ├── CartSummary.jsx
│   │   │   ├── CartItem.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Checkout/
│   │   │   ├── CheckoutForm.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── index.jsx
│   │   │
│   │   └── NotFound.jsx
│   │
│   ├── 📁 context/
│   │   └── CartContext.jsx        # if using React context
│
│   ├── 📁 store/
│   │   ├── useCartStore.js        # Zustand store
│   │   ├── useAuthStore.js
│   │   └── useUIStore.js
│
│   ├── 📁 hooks/
│   │   ├── useFetchProducts.js
│   │   ├── useLocalStorage.js
│   │   └── useMediaQuery.js
│
│   ├── 📁 lib/
│   │   ├── api.js                 # Axios or Fetch setup
│   │   ├── helpers.js             # Utility functions
│   │   ├── formatters.js          # formatCurrency, etc.
│   │   ├── constants.js
│   │   └── validations.js
│
│   ├── 📁 styles/
│   │   ├── globals.css
│   │   └── animations.css
│
│   ├── 📁 routes/
│   │   └── AppRoutes.jsx          # React Router setup
│
│   ├── main.jsx
│   ├── App.jsx
│   └── index.css
│
├── .env
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
