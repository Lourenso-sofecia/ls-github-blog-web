import { formatDistanceToNow } from "date-fns";
import { CardContainer, Header } from "./styles";
import { ptBR } from "date-fns/locale";

interface PublicationProps{
    number?: number;
    title?: string;
    created_at?: string;
    updated_at?: Date;
    body?: string; // | undefined | null;
}

export function Card({number, title, body, created_at, updated_at}: PublicationProps){
    
    const maxLength = 181; // Número máximo de caracteres a serem exibidos
    let truncatedText = "";
    if (body) {
      truncatedText = body.length > maxLength ? body.slice(0, maxLength) + "..." : body;
    }

    return(
        <CardContainer>
            <Header>
                <h3>
                    {title}
                </h3>
                <span >
                    {updated_at && formatDistanceToNow(new Date(updated_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                </span>
            </Header>
            <p>
                {truncatedText}
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