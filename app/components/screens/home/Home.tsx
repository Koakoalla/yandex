import Layout from '../../layout/Layout'
import FromInput from './FromInput'
import Map from './Map'
import Options from './Options'
import OrderButton from './OrderButton'
import ToInput from './ToInput'

const Home = () => {
	return (
		<Layout title='Order taxi'>
			<Map />

			<div className='absolute z-10 left-5 w-11/12 bottom-10'>
				<FromInput />
				<ToInput />
				<Options />

				<OrderButton />
			</div>
		</Layout>
	)
}

export default Home
