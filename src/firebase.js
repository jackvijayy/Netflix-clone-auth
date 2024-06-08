
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAM8ed5U9qh7hWg_OtzUWZ5nR-_iqcz1O8",
  authDomain: "netflix-clone-2d744.firebaseapp.com",
  projectId: "netflix-clone-2d744",
  storageBucket: "netflix-clone-2d744.appspot.com",
  messagingSenderId: "745996146509",
  appId: "1:745996146509:web:dae3c555e00c2208d04904"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup= async (name,email,password)=>{
    try {
         const res=await createUserWithEmailAndPassword(auth,email,password);
         const user=res.user;
         await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authprovider:'local',
            email,


         })
    } catch (error) {
        console.log(error)
        toast.error(error)
        
    }

}
const login=async ()=>{
    try {
        signInWithEmailAndPassword(auth,email,password);

        
    } catch (error) {
        console.log(error);
        toast.error(error)
    }
}

const logout=()=>{
    signOut(auth)
}


export {auth,db,login,signup,logout}