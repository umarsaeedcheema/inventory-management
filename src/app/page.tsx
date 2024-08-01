"use client";

import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { firestore } from "@/app/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

type inventoryListType = { name: string; [key: string]: any }[];

export default function Home() {
  const [inventory, setInventory] = useState<inventoryListType>([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const updateInventory = async () => {
    const snapShot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapShot);
    const inventoryList: inventoryListType = [];
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() });
    });
    setInventory(inventoryList);
    //
    console.log(inventoryList);
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const removeItem = async (item: string) => {
    const docRef = doc(firestore, "inventory", item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity > 1) {
        await setDoc(docRef, { quantity: quantity - 1 });
      } else {
        await deleteDoc(docRef);
      }
      await updateInventory();
    }
  };

  const addItem = async (item: string) => {
    const docRef = doc(firestore, "inventory", item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
      await updateInventory();
    } else {
      await setDoc(docRef, { quantity: 1 });
      await updateInventory();
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Modal open={open} onClose={handleClose}>
        <Box
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          width={400}
          bgcolor={"white"}
          border={"2px solid #000"}
          p={4}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography variant="h2">Add items</Typography>
          <Stack width="100%" direction={"row"} spacing={2}>
            <TextField
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            ></TextField>
            <Button
              variant="outlined"
              onClick={() => {
                addItem(itemName);
                setItemName("");
                handleClose();
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Button
        variant="contained"
        onClick={() => {
          handleOpen();
        }}
      >
        Add New Item
      </Button>
      <Box border={"1px solid black"}>
        <Box
          width={"800px"}
          height={"100px"}
          bgcolor={"GrayText"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h2">Inventory Items</Typography>
        </Box>

        <Stack width={"800px"} height={"300px"} spacing={2} overflow={"auto"}>
          {inventory.map((item) => {
            return (
              <Box
                key={item.name}
                width={"100%"}
                minHeight={"150px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  variant="h3"
                  textAlign={"center"}
                  textTransform={"capitalize"}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h3"
                  textAlign={"center"}
                  textTransform={"capitalize"}
                >
                  {item.quantity}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    removeItem(item.name);
                  }}
                >
                  Remove
                </Button>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
