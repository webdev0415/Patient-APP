import styled from 'styled-components';
import LogoImg from '../../assets/images/logo.png'

export const Logo = styled.img.attrs({
  src: LogoImg,
  alt: "logo",
})`
  width: ${(props)=>props.width};
  height: ${(props)=>props.height};
`
export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 1em;
`