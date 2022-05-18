import styled from "styled-components";

const HeaderBackground = styled.div`
    height: 4rem;
    width: 100%;
    background-color: #1c2431;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: calc(1rem + 1vw);
    justify-content: space-between;
`;
const HeaderTitle = styled.span`
    font-size: calc(0.8rem + 0.4vw);
    color: #fdfdfd;
    font-weight: 500;
`;

const HeaderLink = styled.span`
    font-size: calc(0.7rem + 0.3vw);
    color: #bbbcbd;
    font-weight: 500;
    padding: 1rem;
`;

const StoreLink = styled.span`
    font-size: calc(0.7rem + 0.3vw);
    color: #bbbcbd;
    font-weight: 500;
    padding: 0.6rem;
    background: #e21e2b;
    border-radius: 24px;
`;
export { HeaderBackground, HeaderTitle, HeaderLink, StoreLink };
