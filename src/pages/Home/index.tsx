import { Link, NavLink } from "react-router-dom";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { Article, CardsContainer, SearchFormContainer, StyledNavLink } from "./styles";
import { useContext, useState } from "react";
import { PublicationContext } from "../../contexts/PublicationContext";
import { PublicationProps } from "../../@types/publicationProps";


export function Home (){
    const { publications, } = useContext(PublicationContext);
    const [valueSearched, setValueSearched] = useState("");

    const user = publications[0]?.user;
   
    const filtered = valueSearched
    ? publications.filter((item: PublicationProps) =>
        (item?.body?.toLowerCase().includes(valueSearched.toLowerCase())) ||
        (item?.title?.toLowerCase().includes(valueSearched.toLowerCase()))
      )
    : publications;
  
    return (
        <main>
            <Profile
                avatar_url= {user?.avatar_url}
                login = {user?.login}
                url = {user?.url}              
            />
            <Article>
                <h4>Publicações</h4>
                <p>{publications.length ? publications?.[0]?.number : 0} publicações</p>
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
                                                        body ={publication?.body}
                                                        title={publication?.title}
                                                        updated_at={publication?.updated_at}
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
                            Sem item no Issues desse Repo
                        </h2>
                    </div>
            }

        </main>
    )
}