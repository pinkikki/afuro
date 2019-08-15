import React from 'react'
import styles from './Table.module.scss'
import AuxProps from '../../models/AuxProps'

const TableFooter = (props: AuxProps) => {
    return (
        <tfoot>
            {props.children}
        </tfoot>
    );
};

export default TableFooter;
