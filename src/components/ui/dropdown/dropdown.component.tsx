import { FC, Fragment } from 'react'

import { StyledDropdown, BackDrop } from './dropdown.styles'

interface DropdownProps {
	isOpen: boolean
	close: () => void
	items: string[]
	onSelect: (item: string) => void
}

const Dropdown: FC<DropdownProps> = (props) => {
	const { items, isOpen, close, onSelect } = props

	const handleClick = (item: string) => {
		onSelect(item)
		close()
	}

	return (
		isOpen && (
			<Fragment>
				<BackDrop onClick={close} />
				<StyledDropdown>
					{items.map((item) => (
						<button key={item} onClick={() => handleClick(item)}>
							{item}
						</button>
					))}
				</StyledDropdown>
			</Fragment>
		)
	)
}

export default Dropdown
