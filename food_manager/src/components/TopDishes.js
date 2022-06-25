import {
    TopDishesBackground,
    StyledTitle,
    TopDishItemSpan,
    RestaurantTitle,
} from "./CustomStyle";
import React, { useState, useEffect } from "react";
import axios from "axios";

function TopDishes(props) {
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(() => {
        getRestaurantsData();
    }, []);
    const getRestaurantsData = async () => {
        try {
            const getRestaurantsData = await axios.get(
                "http://localhost:5000/api/restaurant"
            );
            const loadedData = getRestaurantsData.data;
            setRestaurantData(loadedData);
            // return loadedData;
        } catch (err) {
            console.log(err.message);
        }
    };
    // setRestaurantData(getRestaurants());
    const data = restaurantData.map((op, index) => (
        <>
            <TopDishItemSpan
                key={index}
                image={require(`./images/img${index}.webp`)}
            >
                <RestaurantTitle key={`title${index}`}>{op}</RestaurantTitle>
            </TopDishItemSpan>
        </>
    ));
    return (
        <>
            <StyledTitle key="title">
                Top Rated Restaurants Near You
            </StyledTitle>
            <TopDishesBackground key="topDish">{data}</TopDishesBackground>
        </>
    );
}

export default TopDishes;
