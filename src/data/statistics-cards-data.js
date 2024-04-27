import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Today's check in",
    value: "45",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Today's Users",
    value: "230",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
    
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
    {
    color: "gray",
    icon: UserPlusIcon,
    title: "Available rooms",
    value: "200",
    footer: {
      color: "text-red-500",
      value: "/50",
      label: "",
    },
  },
    {
    color: "gray",
    icon: UserPlusIcon,
    title: "Single sharing",
    value: "20/35",
    footer: {
      color: "text-red-500",
      value: "5000dz",
      label: "/ day",
    },
  },
   {
    color: "gray",
    icon: UserPlusIcon,
    title: "Double sharing",
    value: "5/35",
    footer: {
      color: "text-red-500",
      value: "6000dz",
      label: "/ day",
    },
  },
   

];

export default statisticsCardsData;
