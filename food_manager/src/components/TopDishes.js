import {
    TopDishesBackground,
    StyledTitle,
    TopDishItemSpan,
} from "./CustomStyle";
import React, { useState, useEffect } from "react";
import axios from "axios";
import img2 from "../images/img2.webp";

function TopDishes(props) {
    const [restaurantData, setRestaurantData] = useState([
        "Chipotle",
        "Panera",
        "Cookout",
    ]);
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
        <TopDishItemSpan
            key={index}
            image={require(`../images/img${index}.webp`)}
        >
            {op}
        </TopDishItemSpan>
    ));
    return (
        <>
            <StyledTitle>Top Rated Restaurants Near You</StyledTitle>
            <TopDishesBackground>{data}</TopDishesBackground>
            {/* <img
                src={require("../images/img2.webp")}
                alt=""
                srcset=""
                width="100%"
                height="100%"
            /> */}
        </>
    );
}

export default TopDishes;
