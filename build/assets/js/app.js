(function () {
  'use strict';

  // setTimeout(function() {
  //   document.querySelector('.greating_picture').classList.add('m--show');
  // }, 1000);
})();

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{"color": "#444444"}]
    }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{"visibility": "off"}]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{"saturation": -100}, {"lightness": 45}]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{"visibility": "simplified"}]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{"visibility": "off"}]
    }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
    }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,
    title: 'Snazzy!'
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgLy8gfSwgMTAwMCk7XHJcbn0pKCk7XHJcblxyXG4vLyBXaGVuIHRoZSB3aW5kb3cgaGFzIGZpbmlzaGVkIGxvYWRpbmcgY3JlYXRlIG91ciBnb29nbGUgbWFwIGJlbG93XHJcbmdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgLy8gQmFzaWMgb3B0aW9ucyBmb3IgYSBzaW1wbGUgR29vZ2xlIE1hcFxyXG4gIC8vIEZvciBtb3JlIG9wdGlvbnMgc2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwT3B0aW9uc1xyXG4gIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgLy8gSG93IHpvb21lZCBpbiB5b3Ugd2FudCB0aGUgbWFwIHRvIHN0YXJ0IGF0IChhbHdheXMgcmVxdWlyZWQpXHJcbiAgICB6b29tOiAxMSxcclxuXHJcbiAgICAvLyBUaGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSB0byBjZW50ZXIgdGhlIG1hcCAoYWx3YXlzIHJlcXVpcmVkKVxyXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQwLjY3MDAsIC03My45NDAwKSwgLy8gTmV3IFlvcmtcclxuXHJcbiAgICAvLyBIb3cgeW91IHdvdWxkIGxpa2UgdG8gc3R5bGUgdGhlIG1hcC5cclxuICAgIC8vIFRoaXMgaXMgd2hlcmUgeW91IHdvdWxkIHBhc3RlIGFueSBzdHlsZSBmb3VuZCBvbiBTbmF6enkgTWFwcy5cclxuICAgIHN0eWxlczogW3tcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1wiY29sb3JcIjogXCIjNDQ0NDQ0XCJ9XVxyXG4gICAgfSwge1wiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIiwgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLCBcInN0eWxlcnNcIjogW3tcImNvbG9yXCI6IFwiI2YyZjJmMlwifV19LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW3tcInZpc2liaWxpdHlcIjogXCJvZmZcIn1dXHJcbiAgICB9LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XCJzYXR1cmF0aW9uXCI6IC0xMDB9LCB7XCJsaWdodG5lc3NcIjogNDV9XVxyXG4gICAgfSwge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFt7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifV1cclxuICAgIH0sIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1widmlzaWJpbGl0eVwiOiBcIm9mZlwifV1cclxuICAgIH0sIHtcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLCBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsIFwic3R5bGVyc1wiOiBbe1widmlzaWJpbGl0eVwiOiBcIm9mZlwifV19LCB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbe1wiY29sb3JcIjogXCIjNDZiY2VjXCJ9LCB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn1dXHJcbiAgICB9XVxyXG4gIH07XHJcblxyXG4gIC8vIEdldCB0aGUgSFRNTCBET00gZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB5b3VyIG1hcFxyXG4gIC8vIFdlIGFyZSB1c2luZyBhIGRpdiB3aXRoIGlkPVwibWFwXCIgc2VlbiBiZWxvdyBpbiB0aGUgPGJvZHk+XHJcbiAgdmFyIG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgR29vZ2xlIE1hcCB1c2luZyBvdXIgZWxlbWVudCBhbmQgb3B0aW9ucyBkZWZpbmVkIGFib3ZlXHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcblxyXG4gIC8vIExldCdzIGFsc28gYWRkIGEgbWFya2VyIHdoaWxlIHdlJ3JlIGF0IGl0XHJcbiAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDAuNjcwMCwgLTczLjk0MDApLFxyXG4gICAgbWFwOiBtYXAsXHJcbiAgICB0aXRsZTogJ1NuYXp6eSEnXHJcbiAgfSk7XHJcbn1cclxuIl19
