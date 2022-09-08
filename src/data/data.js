// sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

export const SideBarData = [
  {
    icon: <UilEstate />,
    heading: "Dashbaord",
  },
  {
    icon: <UilClipboardAlt />,
    heading: "Orders",
    children: [
      {
        icon: <UilClipboardAlt/>,
        heading: "ffd",
      },
    ],
  },
  {
    icon: <UilUsersAlt/>,
    heading: "Customers",
  },
  {
    icon: <UilPackage />,
    heading: "Product",
  },
  {
    icon: <UilChart />,
    heading: "Analytics",
  },
];
