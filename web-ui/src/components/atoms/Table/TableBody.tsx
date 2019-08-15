import React from 'react'
import AuxProps from '../../models/AuxProps'

const TableBody = (props: AuxProps) => {
    return (
        <tbody>
            {props.children}
        </tbody>
    );
};

export default TableBody;
