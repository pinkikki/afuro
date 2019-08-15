import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";

const NavbarMenu = (props: AuxProps) => {

    return (
        <div className={styles['navbar-menu']}>
            {props.children}
        </div>
    );
};

export default NavbarMenu;
