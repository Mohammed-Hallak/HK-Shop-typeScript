import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { Category } from "../../store/categories/category.types";

let firebaseConfig = {
  apiKey: "AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk",
  authDomain: "crwn-clothing-db-98d4d.firebaseapp.com",
  projectId: "crwn-clothing-db-98d4d",
  storageBucket: "crwn-clothing-db-98d4d.appspot.com",
  messagingSenderId: "626766232035",
  appId: "1:626766232035:web:506621582dab103a4d08d6",
};

let firebaseApp = initializeApp(firebaseConfig);

let googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export let auth = getAuth();
export let signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export let signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export let db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export let addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  let batch = writeBatch(db);
  let collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    let docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export let getCategoriesAndDocuments = async (): Promise<Category[]> => {
  let collectionRef = collection(db, "categories");
  let q = query(collectionRef);

  let querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );

  // return categoryMap;
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export let createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  let userDocRef = doc(db, "users", userAuth.uid);

  let userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    let { displayName, email } = userAuth;
    let createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export let createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export let signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export let signOutUser = async () => await signOut(auth);

export let onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export let getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    let unSubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unSubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
