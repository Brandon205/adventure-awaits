import React from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbjIwNSIsImEiOiJjazFzZXB6ZHEwMjV2M2Jtd3NhaDh6dnFqIn0.sZ7plho546gq4TBKteOPYw';

class Map extends React.Component {
  state = {
    lng: -122.3321,
    lat: 47.6062,
    zoom: 8
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    var marker = new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(map);
    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    }))
  }

  render() {
    return (
      <>
        <div>
          <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
      </>
    )
  }
}

export default Map;
