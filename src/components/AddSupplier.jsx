/* global google */
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker  } from "@react-google-maps/api";

function AddSupplier() {
  const containerStyle = {
    width: "566px",
    height: "300px",
  };

  const [center,setCenter] = useState({
    lat: 41.3851, lng: 2.1734
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      var listener = google.maps.event.addListener(map, "idle", function() { 
        if (map.getZoom() > 4) map.setZoom(4); 
        google.maps.event.removeListener(listener); 
      });
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  let [location, setLocation] = useState("");
  let [destination, setDestination] = useState("");

  function changeSource(value){
        setLocation(value);
        changeCenter(value)
  }

  function changeDestination(value){
    setDestination(value);
    changeCenter(value)
  }

 

    async function changeCenter(newLocation) {
        const data = await fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC1ORE-osqldqThLU8fbD9vAcCr08Ug1LI&address=" +
          newLocation
        );
        const readable = await data.json();
        const coordinates = readable.results[0].geometry.location;
        if(coordinates) setCenter(coordinates);
    }

    let [showAdd,setShowAdd]=useState(false)

  return (
    <React.Fragment>
    <button onClick={()=>setShowAdd(true)} className="bg-green-400 p-4">Add Supplier</button>
    <div className={`absolute z-50 w-10/12 height60 top-0 right-${showAdd? "0":"full"} flex`}>
      <div onClick={()=>setShowAdd(false)} className="w-1/2 bg-black opacity-25"></div>
      <div className="w-1/2 bg-white p-6">
        <div className="flex justify-between items-center mt-3 ml-4">
          <p className="font-bold text-2xl">Add New Supplier</p>
          <img onClick={()=>setShowAdd(false)} className="w-8" src="public\times.svg" />
        </div>
        <div className="ml-4 mt-16">
          <p>Supplier Company Name</p>
          <input
            className="mt-2 p-1 w-full border-2 border-black"
            type="text"
            placeholder="Company Name"
          />
          <p className="mt-4">Supplier Company Address</p>
          <input
            className="mt-2 p-1 w-full border-2 border-black"
            type="text"
            placeholder="Company Address"
          />
          <div className="mt-4 flex gap-4">
            <div>
              <p>Supplier Country</p>
              <select
                className="b border-2 border-black p-1 w17-2 mt-2"
                name="contry"
                id="contry"
              >
                <option value="India">India</option>
                <option value="SriLanka">Sri Lanka</option>
                <option value="Africa">Africa</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <div>
              <p>Supplier City</p>
              <input
                className="mt-2 w17-2 p-1 border-2 border-black"
                type="text"
                placeholder="Company Address"
              />
            </div>
          </div>
          <p className="mt-10 font-bold">Ports</p>
          <div className="mt-4 flex gap-4">
            <div>
              <p>Source Port</p>
              <select
                onChange={(e) => changeSource(e.target.value)}
                className="b border-2 border-black p-1 w17-2 mt-2"
                name="contry"
                id="contry"
              >
                <option value="India">Port of India</option>
                <option value="SriLanka">Port of Sri Lanka</option>
                <option value="Africa">Port of Africa</option>
                <option value="China">Port of China</option>
                <option value="Japan">Port of Japan</option>
              </select>
            </div>
            <div>
              <p>Destination Port</p>
              <select
              onChange={(e) => changeDestination(e.target.value)}
                className="b border-2 border-black p-1 w17-2 mt-2"
                name="contry"
                id="contry"
              >
                <option value="India">Port of India</option>
                <option value="SriLanka">Port of Sri Lanka</option>
                <option value="Africa">Port of Africa</option>
                <option value="China">Port of China</option>
                <option value="Japan">Port of Japan</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
          <LoadScript googleMapsApiKey="AIzaSyC1ORE-osqldqThLU8fbD9vAcCr08Ug1LI">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={4}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <Marker position={center}></Marker>
                </GoogleMap>
            </LoadScript> 
          </div>
          <p>Hover over a map marker to learn more</p>
          <button onClick={()=>setShowAdd(false)} className="bg-black rounded-lg mt-10 p-2 text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default React.memo(AddSupplier);
