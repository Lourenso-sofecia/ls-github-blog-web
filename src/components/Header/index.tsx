import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderContent, Logo  } from "./styles";
import logo from '../../assets/svg/logo.svg';
import effectLeft from '../../assets/svg/effectLeft.svg';
import effectRight from '../../assets/svg/effectRight.svg';

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={effectLeft} alt="" />
                </div>
                <NavLink to="/" title="home">
                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>
                </NavLink>
                <div>
                    <img src={effectRight} alt="" />
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}