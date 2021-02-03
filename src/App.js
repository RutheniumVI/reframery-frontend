import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./data/useData";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import AdminSidebar from './components/AdminSidebar';
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/MyProfilePage";
import MyItemPage from "./pages/MyItemPage";
import UpdateBalancePage from "./pages/AdminUpdateUserBalancePage";
import OverviewPage from './pages/AdminOverviewPage';
import AwaitingPage from './pages/AdminUnvalidatedUserPage';
import CreateAdminPage from './pages/AdminCreateAdminPage';
import AdminProfilePage from "./pages/AdminProfilePage";
import AdminManagePage from "./pages/AdminManagementPage";
import Signin from './pages/SigninPage'
import Register from './pages/RegisterPage'
import WalletPage from './pages/MyWalletPage'
import TransHistPage from './pages/MyHistoryPage'
import WellcomePage from "./pages/WellcomePage";
import ItemDetails from "./pages/ItemDetailsPage";
import Cart from "pages/Cart";
import AddressForm from "pages/AddressForm";
import Confirm from "pages/Confirm";
import Payment from "pages/Payment";
import CreateItemPage from "pages/CreateItemPage";
import Itemspage from "pages/ItemsPage";

export default function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <DataProvider>
      <div className="screen-container">
        {userInfo ? (<div className="header">
          <Header />
        </div>) : null}
        <main className="main">
          {userInfo ? (userInfo.user.admin ? <AdminSidebar /> : userInfo.user.manager ? null : <Sidebar />) : null}
          <div className="pages-content">
            <Routes>
              {userInfo ? null : <Route path="/" element={<WellcomePage />} />}

              <Route path="/:community" element={<HomePage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/:email" element={<Itemspage />} />

              <Route path="/:category/:id" element={<ItemDetails />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/address-form" element={<AddressForm />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path="/payment" element={<Payment />} />


              <Route path="/my-wallet" element={<WalletPage />} />

              <Route path="/my-profile" element={<UserPage />} />

              <Route path="/my-item" element={<MyItemPage />} />
              <Route path="/create-item" element={<CreateItemPage />} />

              <Route path="/my-history" element={<TransHistPage />} />

              <Route path="/admin" element={<OverviewPage />} />
              <Route path="/admin/awaiting-validation" element={<AwaitingPage />} />
              <Route path="/admin/update-users-balance" element={<UpdateBalancePage />} />
              <Route path="/admin/create-admin-account" element={<CreateAdminPage />} />
              <Route path="/admin/my-profile" element={<AdminProfilePage />} />
              <Route path="/admin/administrator-management" element={<AdminManagePage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
}
