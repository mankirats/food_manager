import React from "react";
import {
    TopDishesBackground,
    StyledTitle,
    TopDishItemSpan,
} from "./CustomStyle";
function TopDishes(props) {
    return (
        <>
            <StyledTitle>Top Rated Restaurants Near You</StyledTitle>
            <TopDishesBackground>
                <TopDishItemSpan>mkmklm</TopDishItemSpan>
                <TopDishItemSpan>mkmklm</TopDishItemSpan>
                <TopDishItemSpan>mkmklm</TopDishItemSpan>
                <TopDishItemSpan>mkmklm</TopDishItemSpan>
                <TopDishItemSpan>mkmklm</TopDishItemSpan>
                <TopDishItemSpan>mkmklm</TopDishItemSpan>
                <TopDishItemSpan>mkmklm</TopDishItemSpan>
            </TopDishesBackground>
        </>
    );
}

export default TopDishes;
