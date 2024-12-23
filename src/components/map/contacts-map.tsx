import React, { useEffect } from 'react';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

import type { Contact } from '@/types/dashboard';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Custom marker icons for different call statuses
const markerIcons = {
  green: new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  orange: new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  red: new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  default: new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  currentLocation: new L.DivIcon({
    className: 'custom-current-location-marker',
    html: `
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" fill="#4CAF50" stroke="#ffffff" stroke-width="3"/>
        <circle cx="20" cy="20" r="5" fill="#ffffff"/>
        <circle cx="20" cy="20" r="18" fill="none" stroke="#4CAF50" stroke-width="2" stroke-dasharray="5,5"/>
      </svg>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  })
};

// Helper function to get marker icon based on call status
const getMarkerIcon = (callStatus: string | undefined): L.Icon | L.DivIcon => {
  if (!callStatus) return markerIcons.default;
  return markerIcons[callStatus as keyof typeof markerIcons] || markerIcons.default;
};

interface ContactsMapProps {
  contacts: Contact[];
  currentLocation?: { lat: number; lng: number; name?: string };
}

interface MarkerClusterProps {
  contacts: Contact[];
  getMarkerIcon: (callStatus: string | undefined) => L.Icon | L.DivIcon;
}

const MarkerCluster: React.FC<MarkerClusterProps> = ({ contacts, getMarkerIcon }) => {
  const map = useMap();

  useEffect(() => {
    const markerClusterGroup = new L.MarkerClusterGroup();
    for (const contact of contacts) {
      const marker = L.marker([contact.lat, contact.lng], {
        icon: getMarkerIcon(contact.callStatus)
      });
      marker.bindPopup(
        `<div>Contact #${contact.id}<br/>Status: ${contact.callStatus || 'Not Available'}</div>`
      );
      markerClusterGroup.addLayer(marker);
    }

    map.addLayer(markerClusterGroup);
    return () => {
      map.removeLayer(markerClusterGroup);
    };
  }, [contacts, map, getMarkerIcon]);

  return <></>;
};

export function ContactsMap({ contacts, currentLocation }: ContactsMapProps) {
  // Calculate center of the map based on contacts or current location or default to a central US position
  const center: [number, number] =
    contacts.length > 0
      ? [
          contacts.reduce((sum, contact) => sum + contact.lat, 0) / contacts.length,
          contacts.reduce((sum, contact) => sum + contact.lng, 0) / contacts.length
        ]
      : currentLocation
        ? [currentLocation.lat, currentLocation.lng]
        : [39.8283, -98.5795]; // Center of US

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle className='text-lg'>Map: Contacts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-[400px] w-full overflow-hidden rounded-md'>
          <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <MarkerCluster contacts={contacts} getMarkerIcon={getMarkerIcon} />
            {currentLocation && (
              <Marker
                position={[currentLocation.lat, currentLocation.lng]}
                icon={markerIcons.currentLocation}
              >
                <Popup>
                  <div>{currentLocation.name ?? 'Current Location'}</div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}
