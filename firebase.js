<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBDUKl5Pn4_in6kvgvuLKP5S6Pm2fDDKz8",
  authDomain: "sunkensmp.firebaseapp.com",
  projectId: "sunkensmp",
  storageBucket: "sunkensmp.firebasestorage.app",
  messagingSenderId: "413559234072",
  appId: "1:413559234072:web:eb190773961bbe12472d6d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
</script>
