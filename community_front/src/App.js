import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./data/useData";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
// import CartPage from "./components/CartPage";
// import PaymentPage from "./components/PaymentPage";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/UserPage";
import AddItemPage from "./pages/AddItemPage";
import EditItemPage from "./pages/EditItemPage";
import DeleteItemPage from "./pages/DeleteItemPage";
import MyItemPage from "./pages/MyItemPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import DeleteCategoryPage from "./pages/DeleteCategoryPage";
import EditCategoryPage from "./pages/EditCategoryPage";

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
              <Route path="/product/:id" element={<ProductPage />} />
              {/* <Route path="/cart" component={CartPage} /> */}
              {/* <Route path="/payment" component={PaymentPage} /> */}
              <Route
                path="/myreframery/purchase-records/order-details"
                element={<OrderPage />}
              />
              <Route path="/user-profile" element={<UserPage />} />
              <Route path="/add-new-item" element={<AddItemPage />} />
              <Route path="/edit-item" element={<EditItemPage />} />
              <Route path="/delete-item" element={<DeleteItemPage />} />
              <Route path="/my-item" element={<MyItemPage />} />
              <Route path="/add-category" element={<AddCategoryPage />} />
              <Route path="/delete-category" element={<DeleteCategoryPage />} />
              <Route path="/edit-category" element={<EditCategoryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
}
