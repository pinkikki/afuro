import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";

const NavbarStart = (props: AuxProps) => {

    return (
        <div className={styles['navbar-start']}>
            {props.children}
        </div>
    );
};

export default NavbarStart;
