"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Modal,
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

type inventoryListType = { name: string; [key: string]: any }[];

export default function Home() {
  const [inventory, setInventory] = useState<inventoryListType>([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  return (
    <Box>
      <Typography variant="h1">Inventory Management</Typography>
    </Box>
  );
}
