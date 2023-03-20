import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import ErrorMessage from "../ErrorMessage";
import styles from './MapFrame.module.scss';

interface IMapFrame {
    latitude: number
    longitude: number
    labelTxt?: string
}


export default function MapFrame({latitude, longitude, labelTxt = "LOCAL DO CEP"}:IMapFrame){

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    const center = useMemo(() => ({ lat: latitude, lng: longitude}), []);

    if(isLoaded){
        return (
            <GoogleMap zoom={18} center={center} mapContainerClassName={styles.mapContainer}>
              <MarkerF
                    position={center}
                    options={{
                        label:{
                            text: labelTxt,
                            className: styles.mapMarker
                        },
                    }}
                />
            </GoogleMap>
          );
        
    } else {
        return(
            <ErrorMessage message='Invalid API key or parameters'/>
        )
    }

}