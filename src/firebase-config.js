import { initializeApp } from 'firebase/app';
import {ref, getDatabase, onValue} from '@firebase/database';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';

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
  const [drawerPositionX, setDrawerPositionX] = useState([]);
  const [drawerPositionZ, setDrawerPositionZ] = useState([]);
  const [heckKlappeRotationX, setHeckKlappeRotationX] = useState([]);
  const [heckKlappeRotationY, setHeckKlappeRotationY] = useState([]);
  const [heckKlappeRotationZ, setHeckKlappeRotationZ] = useState([]);
  const [klappeRotationX, setKlappeRotationX] = useState([]);
  const [klappeRotationY, setKlappeRotationY] = useState([]);
  const [klappeRotationZ, setKlappeRotationZ] = useState([]);


  useEffect(() => {
    const dbData = ref(db, 'Body')
    onValue(dbData, (data) =>{
      const velocityXData = data.child('/Look/velocityX').val();
      const velocityYData = data.child('/Look/velocityY').val();
      const rigidbodyXData = data.child('/Position/rigidbodyX').val();
      const rigidbodyYData = data.child('/Position/rigidbodyY').val();
      const rigidbodyZData = data.child('/Position/rigidbodyZ').val();
      const drawerPositionX = data.child('/Animation/drawerPositionX').val();
      const drawerPositionZ = data.child('/Animation/drawerPositionZ').val();
      const heckKlappeRotationX = data.child('/Animation/heckKlappeRotationX').val();
      const heckKlappeRotationY = data.child('/Animation/heckKlappeRotationY').val();
      const heckKlappeRotationZ = data.child('/Animation/heckKlappeRotationZ').val();
      const klappeRotationX = data.child('/Animation/klappeRotationX').val();
      const klappeRotationY = data.child('/Animation/klappeRotationY').val();
      const klappeRotationZ = data.child('/Animation/klappeRotationZ').val();

        if(data !== velocityX||data !== velocityY){
          setVelocityX(velocityXData)
          setVelocityY(velocityYData)
          setRigidbodyX(rigidbodyXData)
          setRigidbodyY(rigidbodyYData)
          setRigidbodyZ(rigidbodyZData)
          setDrawerPositionX(drawerPositionX)
          setDrawerPositionZ(drawerPositionZ)
          setHeckKlappeRotationX(heckKlappeRotationX)
          setHeckKlappeRotationY(heckKlappeRotationY)
          setHeckKlappeRotationZ(heckKlappeRotationZ)
          setKlappeRotationX(klappeRotationX)
          setKlappeRotationY(klappeRotationY)
          setKlappeRotationZ(klappeRotationZ)
          
          console.log("data "+ drawerPositionZ)
        }
    }) 
  }, [velocityX, velocityY]);
  
  return (
    <div>
      <h1 className='unterteilung'> Look </h1>
      <div className="cards">
        <Card className='card'>
          <h1 className='cardTitle'>
            Velocity X 
          </h1> 
          <p className='cardText'>
            {velocityX}
          </p>
        </Card>
        <Card className='card'> 
          <h1 className='cardTitle'>
            Velocity Y
          </h1> 
          <p className='cardText'>
            {velocityY}
          </p>
        </Card>
      </div>
      <h1 className='unterteilung'> Position </h1>
      <div className='cards'>
         <Card className='card'> 
        <h1 className='cardTitle'>
          rigidbody X
        </h1>
        <p className='cardText'>
          {rigidbodyX}
        </p>  
      </Card>
      <Card className='card'> 
        <h1 className='cardTitle'> 
          rigidbody Y 
        </h1>
        <p className='cardText'>
          {rigidbodyY}
        </p>
      </Card>
      <Card className='card'> 
        <h1 className='cardTitle'> 
          rigidbody Z 
        </h1> 
        <p className='cardText'>
          {rigidbodyZ}
        </p>
      </Card>
      </div>
      <h1 className='unterteilung'> Animationen </h1>
      <div className='cards'>
         <Card className='card'> 
        <h1 className='cardTitle'>
          drawerPosition X
        </h1>
        <p className='cardText'>
          {drawerPositionX}
        </p>  
      </Card>
      <Card className='card'> 
        <h1 className='cardTitle'> 
          drawerPosition Z
        </h1>
        <p className='cardText'>
          {drawerPositionZ}
        </p>
      </Card>
      <Card className='card'> 
        <h1 className='cardTitle'> 
          heckKlappeRotation X 
        </h1> 
        <p className='cardText'>
          {heckKlappeRotationX}
        </p>
      </Card>
      <Card className='card'> 
        <h1 className='cardTitle'> 
          heckKlappeRotation Y 
        </h1> 
        <p className='cardText'>
          {heckKlappeRotationY}
        </p>
      </Card>
      <Card className='card'> 
        <h1 className='cardTitle'> 
          heckKlappeRotation Z 
        </h1> 
        <p className='cardText'>
          {heckKlappeRotationZ}
        </p>
      </Card>
      </div>
      <div className='cards'>
        <Card className='card'> 
          <h1 className='cardTitle'> 
            klappeRotation X 
          </h1> 
          <p className='cardText'>
            {klappeRotationX}
          </p>
        </Card>
        <Card className='card'> 
          <h1 className='cardTitle'> 
            klappeRotation Y 
          </h1> 
          <p className='cardText'>
            {klappeRotationY}
          </p>
        </Card>
        <Card className='card'> 
          <h1 className='cardTitle'> 
            klappeRotation Z 
          </h1> 
          <p className='cardText'>
            {klappeRotationZ}
          </p>
        </Card>
      </div>
    </div>
  );
}
