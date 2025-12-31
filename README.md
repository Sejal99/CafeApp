# ☕ Coffee Shop App

This project is a mobile application built using React Native, providing a comprehensive solution for users to navigate through various screens, manage their cart, and interact with favorite items. The application features a robust navigation system utilizing React Navigation and leverages Zustand for efficient state management.
It includes a counter store, user store, cart store, and favorites store, ensuring a seamless and scalable user experience.
Additionally, the app implements rate limiting to control request frequency, enhance performance, and protect backend services from excessive or abusive API calls.

## 🚀 Features

* **Coffee Menu:** Browse a wide selection of coffee options.
* **Google Maps Integration:** Locate nearby coffee shops effortlessly.
* **Secure Payments:** Use Razorpay for safe and seamless transactions.
* **Cart Management:** Add items to the cart and manage orders easily.
* **Search Functionality:** Quickly find your favorite coffee items.
* **Order History:** Keep track of all your past orders.
* **User Authentication (Optional):** Secure user login and registration.

---

## 📋 Prerequisites

* **Node.js:** >= 14.x
* **npm or yarn**
* **React Native CLI**
* **Android Studio or Xcode** (for emulator/simulator)

---

## ⚡ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sejal99/Zustand.git
   cd Zustand
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   * Create a `.env` file in the root directory.
   * Add your API keys:

     ```bash
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret
     ```

4. **Start the Metro bundler:**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run the application:**

   * For Android:

     ```bash
     npm run android
     # or
     yarn android
     ```

   * For iOS:

     ```bash
     npm run ios
     # or
     yarn ios
     ```

---

## 📁 Project Structure

```
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
```

---

## 📸 Screenshots
<img width="1080" height="2400" alt="Screenshot_1767166102" src="https://github.com/user-attachments/assets/8d9bddeb-90cf-4da8-9703-6ccfbed9131e" />

<img width="1080" height="2400" alt="Screenshot_1767166381" src="https://github.com/user-attachments/assets/9d71b611-b4f4-44f9-a921-6157b69c7a20" />

<img width="1080" height="2400" alt="Screenshot_1767166773" src="https://github.com/user-attachments/assets/93cf18de-f41e-4b43-8456-c5b7d11fc8c1" />

<img width="1080" height="2400" alt="Screenshot_1767166926" src="https://github.com/user-attachments/assets/98ea4961-9baf-4007-8ebb-1704495e663e" />

<img width="1080" height="2400" alt="Screenshot_1767166931" src="https://github.com/user-attachments/assets/8cdf7b62-4f5c-4347-9b4d-69181a667944" />

<img width="1080" height="2400" alt="Screenshot_1767167022" src="https://github.com/user-attachments/assets/1392da38-5d49-4a91-928d-fce66eadb044" />

<img width="720" height="1600" alt="Screenshot_1767163179" src="https://github.com/user-attachments/assets/9193bfd7-41c2-4610-b04b-ef6ccb9b4eab" />


## 🎮 Usage

* Explore the coffee menu and add items to your cart.
* Use Google Maps to locate nearby coffee shops.
* Make secure payments using Razorpay.
* Manage and track your order history.

---

## 🤝 Contributing

To contribute to the project, please submit a pull request with a detailed description of the changes made. Ensure that the code is well-structured, readable, and follows the project's coding standards.

---


