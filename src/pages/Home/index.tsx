import { NavLink } from "react-router-dom";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { Article, CardsContainer, StyledNavLink } from "./styles";

export function Home (){
    return (
        <main>
            <Profile />
            <Article>
                <h4>Publicações</h4>
                <p>6 publicações</p>
            </Article>
            <SearchForm />
            <CardsContainer>
                <StyledNavLink to="/post" title="post">
                    <Card />
                </StyledNavLink>
                    <Card />
                <NavLink to="/post" title="post">
                    <Card />
                </NavLink>
                <NavLink to="/post" title="post">
                    <Card />
                </NavLink>
                <NavLink to="/post" title="post">
                    <Card />
                </NavLink>
                <NavLink to="/post" title="post">
                    <Card />
                </NavLink>
            </CardsContainer>

        </main>
    )
}