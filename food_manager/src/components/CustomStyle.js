import styled from "styled-components";

const StyledTitle = styled.div`
    font-size: 0.88rem;
    font-weight: 400;
    background-color: #ced0ce;
    padding: 0.5rem calc(2.1rem + 2vw);
    margin-bottom: 1rem;
    color: #4f5d75;
`;
const HeaderBackground = styled.div`
    border-bottom: 0.5px solid rgba(115, 119, 123, 0.4);
    height: 3rem;
    width: 100%;
    background-color: #2d3142;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: calc(0.7rem + 1vw) calc(2.1rem + 2vw);
    justify-content: space-between;
`;
const HeaderTitle = styled.span`
    font-size: calc(0.8rem + 0.4vw);
    color: #f1eee9;
    font-weight: 500;
`;

const HeaderLink = styled.span`
    font-size: calc(0.65rem + 0.3vw);
    color: #f1eee9;
    font-weight: 300;
    padding: 1.5rem;
`;

const StoreLink = styled.span`
    font-size: calc(0.6rem + 0.3vw);
    color: White;
    font-weight: 500;
    padding: 0.4rem 0.7rem;
    background: #ee8156;
    border-radius: 24px;
`;

const RecipeIndexBackground = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #4f5d75;
    color: white;
    width: 100%;
    min-height: 2rem;
    flex-wrap: wrap;
`;

const RecipeCategory = styled.span``;

const TopDishesBackground = styled.div`
    /* border-bottom: 0.5px solid rgba(115, 119, 123, 0.4); */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 1rem;
    flex-wrap: wrap;
    padding-bottom: 0.5rem;
`;
const TopDishItemSpan = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    width: calc(7rem + 12vw);
    height: calc(6rem + 6.5vh);
    margin: 1rem 0.5rem;
    padding: 0.5rem 1rem 0 1rem;
    border: 0.5px solid rgba(115, 119, 123, 0.4);
    border-radius: 6px;
    font-size: 1rem;
    background: url(${(props) => props.image}) no-repeat 100% 100%;
    background-size: cover;
    position: relative;
    margin-top: 1rem;
`;

const RestaurantTitle = styled(StyledTitle)`
    position: absolute;
    top: calc(-0.7rem - 1vh);
    right: 5px;
    background: rgba(255, 255, 255, 0.9);
    color: black;
    z-index: 2;
    border-radius: 8px;
    font-weight: 500;
    min-width: calc(1rem + 0.7vw);
    padding: 0.25rem calc(0.8rem + 0.8vw);
`;

const RestaurantPageHeader = styled(StyledTitle)`
    min-height: 3rem;
    font-size: calc(1.5rem + 1.2vw);
    color: white;
`;

const FoodItemDiv = styled.div`
    display: flex;
    padding: 0.6rem 1.5rem;
    width: 95%;
    height: 5rem;
    margin: auto;
    background: #f5f1e3;
    color: #515d75;
    justify-content: center;
`;

const FoodOtherItemsSpan = styled.span``;

export {
    FoodOtherItemsSpan,
    FoodItemDiv,
    RestaurantPageHeader,
    RestaurantTitle,
    HeaderBackground,
    HeaderTitle,
    HeaderLink,
    StoreLink,
    RecipeIndexBackground,
    RecipeCategory,
    TopDishesBackground,
    TopDishItemSpan,
    StyledTitle,
};
