import React from "react";
import { HashRouter as Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./data/useData";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import NotFound from './components/NotFound'

import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
// import CartPage from "./components/CartPage";
// import PaymentPage from "./components/PaymentPage";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import AddCategoryPage from "./pages/AddCategoryPage";
import AddNewItemPage from "./pages/AddNewItemPage";

export default function App() {
  return (
    <DataProvider>
      <div className="container">
        <Header />
        <main className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" component={ProductPage} />
              {/* <Route path="/cart" component={CartPage} /> */}
              {/* <Route path="/payment" component={PaymentPage} /> */}
              <Route
                path="/myreframery/purchase-records/order-details"
                element={<OrderPage />}
              />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <AddCategoryPage />
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
}
