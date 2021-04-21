import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
// import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import BookIcon from '@material-ui/icons/Book';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SidebarData=[
    {
        title: 'Home',
        icon: <HomeIcon/>,
        link:"/home"
    },
    // {
    //     title: 'Browse',
    //     icon: <CategoryIcon/>,
    //     link: "/browse"
    // },
    {
        title: 'Reading',
        icon: <BookIcon/>,
        link: "/reading"
    },
    {
        title: 'Writing',
        icon: <CreateIcon />,
        link: "/writing"
    },
    {
        title:'Sign Out',
        icon: <ExitToAppIcon/>,
        link: "/signout"
    },
]


 
