import React from "react";
import Header from "./Header";
import RecipeIndex from "./RecipeIndex";
import TopDishes from "./TopDishes";
import RecentlyAddedRecipes from "./RecentlyAddedRecipes";

function HomePage(props) {
    return (
        <>
            <Header></Header>
            <RecipeIndex></RecipeIndex>
            <TopDishes></TopDishes>
            <RecentlyAddedRecipes></RecentlyAddedRecipes>
        </>
    );
}

export default HomePage;
