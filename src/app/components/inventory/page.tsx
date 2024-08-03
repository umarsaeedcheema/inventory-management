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

import {
  InventoryItem,
  updateInventory,
  addItem,
  removeItem,
} from "./inventory-service";

export default function Home() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const fetchInventory = async () => {
    const inventoryList = await updateInventory();
    setInventory(inventoryList);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleRemove = async (item: string) => {
    await removeItem(item);
    fetchInventory();
  };

  const handleAdd = async () => {
    await addItem(itemName);
    setItemName("");
    handleClose();
    fetchInventory();
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
            />
            <Button variant="outlined" onClick={handleAdd}>
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Button variant="contained" onClick={handleOpen}>
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
          {inventory.map((item, index) => (
            <Box
              key={index}
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
                onClick={() => handleRemove(item.name)}
              >
                Remove
              </Button>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
