import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Users{
    userName: string;
    avatar_url: string,
    login: string,
    url: string,
    followers: string,
}
interface PublicationUser{
    number?: number;
    title?: string;
    created_at?: string;
    updated_at?: Date;

    body?: string;
    user?: Users;
    formattedDate?: string | "";
}

interface PublicationContextType {
    publications: PublicationUser [];
}

interface PublicationProviderProps {
    children: ReactNode;
}

export const PublicationContext = createContext({} as PublicationContextType);

export function PublicationProvider({ children}: PublicationProviderProps){

    const [publications, setPublications] = useState<PublicationUser[]>([]);
    const [publicationsPost, setPublicationsPost] = useState<PublicationUser[]>([]);

    const { number } = useParams();
    const n = number;

    const name = "lourenso-sofecia";
    const repo = "ls-github-blog-web";

    async function fetchPublications(){
        try {
            const response = await api.get(`repos/${name}/${repo}/issues`);
            setPublications(response.data);
            
        }
        catch (error) {
            console.error("Erro ao obter os usuários:", error);
            <div>
                ERRO, Na API
            </div>
        }        
    }
    /*
    function publicationsPostNumber(){
        const numberFilter = n;
            
            // Função de callback para filtragem
            const filterByNumber = (item:PublicationUser) => item?.number === numberFilter;
            
            const listFilted = publications?.filter(filterByNumber);
            
            console.log(listFilted);
        
        ****A ideia é não fazer mais requisição para buscar as publicações por id (number)****
    }
    */

    
  
    useEffect(()=>{
        //publicationsPostNumber();
        fetchPublications();
    }, [])


    return(
        <PublicationContext.Provider value={{publications,}}>
            {children}
        </PublicationContext.Provider>
    )
}