import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";

const NavbarList = (props: AuxProps) => {

    return (
        <div className={styles['navbar-dropdown']}>
            {props.children}
        </div>
    );
};

export default NavbarList;
