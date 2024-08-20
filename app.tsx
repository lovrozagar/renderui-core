import {
  Button,
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components";
import { DrawerClose } from "@/components/drawer/components/drawer-close";
import { DrawerDescription } from "@/components/drawer/components/drawer-description";
import { DrawerHeader } from "@/components/drawer/components/drawer-header";
import { DrawerTitle } from "@/components/drawer/components/drawer-title";
import React, { useState } from "react";

const App = () => {
  const [state, setValue] = useState("");

  return (
    <div className="h-screen w-full flex justify-center items-center gap-8">
      {/* <Popover shouldForwardOutsideInteraction>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <Button>Button</Button>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <Button>Button</Button>
        </PopoverContent>
      </Popover>
      <Select>
        <SelectTrigger>Trigger</SelectTrigger>
        <SelectContent hasScroll={false}>
          <SelectItem value='item-1'>Item</SelectItem>
          <SelectItem value='item-2'>Item 2</SelectItem>
        </SelectContent>
      </Select> */}
      {/* <Combobox>
        <ComboboxTrigger>Trigger</ComboboxTrigger>
        <ComboboxContent hasScroll={false} emptyContent={'No data.'}>
          <ComboboxItem value='item-1'>Item</ComboboxItem>
          <ComboboxItem value='item-2'>Item 2</ComboboxItem>
        </ComboboxContent>
      </Combobox> */}
      <Drawer>
        <DrawerTrigger>Trigger</DrawerTrigger>
        <DrawerContent>
          <DrawerClose>X</DrawerClose>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export { App };
