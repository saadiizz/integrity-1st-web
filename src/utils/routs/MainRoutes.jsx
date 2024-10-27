import { Stack } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../../screens/ErrorPage";
import LoginScreen from "../../screens/auth/LoginScreen";
import RegistrationScreen from "../../screens/auth/RegistrationScreen";
import VerifyPhoneScreen from "../../screens/auth/VerifyPhoneScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import ForgotPasswordOTPScreen from "../../screens/auth/ForgotPasswordOTPScreen";
import RecoverPasswordScreen from "../../screens/auth/RecoverPasswordScreen";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "../../components/layout/Layout";
import DashboardScreen from "../../screens/profile/dashboard/DashboardScreen";
import GarageScreen from "../../screens/profile/garage/GarageScreen";
import AppointmentScreen from "../../screens/profile/appointment/AppointmentScreen";
import ServiceHistoryScreen from "../../screens/profile/garage/ServiceHistoryScreen";
import AccountScreen from "../../screens/profile/account/AccountScreen";
import AllOffersScreen from "../../screens/profile/dashboard/AllOffersScreen";
import PersonalInfo from "../../screens/profile/account/PersonalInfo";
import Membership from "../../screens/profile/account/Membership";
import AppointmentHistory from "../../screens/profile/account/Appointment-History";
import ChangePassword from "../../screens/profile/account/change-password";
import { Toaster } from "react-hot-toast";
import AllAppointmentsScreen from "../../screens/profile/appointment/AllAppointmentsScreen";
import ServiceDueScreen from "../../screens/profile/garage/ServiceDueScreen";
import RecommendedScreen from "../../screens/profile/garage/RecommendedScreen";
import AllBlogsScreen from "../../screens/profile/blogs/AllBlogsScreen";

const routes = createBrowserRouter([
  //auth section
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <LoginScreen />,
  },
  {
    path: "/register",
    errorElement: <ErrorPage />,
    element: <RegistrationScreen />,
  },
  {
    path: "/verify",
    errorElement: <ErrorPage />,
    element: <VerifyPhoneScreen />,
  },
  {
    path: "/signup",
    errorElement: <ErrorPage />,
    element: <SignUpScreen />,
  },
  {
    path: "/password",
    errorElement: <ErrorPage />,
    element: <ForgotPasswordScreen />,
  },
  {
    path: "/password/otp",
    errorElement: <ErrorPage />,
    element: <ForgotPasswordOTPScreen />,
  },
  {
    path: "/password/recover",
    errorElement: <ErrorPage />,
    element: <RecoverPasswordScreen />,
  },
  //Dashboard
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <DashboardScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "dashboard/all-offers",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AllOffersScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "dashboard/all-blogs",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AllBlogsScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  //Garage
  {
    path: "/garage",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <GarageScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/garage/service-history/:id",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <ServiceHistoryScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/garage/service-due/:id",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <ServiceDueScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/garage/recommended/:id",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <RecommendedScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  //Appointment
  {
    path: "/appointment",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AppointmentScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/appointment/all-appointments",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AllAppointmentsScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  //Account
  {
    path: "/account",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AccountScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/account/personal-info",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <PersonalInfo />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/account/membership",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <Membership />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/account/appointment-history",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AppointmentHistory />
        </Layout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/account/change-password",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <ChangePassword />
        </Layout>
      </PrivateRoutes>
    ),
  },
]);
const MainRoutes = () => {
  return (
    <>
      <Stack height={"100%"}>
        <RouterProvider router={routes} />
        <Toaster />
      </Stack>
    </>
  );
};

export default MainRoutes;
