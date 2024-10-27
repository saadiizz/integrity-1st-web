import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import LinkedIn from "../assets/images/LinkedIn.svg";
import RefferVector from "../assets/images/RefferVector.svg";
import Person from "../assets/images/person.svg";
import Dashboard from "../assets/images/dashboard.svg";
import Garage from "../assets/images/garage.svg";
import Calender from "../assets/images/calender.svg";
import night from "../assets/images/night.svg";
import morning from "../assets/images/morning.svg";

export const sideBarLIst = [
  { icon: <DashboardIcon />, text: "Dashboard", path: "/dashboard" },
  { icon: <DirectionsCarRoundedIcon />, text: "Garage", path: "/garage" },
  {
    icon: <CalendarMonthIcon />,
    text: "Book Appointment",
    path: "/appointment",
  },
  { icon: <PersonIcon />, text: "Account", path: "/account" },
  { icon: <RssFeedIcon />, text: "Blog", path: "/dashboard/all-blogs" },
  { icon: <LogoutRoundedIcon />, text: "Logout", path: "/" },
];

export const footerNavigation = [
  "Contact us",
  "Security",
  "Cookie Policy",
  "Manage Cookie Preferences",
  "Become an affiliate",
  "Site map",
  "About us",
];

export const footerSocialIcons = [
  { icon: <img src={Instagram} alt="" />, value:'instaUrl' },
  { icon: <img src={LinkedIn} alt="" />, value:'linkedInUrl' },
  { icon: <img src={Facebook} alt="" />, value:'facebookUrl' },
];

export const footerPrivacyTerm = ["Privacy", "Terms and Conditions"];

export const timeSheet = [
  { day: "Monday", startTime: "7:00 am", endTime: "11:00 pm" },
  { day: "Tuesday", startTime: "7:00 am", endTime: "11:00 pm" },
  { day: "Wednesday", startTime: "7:00 am", endTime: "11:00 pm" },
  { day: "Thursday", startTime: "7:00 am", endTime: "11:00 pm" },
  { day: "Friday", startTime: "7:00 am", endTime: "11:00 pm" },
  { day: "Saturday", startTime: "7:00 am", endTime: "11:00 pm" },
  { day: "Sunday", startTime: "close", endTime: "close" },
];

export const profileMenuList = [
  { icon: <img alt="" src={Dashboard} />, text: "Dashboard" },
  { icon: <img alt="" src={Garage} />, text: "Garage" },
  { icon: <img alt="" src={Calender} />, text: "Book Appointment" },
  { icon: <img alt="" src={Person} />, text: "Account" },
  { icon: <img alt="" src={RefferVector} />, text: "Refer a Friend" },
];

export const serviceTasks = [
  "Oil Change",
  "Brake Pads",
  "New Battery",
  "Auids Changesd",
  "Other Maintanance",
  "Power Setup",
  "Power Setup",
];

export const timeSlots = [
  "08:00 am",
  "09:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
  "05:00 pm",
  "06:00 pm",
];
export const edgedSlots = [
  {
    img: morning,
    label: "Early Bird",
    value: "Commercial Serv buy Executive book.",
    time: "07:00 am",
  },
  {
    img: night,
    label: "After hours Dropoff",
    value: "Commercial Serv buy Executive book.",
    time: "07:00 pm",
  },
];

export const userPersonalDetails = [
  { label: "Full Name", value: "Debra Doe" },
  { label: "Email Addres", value: "Debra Doe" },
  { label: "Phone Number", value: "Debra Doe" },
  { label: "Shop Details", value: "Debra Doe" },
];
