import { initializeApp, getApps, cert } from "firebase-admin/app";
import secretKey from "../../paymentnegotiation-firebase-adminsdk-nekgh-cef80c7322.json";

const firebaseAdminConfig = {
  credential: cert({
    projectId: "paymentnegotiation",
    clientEmail:
      "firebase-adminsdk-nekgh@paymentnegotiation.iam.gserviceaccount.com",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfWcyHxlqEFxfp\nntWBNwDUkkaRQsRsfX0NYKaQpdwDDXq0fvAi/ESRi6aQQP1cZjUByBG1d/ugiKpu\n52TpRDgXiOlJYkL+G+Bru+4u+07pJhhXPOVR7traz0I98mJLCf5cexf/DweR3SD2\n40Pplx8UTM6976t95+5s0DN/y7NfOpwOPQ2+mXHyc2CTUMWWXFzOUcROuyNuNlsM\np3psJT+IA6GvOWmLFPeZDORIQTHQyRwa0onKTbGgZSvhI7EiVJz1K+aYW/TvmMjw\n2H50y1Qbnh1cKEsJcVy3qrK/EswsGGbJ10EXTyNlvfAtOB3A315zxfiNNfgDyql5\nOOLCvjMvAgMBAAECggEAAkBKApGw81Rs2uOKtPBv0LufnJYQC/pP2xxbmLKHI6c7\n7bMstZ8mYX9SuI9Pz6TaqIOeNcKT/vC/UPbFjFgRih+TMB1fwJLok40MRdn4rj7Y\nBtoji99EdI/gqdsJPBx63UKYlFqu1YbasYeEt5bnclQiyDh2Yz50tfvQ+8QHF4LI\n6HZFuerFa0kOuwTw1Ao0wXmYp0frNowuix51LAIMi946u6kP97SwZdfojRCYJ1ma\na9aktXtXixCWJgMHuhDJNQcyZdekqS/NOIhfUzbqz9CqCl528H12J5gex2VAx/el\nxs4F9IiIN9zOP47PG0IjMgcG4aKqoevmxFuN4J6dPQKBgQDSdJy9UOH4zzulUnIh\nSWLzXVbhM0aC6mLY5UtjJNN2W+9j+RKJZ0vrflIt4FUQmCJeck0Dp5IdCjKNKCWw\nbN5cmafkVsiO+YE9XWA45sjZejd+OjFKWiDr6bz+Yqff6J2Qs8xcP8NPOeKWJssF\nDq9wElULLnGi9nEu6AJWII/KqwKBgQDB1fJ6IPyNoSxj5t18Wca6rzwzGRXVJyIO\nuIajhgaPixNKmX9qLmM3vNEAJhLHyVUBAQhAvmR5PPz28oxuLext2Ss5aJkcpEGN\nya+FODmuXYZeJOmw7MW7ZmR/6ZDk1EBVYo1hNWyPWZy89d2ui2igxk4Q/qrRx2I6\nk4VJ/kK5jQKBgQCwsHK/ht6RM/tRq0xioehPhffhDlmOpBXlH20RieN3pWvwtTZY\n4b6dsepw1bzVN8TzImeCP/euJdeXJzOtUVnGyMJqNGohj1xwFqsoWqoZ3EAm29hy\nIgUty4l+0Xk7xWI0EJ/seyQQqfqQMXWVg2TLZLi9sHp7ZQhVZzg+8wuGDQKBgQCY\njwhKQT4lRo5GjsUSAyLbeeJaoUrCugsfJPKrL2hof+COHWPgMWRb0Rt6D31Gi1qA\n8MwLEQ7JMUw0HNCUQ0bLalqP05h2p30E2JFxu8ACUY/Y9xqK6r/x7/P3jOBCih+c\nVHXL5Z1s8e3f928j2otdxtZYn+fYNiJE0ijdBOaFXQKBgGXUCzJSNwzl23+roRmm\npu0v5wTxFLFMIIO6iECWW7h5IrmMYiPOx90gnoID2cKnrR1h6CIcDEkEraZF32rZ\n1HRhsi8DVV9wsUE2sztGP6UnOiqAjqa6fV8JfT/9d+FRKkLCTvtyAxiKH/zBvh6b\n9nJx01sG+SfGIpr6QpcP8Tye\n-----END PRIVATE KEY-----\n",
  }),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}

// const FireBaseAdminConfig = () => {
//   return <div>FireBaseAdminConfig</div>;
// };

// export default FireBaseAdminConfig;
