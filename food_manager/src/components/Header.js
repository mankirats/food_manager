import React from "react";
import {
    HeaderBackground,
    HeaderTitle,
    HeaderLink,
    StoreLink,
} from "./CustomStyle.js";
function Header(props) {
    return (
        <>
            <HeaderBackground>
                <HeaderTitle>foodManager</HeaderTitle>
                <div>
                    <HeaderLink>Food Recipes</HeaderLink>
                    <StoreLink>Store</StoreLink>
                </div>
            </HeaderBackground>
        </>
    );
}

export default Header;
