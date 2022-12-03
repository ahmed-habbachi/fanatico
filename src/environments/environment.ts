// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'fanatico-db',
    appId: '1:428727787601:web:9a2f888b6c1dabef99d870',
    databaseURL: 'https://fanatico-db-default-rtdb.firebaseio.com',
    storageBucket: 'fanatico-db.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyC0cIMIg5sjtJwAISrvl-YNmZJx4FHeapQ',
    authDomain: 'fanatico-db.firebaseapp.com',
    messagingSenderId: '428727787601',
    measurementId: 'G-9KW62NLWDY',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
