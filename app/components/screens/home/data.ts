import economyIcon from '../../../assets/images/options/economy-icon.png'
import comfortIcon from '../../../assets/images/options/comfort-icon.png'
import comfortPlusIcon from '../../../assets/images/options/comfort-plus-icon.png'
import businessIcon from '../../../assets/images/options/business-icon.png'
import premierIcon from '../../../assets/images/options/premier-icon.png'

interface IList {
	_id: string
	title: string
	img: string
	multiplier: number
}

export const optionsList: IList[] = [
	{
		_id: 'Ya-economy-439',
		title: 'Economy',
		img: economyIcon.src,
		multiplier: 46,
	},
	{
		_id: 'Ya-comfort-541',
		title: 'Comfort',
		img: comfortIcon.src,
		multiplier: 64,
	},
	{
		_id: 'Ya-comfort-plus-583',
		title: 'Comfort+',
		img: comfortPlusIcon.src,
		multiplier: 72,
	},
	{
		_id: 'Ya-business-899',
		title: 'Business',
		img: businessIcon.src,
		multiplier: 117,
	},
	{
		_id: 'Ya-premier-1609',
		title: 'Premier',
		img: premierIcon.src,
		multiplier: 196,
	},
]
