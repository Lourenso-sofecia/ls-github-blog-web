import { CardContainer, Header } from "./styles";

interface PublicationProps{
    number?: number;
    title?: string;
    comments_url?: string;
    created_at?: string;
}

export function Card({number, title, comments_url, created_at}: PublicationProps){
    return(
        <CardContainer>
            <Header>
                <h3>
                    {title}
                </h3>
                <span>
                    {created_at}Há 1 dia
                </span>
            </Header>
            <p>
                Programming languages all have built-in data structures, but these often differ from one 
                language to another. This article attempts to list the built-in data structures 
                available in...
            </p>
        </CardContainer>
    )
}

/**
 * Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean
 */