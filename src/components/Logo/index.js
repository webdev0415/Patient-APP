import React from 'react';
import { Logo, LogoContainer } from './styles';

const LogoComponent = ({width}) => {
	return (
		<LogoContainer>
			<Logo width={width}/>
		</LogoContainer>
		)
}
export default LogoComponent;