import { Button } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return <div>Welcome</div>;
  }

  return (
    <div>
      <div>PvPix</div>
      <Button onClick={() => authenticate()}></Button>
    </div>
  );
}

export default App;
