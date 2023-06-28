import type { FirebaseApp } from "firebase/app";
import type { Analytics } from "firebase/analytics";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $firebase: FirebaseApp,
        $analytics: Analytics
    }
}