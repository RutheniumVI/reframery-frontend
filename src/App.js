import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./data/useData";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";

import NotFound from "./components/NotFound";

import DetailsProductPage from "./pages/DetailsProductPage";
import DetailsServicePage from "./pages/DetailsServicePage";
import DetailsExpertisePage from "./pages/DetailsExpertisePage";
import HomePage from "./pages/HomePage";
// import CartPage from "./components/CartPage";
// import PaymentPage from "./components/PaymentPage";
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
import ValidateUserPage from './pages/AdminValidateUserPage';
import CreateAdminPage from './pages/AdminCreateAdminPage';
import AdminProfilePage from "./pages/AdminProfilePage";
import AdminManagePage from "./pages/AdminManagePage";

import Signin from './pages/SigninPage'
import Register from './pages/RegisterPage'

import WalletPage from './pages/WalletPage'
import TransHistPage from './pages/TransHistPage'
import WellcomePage from "./pages/WellcomePage";
import { useSelector } from "react-redux";



export default function App() {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  return (
    <DataProvider>
      <div className="container">
      {userInfo ? (<Header />) : null}
        <main className="main">
        {userInfo ? (userInfo.admin ? null : userInfo.superAdmin ? null : <Sidebar />) : null}
          <div className="content">
            <Routes>
            <Route path="/" element={<WellcomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/product/:id" element={<DetailsProductPage />} />
              <Route path="/service/:id" element={<DetailsServicePage />} />
              <Route path="/expertise/:id" element={<DetailsExpertisePage />} />
              {/* <Route path="/cart" component={CartPage} /> */}
              {/* <Route path="/payment" component={PaymentPage} /> */}
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
              <Route path="/admin/validated-users" element={<ValidateUserPage />} />
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
