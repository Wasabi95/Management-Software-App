import React from "react";
//import "@aws-amplify/ui-react/styles.css";
//import { withAuthenticator } from "@aws-amplify/ui-react";

import Dashboard from "../Dashboard"; // Import your Dashboard component here

const App = (/* { signOut } */) => {
  return (
    <div>
     
      <Dashboard /> {/* Render the Dashboard component directly */}
      
    </div>
  );
};

export default App;



//export default withAuthenticator(App);