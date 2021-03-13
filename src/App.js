import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./data/useData";
import { useSelector } from "react-redux";
import NotFound from "./components/NotFound";
import ItemsPage from "./pages/ItemsPage";
import UserPage from "./pages/MyProfilePage";
import MyItemPage from "./pages/MyItemPage";
import UpdateBalancePage from "./pages/AdminSearchUserPage";
import OverviewPage from './pages/AdminOverviewPage';
import AwaitingPage from './pages/AdminUnvalidatedUserPage';
import CreateAdminPage from './pages/AdminCreateAdminPage';
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
import Landing from "pages/Landing";
import MyProfilePage from "./pages/MyProfilePage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";
import MoreItemsPage from "pages/MoreItemsPage";
import SearchResultPage from "pages/SearchResultPage";
import DevelopmentTeamPage from "pages/DevelopmentTeamPage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import TermsPage from "pages/TermsPage";

export default function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <DataProvider>
        <main className="main">
            <Routes>
              {/* {userInfo ? null : <Route path="/" element={<WellcomePage />} />} */}
              <Route path="/" element={<WellcomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/development-team" element={<DevelopmentTeamPage />} />

              <Route path="/signin" element={<Signin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/:community/:category" element={<ItemsPage />} />
              <Route path="/:community/:category/:start/:end" element={<MoreItemsPage />} />
              <Route path="/search" element={<SearchResultPage />} />

              <Route path="/:community/:category/:id" element={<ItemDetails />} />

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
              <Route path="/admin/my-profile" element={<MyProfilePage />} />
              <Route path="/admin/administrator-management" element={<AdminManagePage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    </DataProvider>
  );
}
