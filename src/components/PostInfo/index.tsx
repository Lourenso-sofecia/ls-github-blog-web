
import back from '../../assets/svg/back.svg'

import githubLook from '../../assets/svg/github-look.svg'
import githubBrands from '../../assets/svg/github-brands.svg'
import commentSolid from '../../assets/svg/comment-solid.svg'
import calendarDaySolid from '../../assets/svg/calendar-day-solid.svg'

import { ContentText, Footer, Header, Info, PostInfoContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface PublicationProps{
    title?: string;
    created_at?: string;
    body?: string;
}

export function PostInfo({ title }: PublicationProps){
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
                            cameronwll
                        </span>
                    </Info>
                    <Info>
                        <img src={calendarDaySolid} alt="" />
                        <span>
                            Há 1 dia
                        </span>
                    </Info>
                    <Info>
                        <img src={commentSolid} alt="" />
                        <span>
                            5 comentários
                        </span>
                    </Info>
                    
                </Footer>
            </div>
        </PostInfoContainer>
    )
}