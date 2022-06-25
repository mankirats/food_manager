import React from "react";
import RecipeIndex from "./RecipeIndex";
import TopDishes from "./TopDishes";
import RecentlyAddedRecipes from "./RecentlyAddedRecipes";

function HomePage(props) {
    return (
        <>
            <RecipeIndex key="recipeIndex"></RecipeIndex>
            <TopDishes key="topDishes"></TopDishes>
            <RecentlyAddedRecipes key="recentlyAddedRecipes"></RecentlyAddedRecipes>
        </>
    );
}

export default HomePage;
