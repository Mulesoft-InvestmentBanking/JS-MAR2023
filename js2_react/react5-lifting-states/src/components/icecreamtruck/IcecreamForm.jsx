import React, { useState } from 'react'

// input : state variables  (flavor, quantity, chocoChip)

const IcecreamForm = (props) => {
    const [flavor, setFlavor] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [chocoChip, setChocoChip] = useState(true)

    const handleSubmit =(e)=>{
        e.preventDefault()
        const newIcecream = { flavor, quantity, chocoChip, isUrgent: false}
        props.onNewOrder(newIcecream)
    }

    return (
        <fieldset>
            <legend> IcecreamForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <select name="flavor" value={flavor} onChange={e => setFlavor(e.target.value)}>
                        <option hidden> -- PLEASE CHOOSE A FLAVOR</option>
                        <option value="watermelon"> Watermelon</option>
                        <option value="matcha"> Matcha</option>
                        <option value="strawberry"> Strawberry</option>
                    </select>
                </div>
                <div>
                    <label> Quantity</label>
                    <input type="number" name="quantity" value={quantity} 
                        onChange={e=>setQuantity(e.target.value)} />
                </div>
                <div>
                    <label> Chocolate Chips?</label>
                    <input type="checkbox" name="chocoChip" checked={chocoChip} 
                        onChange={e=>setChocoChip(e.target.checked)} />
                </div>
                <button type="submit"> Add to order</button>
            </form>
        </fieldset>
    )
}

export default IcecreamForm