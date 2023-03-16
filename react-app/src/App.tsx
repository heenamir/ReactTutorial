import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      <p></p>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <p></p>
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
