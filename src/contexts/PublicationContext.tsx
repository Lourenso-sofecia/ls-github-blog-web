import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface PublicationUser{
    number?: number;
    title?: string;
    created_at?: string;
    body?: string;
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
    
    const name = "lourenso-sofecia";
    const repo = "ls-github-blog-web";

    async function fetchPublications(query?: string){
        try {
            const response = await api.get(`repos/${name}/${repo}/issues`);
            setPublications(response.data);
            console.log(publications, "publications");

        }
        catch (error) {
            console.error("Erro ao obter os usuários:", error);
            <div>
                ERRO, Na API
            </div>
        }        
    }

    useEffect(()=>{

        fetchPublications();
        console.log(publications, "publications");
    }, [])


    return(
        <PublicationContext.Provider value={{publications}}>
            {children}
        </PublicationContext.Provider>
    )
}