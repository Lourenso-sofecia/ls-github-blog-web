
import back from '../../assets/svg/back.svg'

import githubLook from '../../assets/svg/github-look.svg'
import githubBrands from '../../assets/svg/github-brands.svg'
import commentSolid from '../../assets/svg/comment-solid.svg'
import calendarDaySolid from '../../assets/svg/calendar-day-solid.svg'

import { ContentText, Footer, Header, Info, PostInfoContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PublicationProps{
    title?: string;
    created_at?: string;
    updated_at?: Date;
    body?: string;
    comments_url?: string;
}

export function PostInfo({ title, updated_at, comments_url }: PublicationProps){
    return (
        <PostInfoContainer>
            <div>
                <Header>
                    <NavLink to="/" title="home">
                        <span>
                            <img src={back} alt="" />
                        </span>
                    </NavLink>
                    <NavLink to="https://github.com/lourenso-sofecia" title="home">
                        <span>
                            <img src={githubLook} alt="" />
                        </span>
                    </NavLink>
                </Header>
                <ContentText>
                    {title}
                </ContentText>
                <Footer>
                    <Info>
                        <img src={githubBrands} alt="" />
                        <span>
                            {"Lourenso-sofecia"}
                        </span>
                    </Info>
                    <Info>
                        <img src={calendarDaySolid} alt="" />
                        <span>
                        {updated_at && formatDistanceToNow(new Date(updated_at), {
                            addSuffix: true,
                            locale: ptBR,
                            })}
                        </span>
                    </Info>
                    <Info>
                        <img src={commentSolid} alt="" />
                        <span>
                            {comments_url} comentários
                        </span>
                    </Info>
                    
                </Footer>
            </div>
        </PostInfoContainer>
    )
}