import React from 'react'
import styles from './Table.module.scss'
import AuxProps from '../../models/AuxProps'

const TableHeader = (props: AuxProps) => {
    return (
        <thead>
            {props.children}
        </thead>
    );
};

export default TableHeader;
