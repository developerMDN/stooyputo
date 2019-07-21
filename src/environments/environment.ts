// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * Api doc: https://developer.spotify.com/console/
 */
export const environment = {
  production: false,
  // x-www-form-urlencoded
  post_token: 'https://accounts.spotify.com/api/token',
  grant_type: 'client_credentials',
  client_id: 'f5786a9735334b7f8157be78382aecb2',
  client_secret: 'cd8b633c930847a9bded3ee779bb4b65',
  token: 'Bearer BQAVGtcU9a--uzvISR_1kgPnPKbmJRnDgKCA_SR0jp7cIb2SnkNTHvjBKkGsVW-v1FjkNGMVuZonavgEzt8',
  getRelease: 'browse/new-releases?limit=20',
  getArtists: `search?q=termino&type=artist&limit=15`,
  getArtist: `artists/id`,
  getTopTracks: 'artists/id/top-tracks?country=us',
  urlSpotify: 'https://api.spotify.com/v1/',
  urlPlay: 'https://open.spotify.com/embed?uri='

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
