import { NavLink } from "react-router-dom";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { Article, CardsContainer, StyledNavLink } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";


interface Users{
    userName: string;
    avatar_url: string,
    login: string,
    url: string,
    followers: string,
}

export function Home (){

    const [users, setUsers] = useState<Users>();
    const name = "lourenso-sofecia";
    

    async function fetchUsers(query?: string){
        try {
            const response = await api.get(`users/${name}`);
            setUsers(response.data);
        }
        catch (error) {
            console.error("Erro ao obter os usuários:", error);
            <div>
                ERRO, Na API
            </div>
        }
        
    }

    useEffect(()=>{

        fetchUsers();
        console.log(users, "users");
    }, [])

    return (
        <main>
            <Profile
                avatar_url= {users?.avatar_url}
                login = {users?.login}
                url = {users?.url}
                followers_url= {users?.followers}
                
            />
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