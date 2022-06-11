import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { taxiSlice } from '../store/slice'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(taxiSlice.actions, dispatch)
}
