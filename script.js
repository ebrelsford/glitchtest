// This isn't necessary but it keeps the editor from thinking L is a typo
/* global L */

var map = L.map('map').setView([38.500893,-98.745117], 5);

// Add base layer
L.tileLayer('https://api.mapbox.com/styles/v1/ebrelsford/cjmici6i7442t2spqgpzyqnwj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWJyZWxzZm9yZCIsImEiOiI2VFFWT21ZIn0.qhtAhoVTOPzFwWAi7YHr_Q', {
  maxZoom: 18
}).addTo(map);       