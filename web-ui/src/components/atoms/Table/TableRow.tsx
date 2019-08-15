import React from 'react'
import styles from './Table.module.scss'
import AuxProps from '../../models/AuxProps'

interface TableRowProps extends AuxProps{
    selected?: boolean
}

const TableRow = (props: TableRowProps) => {
    const selected = props.selected == null ? '' : 'is-selected';
    return (
        <tr className={styles[selected]}>
            {props.children}
        </tr>
    );
};

export default TableRow;
