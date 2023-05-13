import React, { useState } from "react";
import Item from "./elements/2/item";
import Element from "./elements/1/element";
function App() {
  const [items, newItem] = useState([]);

  function exp(event) {
    console.log('in app', event);
    newItem(e =>{ 
      return[...e, event];
    })
    console.log(items);
  }

  return (
    <div>
      <Element onAddExpense={exp}/>
      <div id="itemy">
        {items.map((item, index) => {
          return(
            <Item key={index} id='0' B={item.band} A={item.album} Img={item.url}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
