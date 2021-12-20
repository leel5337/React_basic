import React from "react";
import Users from "./Users";
import { UsersProvider} from "./userContext";
import User from "./User";

// App.js에서 해당 context를 적용하여준다

function App() {
  return (
    <UsersProvider>
      <User />
    </UsersProvider>
  );
}

export default App;
