import { Login } from "./src/screens/Login";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
        <StatusBar
          style='light' 
          translucent
        />
        <Login />
    </>
     
  );
}
