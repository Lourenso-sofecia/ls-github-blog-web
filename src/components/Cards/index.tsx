import { Card } from "../Card";
import { CardContainer} from "./styles";

export function Cards(){
    return(
        <CardContainer>
            <Card />
            <Card />
        </CardContainer>
    )
}

/**
 * Dynamic typing
 * JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

 * let foo = 42; // foo is now a number
 * foo = 'bar'; // foo is now a string
 * foo = true; // foo is now a boolean
 * 
 */