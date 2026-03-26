import { useState, useEffect } from "react";
import { onSnapshot,collection } from "firebase/firestore";
import {db} from '../firebase';

export const AlbumsList = () => {
  //These state are create just for your convience you can create modify or delete the state as per your requirement.

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [albumAddLoading, setAlbumAddLoading] = useState(false);
  // create function to get all the album from the firebase.
  useEffect(() => {
    const unsub=onSnapshot(collection(db,"albums"),(doc)=>{
      
    })
  }, []);

  // create function to handle adding of the album

  return <></>;
};
