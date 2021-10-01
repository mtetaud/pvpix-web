import { Button} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

function Authentication() {
  const { authenticate, logout, isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return (
      <div>
        <Button
          onClick={() => {
            logout();
          }}
        >
          logout
        </Button>
        <div>Welcome</div>
      </div>
    );
  } else {
    return (
      <div>
        <Button
          onClick={() => {
            authenticate();
          }}
        >authenticate</Button>
      </div>
    );
  }
}

export default Authentication;
