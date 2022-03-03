import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,	
	TopLine,
	Heading,
	Subtitle,
	BtnWrap	
} from './InfoElements'

import { Button } from '../ButtonElement';

const InfoSection = (props) => {

	const {
		lightBg,
		id,
		imgStart,
		topLine,
		lightText,
		headLine,
		darkText,
		description,
		buttonLabel,
		img,
		alt,
		primary,
		dark,
		dark2,
		buttonTo
	} = props

	return (

		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<Column2>
						<img src={img} alt={alt} width='100%' />
					</Column2>
					<Column1>
						<TopLine>{topLine}</TopLine>
						<Heading lightText={lightText}>{headLine}</Heading>
						<Subtitle darkText={darkText}>{description}</Subtitle>
						<BtnWrap>
							<Button onClick={() => window.location.href = buttonTo}
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
								primary={primary ? 1 : 0}
								dark={dark ? 1 : 0}
								dark2={dark2 ? 1 : 0}

							>
								{buttonLabel}
							</Button>
						</BtnWrap>
					</Column1>

				</InfoRow>
			</InfoWrapper>
		</InfoContainer>


	);
}

export default InfoSection;
