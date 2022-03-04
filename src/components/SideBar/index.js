import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>About Us</SidebarLink>
					<SidebarLink to="roadmap" onClick={toggle}>Roadmap</SidebarLink>
					<SidebarLink to="team" onClick={toggle}>Team</SidebarLink>
					<SidebarLink to="faq" onClick={toggle}>FAQs</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/">Mint: TBD</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
}

export default Sidebar;