import { useParams } from "react-router-dom";
import { PostInfo } from "../../components/PostInfo";
import { Content, TextLink, Text, Footer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PublicationProps } from "../../@types/publicationProps";
import { PublicationContext } from "../../contexts/PublicationContext";


export function Post (){

    const { number } = useParams();
    const [publications, setPublications] = useState<PublicationProps>();
    //const { publications } = useContext(PublicationContext)
    
    const name = "lourenso-sofecia";
    const repo = "ls-github-blog-web";

    async function fetchPublications(){
        try {
            const response = await api.get(`repos/${name}/${repo}/issues/${number}`);
            setPublications(response.data);

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
    }, [])

    return (
        <main>
            <PostInfo
                title={publications?.title}
                updated_at={publications?.updated_at}
                comments_url={publications?.comments}
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