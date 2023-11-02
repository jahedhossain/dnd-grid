import React, { useState } from "react";
import "./App.css";
import Grid from "./grid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 6" },
  ]);

  const moveItem = (draggedId, hoverId) => {
    const updatedItems = [...items];
    // remove dragged item and insert it into new position
    const draggeItem = updatedItems.find((item) => item.id === draggedId);
    updatedItems.splice(updatedItems.indexOf(draggeItem), 1);
    updatedItems.splice(hoverId, 0, draggeItem);
    setItems(updatedItems)
  };

  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <Grid items={items} moveItem={moveItem} />
      </DndProvider>
    </div>
  );
}

export default App;
