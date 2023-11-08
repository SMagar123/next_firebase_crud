const admin = require("firebase-admin");
const serviceAccount = require("@/firebase/payment.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Example function to identify a user based on an access token
export default async function identifyUserFromToken(accessToken) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(accessToken);
    const uid = decodedToken.uid;
    console.log("User UID:", uid);
    // You can perform further actions or retrieve user data based on the UID
    // For example, fetch user data from the database using the UID
    // or perform specific operations based on the user's role or permissions
  } catch (error) {
    console.error("Error identifying user:", error);
  }
}

// Example usage of the function // Replace with the actual access token
