import { useEffect, useRef } from "react";

export default function MapEmbed() {
  const mapRef = useRef(null);

  useEffect(() => {
    const key = import.meta.env.VITE_GOOGLE_MAPS_KEY;
    if (!key) return console.error("Missing Google Maps API key");

    // Load Google Maps JS dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      const vb = { lat: 36.8529, lng: -75.9780 }; // Virginia Beach Boardwalk area
      const map = new window.google.maps.Map(mapRef.current, {
        center: vb,
        zoom: 13,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      // Add a marker for the Boardwalk
      new window.google.maps.Marker({
        position: vb,
        map,
        title: "Virginia Beach Boardwalk",
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (window.google && window.google.maps) {
        delete window.google.maps;
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="rounded-2xl border bg-white overflow-hidden shadow-md">
      <div
        ref={mapRef}
        id="map"
        className="w-full h-[420px] rounded-2xl"
        style={{ border: 0 }}
      />
      <noscript>
        <div className="p-4 text-slate-700">
          Enable JavaScript to view the live interactive map.
        </div>
      </noscript>
    </div>
  );
}
