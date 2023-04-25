import { PostInfo } from "../../components/PostInfo";
import { Content, TextLink, Text, Footer } from "./styles";

export function Post (){
    return (
        <main>
            <PostInfo />
            <Content>
                <Text>
                    Programming languages all have built-in data structures, but these often differ 
                    from one language to another. This article attempts to list the built-in data 
                    structures available in JavaScript and what properties they have. These can 
                    be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </Text>
                
                <TextLink to = "/">
                    Dynamic typing
                </TextLink>

                <Text>
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript 
                    are not directly associated with any particular value type, and any variable 
                    can be assigned and re-assigned values of all types:

                </Text>
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