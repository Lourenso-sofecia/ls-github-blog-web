import { useParams } from "react-router-dom";
import { PostInfo } from "../../components/PostInfo";
import { Content, TextLink, Text, Footer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface PublicationProps{
    title?: string;
    created_at?: string;
    body?: string;
}

export function Post (){

    const { number } = useParams();
    const [publications, setPublications] = useState<PublicationProps>();
    
    const name = "lourenso-sofecia";
    const repo = "ls-github-blog-web";

    async function fetchPublications(query?: string){
        try {
            const response = await api.get(`repos/${name}/${repo}/issues/${number}`);
            setPublications(response.data);
            console.log(publications, "publicationsee");

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
        console.log(publications, "publicationse");
    }, [])
    
    return (
        <main>
            <PostInfo
                title={publications?.title}
            />
            <Content>
                <Text>
                {publications?.body}
                    
                </Text>
                {/*
                    <TextLink to = "/">
                        Dynamic typing
                    </TextLink>

                    <Text>
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript 
                        are not directly associated with any particular value type, and any variable 
                        can be assigned and re-assigned values of all types:

                    </Text>
                */}
                <Footer>
                    <div>
                        let foo =  42;   // foo is now a number
                    </div>
                    <div>
                        foo = ‘bar’;    // foo is now a string
                    </div>
                    <div>
                        foo = true;     // foo is now a boolean
                    </div>
                </Footer>
            </Content>
        </main>
    )
}