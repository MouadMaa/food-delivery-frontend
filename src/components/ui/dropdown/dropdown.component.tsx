import { FC, Fragment } from 'react'

import { StyledDropdown, DropdownBackDrop } from './dropdown.styles'

interface DropdownProps {
	items: string[]
	show: boolean
	onHide: () => void
	onSelect: (item: string) => void
}

const Dropdown: FC<DropdownProps> = (props) => {
	const { items, show, onHide, onSelect } = props

	const handleClick = (item: string) => {
		onSelect(item)
		onHide()
	}

	return (
		show && (
			<Fragment>
				<DropdownBackDrop onClick={onHide} />
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
