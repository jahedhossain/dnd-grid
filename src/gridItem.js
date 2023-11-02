import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const GridItem = ({ id, text, moveItem, index }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "GRID_ITEM",
    drop: (draggedItem, monitor) => {
      const draggedId  =  draggedItem.id;
        if (draggedId !== index) {
        moveItem(draggedId, index);
      }
    },
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        moveItem(draggedId, index);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "GRID_ITEM",
    item: { id, text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <li
      ref={ref}
      style={{
        opacity,
      }}
    >
      {text}
    </li>
  );
};

export default GridItem;
