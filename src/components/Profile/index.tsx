import avatar from '../../assets/svg/avatar.svg'
import github from '../../assets/svg/github.svg'
import githubBrands from '../../assets/svg/github-brands.svg'
import buildingSolid from '../../assets/svg/building-solid.svg'
import userGroupSolid from '../../assets/svg/user-group-solid.svg'

import { Avatar, ContentText, Footer, Header, Info, ProfileContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface UserProfile{
    avatar_url: string | undefined,
    login: string | undefined,
    url: string | undefined,
    followers_url: string | undefined,
}

export function Profile({avatar_url, login, url, followers_url}: UserProfile){
    return (
        <ProfileContainer>
            <Avatar>
                <img 
                    src={avatar_url} 
                    alt=""
                    width="148"
                 />
            </Avatar>
            <div>
                <Header>
                    <h2>{login}</h2>
                    <NavLink to="https://github.com/lourenso-sofecia" title="home">
                        <span>
                            <img src={github} alt="" />
                        </span>
                    </NavLink>
                </Header>
                <ContentText>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.
                </ContentText>
                <Footer>
                    <Info>
                        <img src={githubBrands} alt="" />
                        <span>
                            cameronwll
                        </span>
                    </Info>
                    <Info>
                        <img src={buildingSolid} alt="" />
                        <span>
                            Rocketseat
                        </span>
                    </Info>
                    <Info>
                        <img src={userGroupSolid} alt="" />
                        <span>
                            {followers_url} seguidores
                        </span>
                    </Info>
                </Footer>
            </div>
        </ProfileContainer>
    )
}