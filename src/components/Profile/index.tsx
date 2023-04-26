import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { api } from '../../lib/axios'

import github from '../../assets/svg/github.svg'
import githubBrands from '../../assets/svg/github-brands.svg'
import buildingSolid from '../../assets/svg/building-solid.svg'
import userGroupSolid from '../../assets/svg/user-group-solid.svg'

import { Avatar, ContentText, Footer, Header, Info, ProfileContainer } from './styles'

interface UserProfile{
    avatar_url: string | undefined,
    login: string | undefined,
    url: string | undefined,
    followers?: string | undefined,
    company?: string | undefined,
    name?: string | undefined,
}

export function Profile({avatar_url, login}: UserProfile){
    const [userInfo, setUserInfo] = useState<UserProfile>();

    async function fetchUserInfo(){
    
        const name = "Lourenso-sofecia";

        try {
            const response = await api.get(`users/${name}`);
            setUserInfo(response.data);
        }
        catch (error) {
            console.error("Erro ao obter os usuários:", error);
            <div>
                ERRO, NA API
            </div>
        }        
    }
    useEffect(()=>{
        fetchUserInfo();
    }, [])

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
                            {userInfo?.name ? userInfo?.name : "Lourenso-sofecia"}
                        </span>
                    </Info>
                    <Info>
                        <img src={buildingSolid} alt="" />
                        <span>
                            {userInfo?.company ? userInfo?.company : "WithOut Company"}
                        </span>
                    </Info>
                    <Info>
                        <img src={userGroupSolid} alt="" />
                        <span>
                            {userInfo?.followers && typeof userInfo.followers === "number" ? (
                                userInfo.followers > 1 ? (
                                `${userInfo.followers} seguidores`
                                ) : (
                                `${userInfo.followers} seguidor`
                                )
                            ) : (
                                "Seguidor não disponível"
                            )}
                        </span>

                    </Info>
                </Footer>
            </div>
        </ProfileContainer>
    )
}