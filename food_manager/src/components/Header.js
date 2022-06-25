import React from "react";
import {
    HeaderBackground,
    HeaderTitle,
    HeaderLink,
    StoreLink,
} from "./CustomStyle.js";
import { Link } from "react-router-dom";
function Header(props) {
    return (
        <>
            <HeaderBackground>
                <Link to="/">
                    <HeaderTitle>foodManager</HeaderTitle>
                </Link>
                <div>
                    {/* <HeaderLink>Food Recipes</HeaderLink> */}
                    <StoreLink>
                        &nbsp;&nbsp;&nbsp;View Order&nbsp;&nbsp;&nbsp;
                    </StoreLink>
                </div>
            </HeaderBackground>
        </>
    );
}

export default Header;
