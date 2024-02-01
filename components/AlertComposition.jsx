import React, { useEffect } from "react";
import { Alert, AlertDescription } from "./ui/alert";
import { RocketIcon } from "lucide-react";
import { useAlert } from "@/lib/context/AlertContext";

const AlertComposition = () => {
  const { alert, setAlert } = useAlert();

  useEffect(() => {
    if (alert !== "") {
      document.getElementById("alert").classList.add("bottom-5");
      document.getElementById("alert").classList.remove("-bottom-12");
      setTimeout(() => {
        document.getElementById("alert").classList.remove("bottom-5");
        document.getElementById("alert").classList.add("-bottom-12");
        setAlert("");
      }, 3000);
    }
  }, [alert]);

  return (
    <Alert
      id="alert"
      className="fixed transition-all duration-300 -bottom-12 left-5 max-w-96 w-auto h-auto flex items-center justify-start shadow-sm shadow-gray-800 dark:shadow-gray-500"
    >
      <RocketIcon size={12} />
      <AlertDescription className="text-xs">{alert}</AlertDescription>
    </Alert>
  );
};

export default AlertComposition;
