import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";

const NavbarBrand = (props: AuxProps) => {

    return (
        <div className={styles['navbarBrand']}>
            {props.children}
        </div>
    );
};

export default NavbarBrand;
