import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const authAPI = {
  CreateUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then( response => console.log(response.user))
      .catch((error) => {
        console.log(error.message, error.code);
      });
  },
};
