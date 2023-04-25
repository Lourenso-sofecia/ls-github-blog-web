import avatar from '../../assets/svg/avatar.svg'
import github from '../../assets/svg/github.svg'
import githubBrands from '../../assets/svg/github-brands.svg'
import buildingSolid from '../../assets/svg/building-solid.svg'
import userGroupSolid from '../../assets/svg/user-group-solid.svg'

import { Avatar, ContentText, Footer, Header, Info, ProfileContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Profile(){
    return (
        <ProfileContainer>
            <Avatar>
                <img src={avatar} alt="" />
            </Avatar>
            <div>
                <Header>
                    <h2>Cameron Williamson</h2>
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
                            32 seguidores
                        </span>
                    </Info>
                </Footer>
            </div>
        </ProfileContainer>
    )
}