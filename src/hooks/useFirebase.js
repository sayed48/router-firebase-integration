import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});
    useEffect(()=>{

    }, []);
    const signInWithGoogle = () =>{
        console.log("sign in")
    } 
    return [user, setUser];
}
export default useFirebase;