import { storage } from "../firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";

export default function getDownloadURI(path) {
    return getDownloadURL(ref(storage, path))
}