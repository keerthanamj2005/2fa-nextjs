import { FirebaseApp, getApp, getApps, initializeApp } from "@firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyDfztrWnkak_iEi2b8wulzoWUy0cm0ra0A",
//     authDomain: "fir-mfa-258a3.firebaseapp.com",
//     projectId: "fir-mfa-258a3",
//     storageBucket: "fir-mfa-258a3.appspot.com",
//     messagingSenderId: "486580491297",
//     appId: "1:486580491297:web:3dd8713890d1a9a6f9ff60"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6eYfL5-XamIJlAZfJ9f-OT-_mIsG14wU",
  authDomain: "fir-vanill-ajs.firebaseapp.com",
  projectId: "fir-vanill-ajs",
  storageBucket: "fir-vanill-ajs.appspot.com",
  messagingSenderId: "539408696305",
  appId: "1:539408696305:web:ace56d3fbd322ef9707a50",
  measurementId: "G-F1YYQZW09Y",
};

let app: FirebaseApp;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app };
