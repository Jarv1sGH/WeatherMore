// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const checkLocationPermission = async (): Promise<boolean> => {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (result === RESULTS.GRANTED) {
        return true;
    } else {
        return false;
    }
};


export const requestLocationPermission = async (): Promise<boolean> => {
    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === RESULTS.GRANTED) {
        return true;
    } else {
        return false;
    }
};

export const getLocationCoordinates = async (): Promise<{ lat: number; long: number } | null> => {
    return new Promise((resolve) => {
        Geolocation.getCurrentPosition((position) => {
            const { latitude, longitude }: { latitude: number, longitude: number } = position.coords;
            const coordinates = {
                lat: latitude,
                long: longitude,
            };
            resolve(coordinates);
        },
            (error) => {
                console.log(error)
                resolve(null);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 900000, }
        )
    })

};

export const getIPLocation = async (): Promise<{ lat: number; long: number } | null> => {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        const { loc } = data;

        if (loc) {
            const [latitude, longitude]: [number, number] = loc.split(',').map((coord: string) => parseFloat(coord));
            return {
                lat: latitude,
                long: longitude,
            }
        } else {
            console.log('Unable to fetch location.');
            return null;
        }
    } catch (error) {
        console.log('Unable to fetch location.');
        return null;
    }

};


//@ts-ignore (defining types for the arguments seems unnecessary)
export  const handleLocationData = async (dispatch , setLocationCoords): Promise<void> => {
    //Check for location permission
    const permissionGranted = await checkLocationPermission();

    const getLocationAndDipatch = async (): Promise<void> => {
      const coordinates = await getLocationCoordinates();
      if (coordinates === null) {
        const ipCoords = await getIPLocation();
        dispatch(setLocationCoords({...ipCoords}));
      } else {
        dispatch(setLocationCoords({...coordinates}));
      }
    };

    if (permissionGranted) {
      await getLocationAndDipatch();
      return;
    } else {
      // if not granted then request for permission
      const reqPermission = await requestLocationPermission();
      if (reqPermission) {
        await getLocationAndDipatch();
      } else {
        const coordinates = await getIPLocation();
        dispatch(setLocationCoords({...coordinates}));
      }
    }
  };