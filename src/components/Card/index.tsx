import { CardContainer, Header } from "./styles";

export function Card(){
    return(
        <CardContainer>
            <Header>
                <h3>
                    JavaScript data types and data structures
                </h3>
                <span>
                    Há 1 dia
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