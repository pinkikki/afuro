import React from 'react'
import styles from './Table.module.scss'
import AuxProps from '../../models/AuxProps'

const Table = (props: AuxProps) => {
    return (
        <table className={`${styles.table} ${styles["is-hoverable"]} ${styles["is-fullwidth"]} ${styles["is-striped"]}`}>
            {props.children}
        </table>
    );
};

export default Table;
