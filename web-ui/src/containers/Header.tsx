import React from 'react'
import Navbar from '../components/atoms/Navbar/Navbar'
import NavbarBrand from '../components/atoms/Navbar/NavbarBrand'
import NavbarItem from '../components/atoms/Navbar/NavbarItem'
import NavbarMenu from "../components/atoms/Navbar/NavbarMenu";
import NavbarStart from "../components/atoms/Navbar/NavbarStart";
import NavbarEnd from "../components/atoms/Navbar/NavbarEnd";
import NavbarDropdown from "../components/atoms/Navbar/NavbarDropdown";
import NavbarLink from "../components/atoms/Navbar/NavbarLink";
import NavbarList from "../components/atoms/Navbar/NavbarList";

const Header = () => {

    var logoStyle = {
        width: '50px',
        height: '50px'
    };
    return (
        <Navbar>
            <NavbarBrand>
                <NavbarItem to='/home'>
                    <img src='./logo.jpg' style={logoStyle}/>
                </NavbarItem>
            </NavbarBrand>
            <NavbarMenu>
                <NavbarStart>
                    <NavbarItem to='/home'>
                        概要
                    </NavbarItem>
                    <NavbarDropdown>
                        <NavbarLink>
                            コポルン
                        </NavbarLink>
                        <NavbarList>
                            <NavbarItem to='/coporuns'>
                                一覧
                            </NavbarItem>
                            <NavbarItem to='/coporuns/1'>
                                詳細
                            </NavbarItem>
                            <NavbarItem to='/coporuns/create'>
                                登録
                            </NavbarItem>
                        </NavbarList>
                    </NavbarDropdown>
                </NavbarStart>
                <NavbarEnd>
                    <NavbarItem to='#'>
                        Log in
                    </NavbarItem>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;