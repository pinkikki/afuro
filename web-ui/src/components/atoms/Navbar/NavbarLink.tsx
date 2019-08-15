import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";

const NavbarLink = (props: AuxProps) => {

    return (
        <div className={styles['navbar-link']}>
            {props.children}
        </div>
    );
};

export default NavbarLink;
