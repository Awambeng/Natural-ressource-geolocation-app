import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, DirectionsRenderer, InfoWindow } from 'google-maps-react';

class Smap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Resources: [],
      error: '',
      directions: null,
    };
  }

  componentDidMount() {
    this.fetchResources();
  }

  fetchResources = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/ressources');
      const data = await response.json();
      this.setState({ Resources: data });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  handleMarkerClick = async (event, marker, resource) => {
    const { google } = this.props;
    const directionsService = new google.maps.DirectionsService();
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const origin = new google.maps.LatLng(latitude, longitude);
          const destination = new google.maps.LatLng(
            resource.latitude,
            resource.longitude
          );
  
          directionsService.route(
            {
              origin: origin,
              destination: destination,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                  selectedResource: resource,
                }); // Set the selected resource in the state
              } else {
                console.log(
                  'Error fetching directions from Google Maps API:',
                  status
                );
              }
            }
          );
        },
        (error) => {
          console.log('Error getting user location:', error);
        }
      );
    }
  };
  
  render() {
    const { Resources, selectedResource } = this.state;
    const { google } = this.props;
  
    if (!google) {
      return <div>Loading...</div>;
    }
  
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
  
    return (
      <div>
        <Map
          google={google}
          zoom={7}
          style={mapStyles}
          initialCenter={{ lat: 5.36751772, lng: 10.41681887 }}
          onReady={(mapProps, map) => (this.map = map)}
        >
          {Resources.map((resource) => (
            <Marker
              key={resource.id}
              position={{ lat: resource.latitude, lng: resource.longitude }}
              name={resource.nom_ressource}
              onClick={(event, marker) => {
                this.handleMarkerClick(event, marker, resource);
              }}
              onMouseover={(event, marker) => {
                const infowindow = new google.maps.InfoWindow({
                  content: `<div>${resource.nom_ressource}</div>`,
                });
                infowindow.open(this.map, marker);
              }}
              onMouseout={(event, marker) => {}}
            />
          ))}
          {selectedResource && (
            <InfoWindow
              position={{
                lat: selectedResource.latitude,
                lng: selectedResource.longitude,
              }}
              onCloseClick={() => {
                this.setState({ selectedResource: null });
              }}
            >
              <div>
                <h3>{selectedResource.nom_ressource}</h3>
                <p>
                  Lat: {selectedResource.latitude}, Lng:{' '}
                  {selectedResource.longitude}
                </p>
                {/* Add more details about the selected resource if needed */}
              </div>
            </InfoWindow>
          )}
          {this.state.directions && (
            <DirectionsRenderer directions={this.state.directions} />
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCVS9_HUZMWARwPiOi0kc1i8Ws09xHoEQ', // Replace with your Google Maps API key
  libraries: ['places'],
  language: 'en',
  region: 'US',
  LoadingContainer: () => <div>Loading...</div>,
})(Smap);
// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker, DirectionsRenderer, InfoWindow } from 'google-maps-react';

// class Smap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Resources: [],
//       error: '',
//       directions: null,
//       selectedResource: null,
//     };
//   }

//   componentDidMount() {
//     this.fetchResources();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.Resources !== this.state.Resources) {
//       this.fetchResources();
//     }
//   }

//   fetchResources = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/ressources');
//       const data = await response.json();
//       this.setState({ Resources: data });
//     } catch (error) {
//       console.log(error);
//       this.setState({ error: error.message });
//     }
//   };

//   handleMarkerClick = (event, marker, resource) => {
//     this.setState({ selectedResource: resource });
//   };

//   handleInfoWindowClose = () => {
//     this.setState({ selectedResource: null });
//   };
  
//   render() {
//     const { Resources, selectedResource } = this.state;
//     const { google } = this.props;
  
//     if (!google) {
//       return <div>Loading...</div>;
//     }
  
//     const mapStyles = {
//       width: '100%',
//       height: '100%',
//     };
  
//     return (
//       <div>
//         <Map
//           google={google}
//           zoom={15}
//           style={mapStyles}
//           initialCenter={{ lat: 5.36751772, lng: 10.41681887 }}
//           onReady={(mapProps, map) => (this.map = map)}
//         >
//           {Resources.map((resource) => (
//             <Marker
//               key={resource.id}
//               position={{ lat: resource.latitude, lng: resource.longitude }}
//               name={resource.nom_ressource}
//               onClick={(event, marker) => {
//                 this.handleMarkerClick(event, marker, resource);
//               }}
//               onMouseover={(event, marker) => {
//                 const infowindow = new google.maps.InfoWindow({
//                   content: `<div>${resource.nom_ressource}</div>`,
//                 });
//                 infowindow.open(this.map, marker);
//               }}
//               onMouseout={(event, marker) => {}}
//             />
//           ))}
//           {selectedResource && (
//             <InfoWindow
//               position={{
//                 lat: selectedResource.latitude,
//                 lng: selectedResource.longitude,
//               }}
//               onCloseClick={this.handleInfoWindowClose}
//             >
//               <div>
//                 <h3>{selectedResource.nom_ressource}</h3>
//                 <p>{selectedResource.description}</p>
//                 <p>
//                   Lat: {selectedResource.latitude}, Lng:{' '}
//                   {selectedResource.longitude}
//                 </p>
//                 {/* Add more details about the selected resource if needed */}
//               </div>
//             </InfoWindow>
//           )}
//           {this.state.directions && (
//             <DirectionsRenderer directions={this.state.directions} />
//           )}
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCCVS9_HUZMWARwPiOi0kc1i8Ws09xHoEQ', // Replace with your Google Maps API key
//   libraries: ['places'],
//   language: 'en',
//   region: 'US',
//   LoadingContainer: () => <div>Loading...</div>,
// })(Smap);