CraveBite 🍔
Your Cravings, Delivered.

CraveBite is a responsive food-ordering website built with React.js for the CSCI426 Advanced Web Programming course (Phase 1). It lets users explore restaurants, search and filter options, view restaurant-specific menus, and manage a shopping cart through a simple, modern interface.
Live Project
- Website: https://cravebite-app.vercel.app/
- GitHub: https://github.com/MelissaHalabi/CraveBite
Features
- Home: Welcome section, restaurant search, and food-category shortcuts.
- Restaurants: Browse eight sample restaurants, search by name or cuisine, and filter by category.
- Menus: View menu items, prices, and images for each restaurant; add items to the cart.
- Cart: View selected items, quantities, and total cost; remove items and display a checkout confirmation.
- About Us: Learn about the CraveBite concept and purpose.
- Contact Us: Submit a frontend contact form and see a confirmation message.
- Responsive layout: Navigation, cards, and footer designed for desktop and smaller screens.
Technologies
- React.js (functional components and hooks)
- JavaScript, HTML, and CSS
- React Router DOM for page navigation
- Git and GitHub for version control
- Vercel for deployment
React Concepts Used
The project uses useState to manage searches, filters, forms, and cart items; useNavigate, useParams, and useSearchParams for navigation and route data; and JavaScript array methods such as .map(), .filter(), .find(), and .reduce() to display and manage data.
Run Locally
1. Clone the repository:git clone https://github.com/MelissaHalabi/CraveBite.git
2. Open the React app directory:cd CraveBite/cravebite-app
3. Install dependencies:npm install
4. Start the development server:npm start
5. Visit http://localhost:3000.

Phase 1 Scope
CraveBite is a frontend demonstration using sample restaurant and menu data. The checkout button displays a confirmation rather than processing payment; the contact form does not send email; and cart contents are stored in React state and may reset on refresh. Backend services, authentication, and persistent orders are not part of this implementation.
