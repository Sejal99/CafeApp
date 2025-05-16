☕ Coffee Shop App

A modern Coffee Shop mobile application built using React Native, with state management powered by Zustand, Google Maps for location tracking, and Razorpay for secure payments.

🚀 Features

Coffee Menu: Browse a wide selection of coffee options.

Google Maps Integration: Locate nearby coffee shops effortlessly.

Secure Payments: Use Razorpay for safe and seamless transactions.

Cart Management: Add items to the cart and manage orders easily.

Search Functionality: Quickly find your favorite coffee items.

Order History: Keep track of all your past orders.

User Authentication (Optional): Secure user login and registration.

📋 Prerequisites

Node.js: >= 14.x

npm or yarn

React Native CLI

Android Studio or Xcode (for emulator/simulator)

⚡ Installation

Clone the repository:

git clone https://github.com/Sejal99/Zustand.git
cd Zustand

Install dependencies:

npm install
# or
yarn install

Set up environment variables:

Create a .env file in the root directory.

Add your API keys:

GOOGLE_MAPS_API_KEY=your_google_maps_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Start the Metro bundler:

npm start
# or
yarn start

Run the application:

For Android:

npm run android
# or
yarn android

For iOS:

npm run ios
# or
yarn ios

📁 Project Structure

Zustand/
├── android/
├── ios/
├── src/
│   ├── components/ (Reusable UI components)
│   ├── screens/ (App screens)
│   ├── store/ (Zustand state management)
│   └── utils/ (Utility functions and API services)
├── App.tsx
├── .env (Environment variables)
├── package.json
└── ...

🎮 Usage

Explore the coffee menu and add items to your cart.

Use Google Maps to locate nearby coffee shops.

Make secure payments using Razorpay.

Manage and track your order history.

🤝 Contributing

Contributions are welcome! Please fork this repository and create a pull request with your enhancements.
