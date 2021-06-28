import { useState } from "react";

export const useCustomLogic = () => {
  const [customHookComponentHere, setCustomHookComponentHere] = useState("");
  return [customHookComponentHere, setCustomHookComponentHere];
};
