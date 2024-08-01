import { firestore } from "@/app/firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

export type InventoryItem = { name: string; [key: string]: any };

export const updateInventory = async (): Promise<InventoryItem[]> => {
  const snapShot = query(collection(firestore, "inventory"));
  const docs = await getDocs(snapShot);
  const inventoryList: InventoryItem[] = [];
  docs.forEach((doc) => {
    inventoryList.push({ name: doc.id, ...doc.data() });
  });
  return inventoryList;
};

export const removeItem = async (item: string): Promise<void> => {
  const docRef = doc(firestore, "inventory", item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    if (quantity > 1) {
      await setDoc(docRef, { quantity: quantity - 1 });
    } else {
      await deleteDoc(docRef);
    }
  }
};

export const addItem = async (item: string): Promise<void> => {
  const docRef = doc(firestore, "inventory", item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    await setDoc(docRef, { quantity: quantity + 1 });
  } else {
    await setDoc(docRef, { quantity: 1 });
  }
};
