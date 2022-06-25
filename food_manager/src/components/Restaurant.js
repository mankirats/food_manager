import React from "react";
import {
    RestaurantPageHeader,
    FoodItemDiv,
    FoodOtherItemsSpan,
} from "./CustomStyle";

function Restaurant(props) {
    return (
        <>
            <RestaurantPageHeader>
                {props.restaurant || "Chipotale"}
            </RestaurantPageHeader>
            <FoodItemDiv>
                Food
                <FoodOtherItemsSpan>Calories</FoodOtherItemsSpan>
                <FoodOtherItemsSpan>Burritoss</FoodOtherItemsSpan>
            </FoodItemDiv>
        </>
    );
}

export default Restaurant;
