import React from 'react';
// import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import BookIcon from '@material-ui/icons/Book';
import * as AiIcons from 'react-icons/ai';
import {CgLogOut} from 'react-icons/cg'
import LogOutBtn from '../auth/LogOutBtn';
export const SidebarData=[
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Browse',
        icon: <CategoryIcon/>,
        link: "/browse",
        cName: 'nav-text'
    },
    {
        title: 'Reading',
        icon: <BookIcon/>,
        link: "/reading",
        cName: 'nav-text'

    },
    {
        title: 'Editor',
        path: "/editor",
        icon: <CreateIcon />,
        cName: 'nav-text'
    },
    {
        title: <LogOutBtn/> ,
        icon: <CgLogOut/>,
        cName: 'nav-text'
    }
]


 
