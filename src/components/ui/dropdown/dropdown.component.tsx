import { FC, Fragment } from 'react'

import { StyledDropdown, BackDrop } from './dropdown.styles'

interface DropdownProps {
	isOpen: boolean
	close: () => void
	items: {
		text: string
		onClick: () => void
	}[]
}

const Dropdown: FC<DropdownProps> = (props) => {
	const { items, isOpen, close } = props

	const closeAfterChooseItem = (onClick: () => void) => {
		close()
		onClick()
	}

	return (
		isOpen && (
			<Fragment>
				<BackDrop onClick={close} />
				<StyledDropdown>
					{items.map((item) => (
						<button key={item.text} onClick={() => closeAfterChooseItem(item.onClick)}>
							{item.text}
						</button>
					))}
				</StyledDropdown>
			</Fragment>
		)
	)
}

export default Dropdown
