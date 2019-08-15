import React from 'react'
import styles from './Table.module.scss'

interface TableDataProps {
    value: string
}

const TableData = (props: TableDataProps) => {
    return (
        <td>
            {props.value}
        </td>
    );
};

export default TableData;
