// src/types/react-to-print.d.ts
import * as React from "react";

declare module "react-to-print" {
  // a simple compatible ReactInstance alias
  export type ReactPrintContent = React.ReactInstance | null;

  export interface UseReactToPrintOptions {
    content?: () => ReactPrintContent;
    documentTitle?: string;
    onBeforeGetContent?: (() => void | Promise<void | string>) | undefined;
    onBeforePrint?: (() => void) | undefined;
    onAfterPrint?: (() => void) | undefined;
    removeAfterPrint?: boolean | undefined;
    copyStyles?: boolean | undefined;
  }

  // default export is the hook
  export default function useReactToPrint(
    options?: UseReactToPrintOptions
  ): () => void;

  // named export exists in the library
  export const PrintContextConsumer: React.FC;
}
