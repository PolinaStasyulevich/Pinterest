// api.js
export function fetchPhotos() {
  return fetch('https://6829fe1fab2b5004cb357623.mockapi.io/photos')
    .then(res => res.json());
}
