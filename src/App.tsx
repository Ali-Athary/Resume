import { Button, Stack } from "@mui/material";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Resume from "./components/Resume";

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AliAthary-Resume",
    removeAfterPrint: false,
  });

  return (
    <Stack spacing={2} alignItems="center" p={2}>
      {/* Content to print */}
      <div ref={componentRef} style={{ width: "100%" }}>
        <Resume />
      </div>

      {/* Button */}
      <Button variant="contained" onClick={handlePrint}>
        Download PDF
      </Button>
    </Stack>
  );
}

export default App;
