import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";

const NavbarDropdown = (props: AuxProps) => {

    return (
        <div className={`${styles['navbar-item']} ${styles['has-dropdown']} ${styles['is-hoverable']} }`}>
            {props.children}
        </div>
    );
};

export default NavbarDropdown;
