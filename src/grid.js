import React from "react";
import { useDrop } from "react-dnd";
import GridItem from "./gridItem";

const Grid = ({ items, moveItem }) => {
  const [, drop] = useDrop({
    accept: "GRID_ITEM",
    drop: (draggedItem, monitor) => {
    },
  });

  return (
    <div>
      <ul className='list' ref={drop}>
        {items.map((item, index) => (
          <GridItem key={item.id} {...item} moveItem={moveItem} index={index}/>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
