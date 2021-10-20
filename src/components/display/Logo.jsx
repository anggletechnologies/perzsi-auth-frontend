import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../assets/logo192.png'
import useQuery from '../../hooks/useQuery';
import genLink from '../../utils/genLink';


const LogoC = styled.img`
    max-height: 3rem;
`

const Logo = props =>{
    const {next} = useQuery()
    return <Link to={genLink.login(next?{next}:{})}><LogoC src={LogoImage} /></Link>
}


export default Logo