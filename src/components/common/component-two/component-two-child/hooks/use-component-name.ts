import { useState } from "react";

export const useComponentName = () => {
  const [customHookComponentHere, setCustomHookComponentHere] = useState("");
  return [customHookComponentHere, setCustomHookComponentHere];
};
