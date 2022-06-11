import { useTypedSelector } from '../../../hooks/useTypedSelector'
import Button from '../../ui/Button'
import { optionsList } from './data'

const OrderButton = () => {
	const { travelTime, selectedOption } = useTypedSelector(state => state.taxi)

	const orderHandler = () => {
		alert(
			`🚕 Thanks for order! You ordered ${
				optionsList.find(o => o._id === selectedOption)?.title
			}! ✨`
		)
	}

	return (
		<Button
			title='Order'
			bgColor='#ffe847'
			color='#111'
			cb={orderHandler}
			isDisabled={!travelTime && !selectedOption}
		/>
	)
}

export default OrderButton
