import React from "react";
import axios from "axios";
import {
    TopDishesBackground,
    StyledTitle,
    TopDishItemSpan,
} from "./CustomStyle";
async function TopDishes(props) {
    const restaurantsData = await axios.get("localhost:5000/api/restaurant");

    const topRestaurants = restaurantsData.map((op) => (
        <TopDishItemSpan>{op}</TopDishItemSpan>
    ));
    return (
        <>
            <StyledTitle>Top Rated Restaurants Near You</StyledTitle>
            <TopDishesBackground>{restaurantsData}</TopDishesBackground>
        </>
    );
}

export default TopDishes;
