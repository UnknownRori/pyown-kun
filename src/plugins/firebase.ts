import type { App } from 'vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ? INFO : Add your own credentials here
import { firebaseConfig } from "@/config/firebase";

export type FirebasePluginsOpts = {
    name: string
};

export default {
    install: (app: App, options?: FirebasePluginsOpts) => {
        // Initialize Firebase
        const firebaseApp = initializeApp(firebaseConfig, options ? options.name : undefined);
        const firebaseAnalytics = getAnalytics(firebaseApp);

        app.config.globalProperties.$firebase = firebaseApp;
        app.config.globalProperties.$analytics = firebaseAnalytics;
    }
};