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
  const [rigidbodyX, setRigidbodyX] = useState([]);
  const [rigidbodyY, setRigidbodyY] = useState([]);
  const [rigidbodyZ, setRigidbodyZ] = useState([]);

  useEffect(() => {
    const dbData = ref(db, 'Body')
    onValue(dbData, (data) =>{
      const velocityXData = data.child('/Look/velocityX').val();
      const velocityYData = data.child('/Look/velocityY').val();
      const rigidbodyXData = data.child('/Position/rigidbodyX').val();
      const rigidbodyYData = data.child('/Position/rigidbodyY').val();
      const rigidbodyZData = data.child('/Position/rigidbodyZ').val();
        if(data !== velocityX||data !== velocityY){
          setVelocityX(velocityXData)
          setVelocityY(velocityYData)
          setRigidbodyX(rigidbodyXData)
          setRigidbodyY(rigidbodyYData)
          setRigidbodyZ(rigidbodyZData)

          console.log("data "+velocityXData)
        }
    }) 
  }, [velocityX, velocityY]);
  
  return (
    <div className="App">
      <p> Velocity X: {velocityX}</p>
      <p> Velocity Y: {velocityY}</p>
      <p> rigidbody X: {rigidbodyX}</p>
      <p> rigidbody Y: {rigidbodyY}</p>
      <p> rigidbody Z: {rigidbodyZ}</p>
    </div>
  );
}
