import "./App.css";
import Header from "./components/Header";
import RecipeIndex from "./components/RecipeIndex";
import TopDishes from "./components/TopDishes";
import RecentlyAddedRecipes from "./components/RecentlyAddedRecipes";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <RecipeIndex></RecipeIndex>
            <TopDishes></TopDishes>
            <RecentlyAddedRecipes></RecentlyAddedRecipes>
        </div>
    );
}

export default App;
