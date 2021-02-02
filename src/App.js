import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./data/useData";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";

import NotFound from "./components/NotFound";

import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/ProfilePage";
import AddItemPage from "./pages/AddItemPage";
import EditItemPage from "./pages/EditItemPage";
import DeleteItemPage from "./pages/DeleteItemPage";
import MyItemPage from "./pages/MyItemPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import DeleteCategoryPage from "./pages/DeleteCategoryPage";
import EditCategoryPage from "./pages/EditCategoryPage";

import SalePage from './pages/SalePage';
import UpdateBalancePage from "./pages/AdminUpdateUserBalancePage";
import OverviewPage from './pages/AdminOverviewPage';
import AwaitingPage from './pages/AdminAwaitingPage';
import CreateAdminPage from './pages/AdminCreateAdminPage';
import AdminProfilePage from "./pages/AdminProfilePage";
import AdminManagePage from "./pages/AdminManagePage";

import Signin from './pages/SigninPage'
import Register from './pages/RegisterPage'

import WalletPage from './pages/WalletPage'
import TransHistPage from './pages/TransHistPage'
import WellcomePage from "./pages/WellcomePage";
import { useSelector } from "react-redux";
import ItemDetails from "./components/ItemDetails";

import Cart from "pages/Cart";
import AddressForm from "pages/AddressForm";
import Confirm from "pages/Confirm";
import Payment from "pages/Payment";


export default function App() {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  return (
    <DataProvider>
      <div className="container">
      {userInfo ? (<Header />) : null}
        <main className="main">
        {userInfo ? (userInfo.user.admin ? null : userInfo.user.manager ? null : <Sidebar />) : null}
          <div className="content">
            <Routes>
            {userInfo? null: <Route path="/" element={<WellcomePage />} />}
              <Route path="/home" element={<HomePage />} />
              <Route path="/:category/:id" element={<ItemDetails />} />
                            
              <Route path="/cart" element={<Cart />} />
              <Route path="/address-form" element={<AddressForm/>} />
              <Route path="/confirm" element={<Confirm />}　/>
              <Route path="/payment" element={<Payment />} />

              <Route
                path="/myreframery/orders/purchases/purchase-details"
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

              <Route path="/myreframery/orders/sales/sale-details" element={<SalePage />} />
              <Route path="/admin" element={<OverviewPage />} />
              <Route path="/admin/awaiting-validation" element={<AwaitingPage />} />
              <Route path="/admin/update-users-balance" element={<UpdateBalancePage />} />
              <Route path="/admin/create-admin-account" element={<CreateAdminPage />} />
              <Route path="/admin/my-profile" element={<AdminProfilePage />} />
              <Route path="/admin/administrator-management" element={<AdminManagePage />} />

              <Route path="/signin" element={<Signin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/mywallet" element={<WalletPage />} />
              <Route path="/myreframery/records" element={<TransHistPage />} />
            </Routes>
          </div>
        </main>
        {/* {userInfo ?  null : (<Footer />)}         */}
      </div>
    </DataProvider>
  );
}
