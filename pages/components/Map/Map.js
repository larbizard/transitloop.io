import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import fr from "date-fns/locale/fr";
import ar from "date-fns/locale/ar";


registerLocale("fr", fr);
registerLocale("ar", ar);

import * as Icon from "react-feather";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";


import i18n from 'i18next';
import { useTranslation } from "react-i18next";

const librariesArray = ["places"];

const Map = () => {


  const { t } = useTranslation();

  const [deviceType, setDeviceType] = useState("");

  const containerStyle = {
    width: "100%",
    height: deviceType === "Mobile" ? "50rem" : "40rem",
  };

  const [center, setCenter] = useState({
    lat: 33.5800106,
    lng: -7.6515372,
  });

  const [zoom, setZoom] = useState(11);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    libraries: librariesArray,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    region: "ma",
  });

  const originRef = React.useRef();

  const destinationRef = React.useRef();

  const onMapLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const [inputs, setInputs] = useState({
    from: "",
    to: "",
    date: new Date(),
  });

  const [map, setMap] = React.useState(null);

  const [fromLocation, setFromLocation] = useState({
    lat: 33.5800106,
    lng: -7.6515372,
  });
  const [toLocation, setToLocation] = useState({
    lat: 33.5800106,
    lng: -7.6515372,
  });

  const [userCurrentLocation, setUserCurrentLocation] = useState({
    lat: 33.5800106,
    lng: -7.6515372,
  });

  const [geoLocationExits, setGeoLocationExits] = useState(false);

  React.useEffect(() => {
    if (navigator.geolocation) {
      setGeoLocationExits(true);
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      setGeoLocationExits(false);
    }

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }

  }, [inputs, isLoaded, zoom, center]);

  const [originSearchResult, setOriginSearchResult] = useState("");

  const onOriginAutocompleteLoad = (autocomplete) => {
    setOriginSearchResult(autocomplete);
  };

  const onOriginChanged = () => {
    const place = originSearchResult.getPlace();
    console.log(place);

    setFromLocation({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    setInputs((prev) => ({
      ...prev,
      from: place.name,
    }));
  };

  const [destinationSearchResult, setDestinationSearchResult] = useState("");

  const onDestinationAutocompleteLoad = (autocomplete) => {
    setDestinationSearchResult(autocomplete);
  };

  const onDestinationChanged = () => {
    const place = destinationSearchResult.getPlace();
    console.log(place);

    setToLocation({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });

    setInputs((prev) => ({
      ...prev,
      to: place.name,
    }));
  };

  const setMarkers = (e) => {
    if (inputs.from === "") {
      setFromLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });

      setInputs((prev) => ({
        ...prev,
        from: `${e.latLng.lat()}, ${e.latLng.lng()}`,
      }));
    } else {
      setToLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });

      setInputs((prev) => ({
        ...prev,
        to: `${e.latLng.lat()}, ${e.latLng.lng()}`,
      }));
    }
  };

  const calendarRef = useRef();

  return (
    <div className="flex flex-col xl:flex-row z-20 items-start space-between xl:space-x-4 xl:px-20">
      {isLoaded ? (
        <GoogleMap
          clickableIcons={false}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={onMapLoad}
          onUnmount={onUnmount}
          onClick={setMarkers}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {inputs.from !== "" && (
            <Marker
              position={fromLocation}
              draggable={true}
              icon={{
                url: `/assets/images/icons/start_${i18n.language}.svg`,
                scaledSize: new google.maps.Size(100, 100),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(28, 70),
              }}
              onClick={(e) =>
                {
                  map.panTo({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                  setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                  setZoom(14)
                }
              }
              onDragEnd={(e) => {
                let coordinates = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                setFromLocation(coordinates);
                setInputs((prev) => ({
                  ...prev,
                  from: `${e.latLng.lat()}, ${e.latLng.lng()}`,
                }));
                setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                setZoom(14)
              }}
            ></Marker>
          )}
          {inputs.to !== "" && (
            <Marker
              position={toLocation}
              draggable={true}
              icon={{
                url: `/assets/images/icons/end_${i18n.language}.svg`,
                scaledSize: new google.maps.Size(100, 100),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(28, 70),
              }}
              onClick={(e) =>
                {
                  map.panTo({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                  setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                  setZoom(14)
                }
              }
              onDragEnd={(e) => {
                let coordinates = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                setToLocation(coordinates);
                setInputs((prev) => ({
                  ...prev,
                  to: `${e.latLng.lat()}, ${e.latLng.lng()}`,
                }));
                setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                setZoom(14)
              }}
            ></Marker>
          )}
          {geoLocationExits && (
            <Marker
              position={userCurrentLocation}
              draggable={false}
              icon={{
                url: "/assets/images/icons/current_location.svg",
                scaledSize: new google.maps.Size(16, 16),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0),
              }}
              onClick={(e) =>{
                setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                map.panTo({ lat: e.latLng.lat(), lng: e.latLng.lng() })
              }
              }
            ></Marker>
          )}
          <div className="flex flex-col absolute bg-yellow-400 w-full md:w-auto md:m-4 md:rounded-xl px-2">
            <div className="pt-2 flex flex-col">
              <div className="flex flex-row items-center">
                {isLoaded ? (
                  <Autocomplete
                    className="pl-2 w-full"
                    onLoad={onOriginAutocompleteLoad}
                    onPlaceChanged={onOriginChanged}
                  >
                    <input
                      className={`p-2 w-full ${i18n.dir() === "rtl" && "text-right"}`}
                      type="text"
                      placeholder={t("Choose_an_origin_point")}
                      ref={originRef}
                      defaultValue={inputs.from}
                      onChange={() => {}}
                    />
                  </Autocomplete>
                ) : (
                  <></>
                )}
                <Icon.Navigation
                  className="cursor-pointer mx-2"
                  color="white"
                  size={25}
                  onClick={() => {
                    map.panTo({
                      lat: userCurrentLocation.lat,
                      lng: userCurrentLocation.lng,
                    });
                    setFromLocation({
                      lat: userCurrentLocation.lat,
                      lng: userCurrentLocation.lng,
                    });
                    setInputs((prev) => ({
                      ...prev,
                      from: `${userCurrentLocation.lat}, ${userCurrentLocation.lng}`,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col space-between py-2 w-full">
              <div className="flex flex-row w-full items-center">
                {isLoaded ? (
                  <Autocomplete
                    className="pl-2 w-full"
                    onLoad={onDestinationAutocompleteLoad}
                    onPlaceChanged={onDestinationChanged}
                  >
                    <input
                      className={`p-2 w-full ${i18n.dir() === "rtl" && "text-right"}`}
                      type="text"
                      placeholder={t("Choose_an_arrival_point")}
                      ref={destinationRef}
                      defaultValue={inputs.to}
                      onChange={() => {}}
                    />
                  </Autocomplete>
                ) : (
                  <></>
                )}
                <Icon.Repeat
                  className="cursor-pointer mx-2"
                  color="white"
                  size={25}
                  onClick={() => {
                    setFromLocation(toLocation);
                    setToLocation(fromLocation);
                    setInputs((prev) => ({
                      ...prev,
                      from: `${toLocation.lat}, ${toLocation.lng}`,
                      to: `${fromLocation.lat}, ${fromLocation.lng}`,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="pl-2 flex flex-row items-center">
              <DatePicker
                ref={calendarRef}
                className={`p-2 w-full ${i18n.dir() === "rtl" && "text-right"}`}
                selected={inputs.date}
                showTimeSelect
                allowSameDay={true}
                locale={i18n.language}
                dateFormat="MMMM d, yyyy H:mm"
                onChange={(date) => {
                  setInputs((prev) => ({
                    ...prev,
                    date: date,
                  }));
                }}
              />
              <Icon.Calendar
                className="cursor-pointer mx-2"
                color="white"
                size={25}
                onClick={() => calendarRef.current.input.click()}
              />
            </div>
            <div className="pl-2 pb-2 py-2 flex flex-row items-center">
              <Link
                className="w-full"
                href={`https://app.mdinamapper.ma/#/?fromPlace=${
                  fromLocation.lat + "%2C%20" + fromLocation.lng
                }&toPlace=${toLocation.lat}%2C%20${
                  toLocation.lng
                }&date=${inputs.date.getDay()}-${inputs.date.getMonth()}-${inputs.date.getFullYear()}&time=${inputs.date.getHours()}-${inputs.date.getMinutes()}&arriveBy=false&mode=WALK%2CBUS%2CTRAM%2CGONDOLA%2CRAIL&showIntermediateStops=true&maxWalkDistance=1207&optimize=QUICK&walkSpeed=1.34&ignoreRealtimeUpdates=true&companies=&numItineraries=3&otherThanPreferredRoutesPenalty=900`}
              >
                <button
                  type="submit"
                  className={` p-2 px-4 w-full ${
                    inputs.from === "" || inputs.to === ""
                      ? "bg-gray-400 text-gray-200"
                      : "bg-black text-white"
                  }`}
                  disabled={inputs.from === "" || inputs.to === ""}
                >
                  {t("Plan_my_trip")}
                </button>
              </Link>
              <Icon.MapPin
                className="cursor-pointer mx-2"
                color="white"
                size={25}
              />
            </div>
          </div>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
