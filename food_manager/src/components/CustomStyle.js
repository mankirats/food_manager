import styled from "styled-components";

const StyledTitle = styled.div`
    font-size: 0.88rem;
    font-weight: 400;
    background-color: #f1eee9;
    padding: 0.5rem calc(2.1rem + 2vw);
    margin-bottom: 1rem;
`;
const HeaderBackground = styled.div`
    border-bottom: 0.5px solid rgba(115, 119, 123, 0.4);
    height: 3rem;
    width: 100%;
    background-color: #191919;
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
    background: #f69000;
    border-radius: 24px;
`;

const RecipeIndexBackground = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #53b1b1;
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
    /* background-color: rgba(236, 236, 236, 0.2); */
    border-radius: 6px;
    font-size: 1rem;
    background: url(${(props) => props.image}) no-repeat 100% 100%;
    background-size: cover;
    position: relative;

    /* filter: blur(1.5px); */
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

export {
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
