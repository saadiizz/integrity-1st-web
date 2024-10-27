importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA2srxOJ1TOttHWi8izyn7zbEo2oAjbOfs",
  authDomain: "integrity-1st-automotive.firebaseapp.com",
  projectId: "integrity-1st-automotive",
  storageBucket: "integrity-1st-automotive.appspot.com",
  messagingSenderId: "179303012352",
  appId: "1:179303012352:web:ea134a7d630218b77020e5",
  measurementId: "G-XT1E9XWZR8",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
