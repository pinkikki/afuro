import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";
import {Link} from "react-router-dom";

interface NavbarItemProps extends AuxProps{
   to: string
}
const NavbarItem = (props: NavbarItemProps) => {

    return (
        <Link className={styles['navbar-item']} to={props.to}>
            {props.children}
        </Link>
    );
};

export default NavbarItem;
