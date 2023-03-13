import React from 'react'

const IcecreamDashboard = (props) => {
    const handleDelete =(idx)=>{
        // call the backend to remove from database
        props.onDelete(idx)
    }

    const toggleUrgent = (e, idx )=>{
        props.onUpdateUrgent(e.target.checked, idx)

    }
    return (
        <fieldset>
            <legend> IcecreamDashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th> Flavor</th>
                        <th> Quantity</th>
                        <th> Chocolate chip?</th>
                        <th> Urgent?</th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.icecreamList.map((eachIcecream, idx) => (
                            <tr key={idx} style={eachIcecream.isUrgent?{color:"red"} : {color:"blue"}}>
                                <td> {eachIcecream.flavor}</td>
                                <td> {eachIcecream.quantity}</td>
                                <td> {eachIcecream.chocoChip ? "Yes" : "No"}</td>
                                <td> 
                                    <input type="checkbox" 
                                        checked={eachIcecream.isUrgent} 
                                        onChange={(e)=>toggleUrgent(e, idx)}/>
                                </td>
                                <td><button onClick={()=>handleDelete(idx)} > Delete</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default IcecreamDashboard