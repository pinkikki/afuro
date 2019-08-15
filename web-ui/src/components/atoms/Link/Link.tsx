import React from 'react'
import AuxProps from "../../models/AuxProps";
import {Link} from "react-router-dom";

interface LinkProps extends AuxProps {
   to: string
}

const RouterLink = (props: LinkProps) => {
    return (
        <Link to={props.to}>
            {props.children}
        </Link>
    )
};

export default RouterLink
