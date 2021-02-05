import { FC, Fragment } from 'react'

import { StyledDropdown, DropdownBackDrop } from './dropdown.styles'
import { DropdownSvg } from './dropdown.svg'

interface DropdownProps {
	items: string[]
	isOpen: boolean
	onHide: () => void
	onSelect: (item: string) => void
	selectedItem?: string
	withCheckMark?: boolean
}

const Dropdown: FC<DropdownProps> = (props) => {
	const { items, isOpen, onHide, onSelect, selectedItem, withCheckMark = false } = props

	const handleClick = (item: string) => {
		onSelect(item)
		onHide()
	}

	return (
		isOpen && (
			<Fragment>
				<DropdownBackDrop onClick={onHide} />
				<StyledDropdown>
					{items.map((item) => (
						<button key={item} onClick={() => handleClick(item)}>
							<span>{item}</span>
							{withCheckMark && item === selectedItem && <DropdownSvg />}
						</button>
					))}
				</StyledDropdown>
			</Fragment>
		)
	)
}

export default Dropdown
