import React, { useState } from "react";
import CreateElement from "./CreateElement"

const Element = (props) =>{
    const [lastId, setLastId] = useState(0);

    const savedED = (entered) => {
        const expenseData = {
          ...entered,
          id: lastId
        };
        setLastId((prevId) => prevId + 1);
        props.onAddExpense(expenseData);
    };


    return(
        <div>
            <CreateElement onSaveExpenseData={savedED} />
        </div>
    )
}
export default Element;