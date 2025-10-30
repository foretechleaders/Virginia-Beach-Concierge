
import { useState } from 'react'
import Spinner from './Spinner.jsx'

export default function MapEmbed({ query = 'Virginia Beach' }) {
  const [loaded, setLoaded] = useState(false)
  const key = import.meta.env.VITE_GOOGLE_MAPS_KEY
  const src = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${encodeURIComponent(query)}`

  return (
    <div className="rounded-2xl border bg-white">
      {!loaded && <Spinner label="Loading map" />}
      <iframe
        title="Google Map"
        src={src}
        className="w-full h-[420px] rounded-2xl"
        style={{ border: 0, display: loaded ? 'block' : 'none' }}
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      <noscript>
        <div className="p-4 text-slate-700">Map requires JavaScript. Enable JS to view.</div>
      </noscript>
    </div>
  )
}
