import GoogleMapReact from 'google-map-react'
import { useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { optionsList } from './data'

interface IMAP {
	map: google.maps.Map
	maps: any
}

const Map = () => {
	const [MAP, setMAP] = useState<IMAP>({} as IMAP)
	const [isExistRoute, setIsExistRoute] = useState(false)

	const { from, to } = useTypedSelector(state => state.taxi)

	const { setTravelTime, setSelectedOption } = useActions()

	const renderWay = () => {
		const { map, maps } = MAP

		if (typeof maps.DirectionsRenderer === 'function') {
			const directionsRenderer: google.maps.DirectionsRenderer =
				new maps.DirectionsRenderer()
			const directionsService: google.maps.DirectionsService =
				new maps.DirectionsService()

			directionsService
				.route({
					origin: from.location,
					destination: to.location,
					travelMode: google.maps.TravelMode.DRIVING,
				})
				.then(res => {
					directionsRenderer.setDirections(res)

					const durationSec = res.routes[0].legs[0].duration?.value

					if (durationSec) {
						setTravelTime(Math.ceil(durationSec / 60))
						setSelectedOption(optionsList[0]._id)
					}
				})
				.catch(err => alert(err))

			directionsRenderer.setOptions({
				markerOptions: {
					clickable: false,
				},
			})

			directionsRenderer.setMap(map)
		}
	}

	useEffect(() => {
		if (
			from.location?.lat &&
			to.location?.lat &&
			MAP?.map &&
			MAP?.maps &&
			!isExistRoute
		)
			renderWay()
		// eslint-disable-next-line
	}, [from, to, MAP?.map, MAP?.maps, isExistRoute])

	return (
		<div className='h-screen w-full'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }}
				defaultCenter={{
					lat: 50.1109221,
					lng: 8.6821267,
				}}
				defaultZoom={13}
				options={{
					zoomControl: false,
					fullscreenControl: false,
					keyboardShortcuts: false,
					clickableIcons: false,
					scrollwheel: false,
				}}
				center={
					from.location?.lat
						? {
								lat: from.location?.lat,
								lng: from.location?.lng,
						  }
						: undefined
				}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={setMAP}
			/>
		</div>
	)
}

export default Map
