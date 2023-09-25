// import React, { useState, useEffect } from 'react';
// import GoogleMapReact from 'google-map-react';
// import axios from 'axios';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// const MapMarker = ({ resource, onClick }) => {
//   const handleClick = () => {
//     onClick(resource);
//   };

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         left: '-10px',
//         top: '-10px',
//         color: 'purple',
//         height: '30px',
//         width: '30px',
//         padding: '10px',
//         display: 'flex',
//         // gap: '10px',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '50%',
//         backgroundColor: 'red',
//         boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 6px',
//         cursor: 'pointer'
//       }}
//       onClick={handleClick}
//     >
//       <FaMapMarkerAlt className="marker"/>
//     </div>
//   );
// };

// const Map = () => {
//   const [resources, setResources] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedResource, setSelectedResource] = useState(null);

//   useEffect(() => {
//     const fetchResources = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/ressources');
//         setResources(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchResources();
//   }, []);

//   const handleMarkerClick = (resource) => {
//     setSelectedResource(resource);
//   };

//   const mapOptions = {
//     zoom: 10,
//     center: { lat: 5.36784885, lng: 10.41818143 },
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     if (e.target.value === '') {
//       setSearchResults([]);
//     } else {
//       const matchedResources = resources.filter(
//         (resource) =>
//           resource.nom_ressource.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
//       );
//       setSearchResults(matchedResources);
//     }
//   };

//   const handleSearchResultClick = (resource) => {
//     setSelectedResource(resource);
//     setSearchQuery('');
//     setSearchResults([]);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex' }}>
//       <div style={{ width: '25%', padding: '10px' }}>
//         <input type="search" value={searchQuery} onChange={handleSearch} placeholder="Search resources" />
//         {searchResults.length > 0 && (
//           <ul>
//             {searchResults.map((resource) => (
//               <li key={resource.id} onClick={() => handleSearchResultClick(resource)}>
//                 {resource.nom_ressource}
//               </li>
//             ))}
//           </ul>
//         )}
//         {selectedResource && (
//           <div
//             className="mark_data"
//             style={{
//               backgroundColor: 'white',
//               padding: '10px',
//               borderRadius: '5px',
//               boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 6px'
//             }}
//           >
//             <img src={'http://localhost:8000' + selectedResource.image_ressource} alt={selectedResource.nom_ressource} style={{ width: '100%', height: 'auto' }} />
//             <p>Name: {selectedResource.nom_ressource}</p>
//             <p>Latitude: {selectedResource.latitude}</p>
//             <p>Longitude: {selectedResource.longitude}</p>
//             <p>Description: {selectedResource.description}</p>
//           </div>
//         )}
//       </div>
//       <div style={{ width: '75%', position: 'relative' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
//           defaultCenter={mapOptions.center}
//           defaultZoom={mapOptions.zoom}
//         >
//           {resources.map((resource) => (
//             <MapMarker
//               className="markers"
//               key={resource.id}
//               lat={resource.latitude}
//               lng={resource.longitude}
//               resource={resource}
//               onClick={handleMarkerClick}
//             />
//           ))}
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// };

// export default Map;

import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapMarker = ({ resource, onClick }) => {
  const handleClick = () => {
    onClick(resource);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: '-10px',
        top: '-10px',
        color: 'purple',
        height: '30px',
        width: '30px',
        padding: '10px',
        display: 'flex',
        // gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: 'red',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 6px',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <FaMapMarkerAlt className="marker"/>
    </div>
  );
};

const Map = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/ressources');
        setResources(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  const handleMarkerClick = (resource) => {
    setSelectedResource(resource);
  };

  const mapOptions = {
    zoom: 10,
    center: { lat: 5.36784885, lng: 10.41818143 },
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === '') {
      setSearchResults([]);
    } else {
      const matchedResources = resources.filter(
        (resource) =>
          resource.nom_ressource.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
      setSearchResults(matchedResources);
    }
  };

  const handleSearchResultClick = (resource) => {
    setSelectedResource(resource);
    setSearchQuery('');
    setSearchResults([]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const displayedResources = searchResults.length > 0 ? searchResults : resources;

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex' }}>
      <div style={{ width: '25%', padding: '10px' }}>
        <input type="search" value={searchQuery} onChange={handleSearch} placeholder="Search resources" />
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((resource) => (
              <li key={resource.id} onClick={() => handleSearchResultClick(resource)}>
                {resource.nom_ressource}
              </li>
            ))}
          </ul>
        )}
        {selectedResource && (
          <div
            className="mark_data"
            style={{
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 6px'
            }}
          >
            <img src={'http://localhost:8000' + selectedResource.image_ressource} alt={selectedResource.nom_ressource} style={{ width: '100%', height: 'auto' }} />
            <p>Name: {selectedResource.nom_ressource}</p>
            <p>Latitude: {selectedResource.latitude}</p>
            <p>Longitude: {selectedResource.longitude}</p>
            <p>Description: {selectedResource.description}</p>
          </div>
        )}
      </div>
      <div style={{ width: '75%', position: 'relative' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          {displayedResources.map((resource) => (
            <MapMarker
              className="markers"
              key={resource.id}
              lat={resource.latitude}
              lng={resource.longitude}
              resource={resource}
              onClick={handleMarkerClick}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;