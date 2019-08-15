import React from 'react'
import styles from './Navbar.module.scss'
import AuxProps from "../../models/AuxProps";

const NavbarEnd = (props: AuxProps) => {

    return (
        <div className={styles['navbar-end']}>
            {props.children}
        </div>
    );
};

export default NavbarEnd;
