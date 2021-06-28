import { createContext, useContext } from "react";

export type TemplateContent = {
  contextContent: string;
};
export const TemplateContext = createContext<TemplateContent>(
  {} as TemplateContent
);
export const useTemplateContext = () => useContext(TemplateContext);
