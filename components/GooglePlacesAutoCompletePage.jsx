import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete"

const GooglePlacesAutoCompletePage = ({setAddress,setCoordinate}) => {
  return (
    <div className=" w-full">
    <GooglePlacesAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API}
      selectProps={{
        placeholder:"Search Property Address",
        isClearable:true,
        className:"w-full",
        onChange: (address) => {
            setAddress(address?.label)
            geocodeByAddress(address?.label).then(result=>getLatLng(result[0])).then(({lat,lng})=>{
                setCoordinate({lat,lng})
            })
        }
      }}
    />
  </div>
  )
}

export default GooglePlacesAutoCompletePage