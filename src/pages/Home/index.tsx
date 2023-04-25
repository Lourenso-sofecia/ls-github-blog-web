import { Link, NavLink } from "react-router-dom";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { Article, CardsContainer, SearchFormContainer, StyledNavLink } from "./styles";
import { useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PublicationContext } from "../../contexts/PublicationContext";


interface Users{
    userName: string;
    avatar_url: string,
    login: string,
    url: string,
    followers: string,
}
interface PublicationProps{
    number?: number;
    title?: string;
    created_at?: string;
    body?: string;
}
export function Home (){
    const { publications } = useContext(PublicationContext)
    const [users, setUsers] = useState<Users>();
    const [valueSearched, setValueSearched] = useState("");

    
    const name = "lourenso-sofecia";
    const repo = "ls-github-blog-web";

    async function fetchUsers(){
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
    }, [])

    const filtered = valueSearched ? publications.filter((item: PublicationProps) => item?.body?.includes(valueSearched)) : publications;

    console.log("filtered", filtered, "filteredss");


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
                <p>{publications?.[0]?.number} publicações</p>
            </Article>

            <SearchFormContainer>
                <input 
                    type="text" 
                    placeholder="Buscar conteúdo" 
                    value={valueSearched}
                    onChange={(event)=>setValueSearched(event?.target?.value)}
                />
            </SearchFormContainer>
            {
                publications.length ?
                    <>
                        {
                            filtered.length ? (
                                
                                <CardsContainer>
                                    {
                                        
                                        filtered.map(publication =>{
                                            return(
                                                <StyledNavLink key={publication?.number} to={`/post/${publication?.number}`}>
                                                    <Card 
                                                        key ={publication?.number}
                                                        body ={publication?.body}
                                                        title={publication?.title}
                                                    />
                                                </StyledNavLink>
                                            )
                                        })
                                    }
                                </CardsContainer>
                            ) : 
                            <div>
                                <h2>Nenhum Resultado encontrado!</h2>
                            </div>
                        }
                    </>
                :
                    <div>
                        <h2>
                            Sem item no Issues
                        </h2>
                    </div>
            }

        </main>
    )
}