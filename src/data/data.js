// sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
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

export const CardData = [
  {
    title:"sales",
    color:{
      backGround:'linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5'
    },
    barValue:60,
    value:'25, 970',
    img:UilUsdSquare,
    series:[
      {
        name:'sales',
        data:[31 ,40 ,28 ,51 ,42 ,109 ,100],
      }
    ]
  },
  {
    title:"Revenue",
    color:{
      backGround:'linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5'
    },
    barValue:70,
    value:'25, 970',
    img:UilUsdSquare,
    series:[
      {
        name:'Revenue',
        data:[31 ,40 ,28 ,51 ,42 ,109 ,100],
      }
    ]
  },
  {
    title:"Expenses",
    color:{
      backGround:'linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5'
    },
    barValue:79,
    value:'25, 970',
    img:UilUsdSquare ,
    series:[
      {
        name:'Expenses',
        data:[31 ,40 ,28 ,51 ,42 ,109 ,100],
      }
    ]
  },
]