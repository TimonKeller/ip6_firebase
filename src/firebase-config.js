import { initializeApp } from 'firebase/app';
import {ref, getDatabase, onValue} from '@firebase/database';
import {useState, useEffect} from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjNBJWJmeomjotC4CUrTrjT9FMeb6PXQo",
    authDomain: "testing-realtime-unity.firebaseapp.com",
    databaseURL: "https://testing-realtime-unity-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testing-realtime-unity",
    storageBucket: "testing-realtime-unity.appspot.com",
    messagingSenderId: "212650818054",
    appId: "1:212650818054:web:ceee16c843c0e353c2a187"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export function Test(){
  const [velocityX, setVelocityX] = useState([]);
  const [velocityY, setVelocityY] = useState([]);

  useEffect(() => {
    const testio = ref(db, 'Body')
    onValue(testio, (data) =>{
      const data1 = data.child('/Look/velocityX').val();
      const data2 = data.child('/Look/velocityY').val();
        if(data !== velocityX||data !== velocityY){
          setVelocityX(data1)
          setVelocityY(data2)

          console.log("data "+data1)
        }
    }) 
  }, [velocityX, velocityY]);
  
  return (
    <div className="App">
      <p>{velocityX}</p>
      <p>{velocityY}</p>
    </div>
  );
}
