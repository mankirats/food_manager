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
