import admin from "firebase-admin";

import serviceAccount from "./serviceAccount.js";

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
