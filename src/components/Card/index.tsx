import { CardContainer, Header } from "./styles";

interface PublicationProps{
    number?: number;
    title?: string;
    created_at?: string;
    body?: string;
}

export function Card({number, title, body, created_at}: PublicationProps){
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
                {body}
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