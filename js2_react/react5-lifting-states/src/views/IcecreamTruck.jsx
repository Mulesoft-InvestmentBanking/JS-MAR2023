import React, {useState} from 'react'
import IcecreamDashboard from '../components/icecreamtruck/IcecreamDashboard'
import IcecreamForm from '../components/icecreamtruck/IcecreamForm'

const IcecreamTruck = () => {
    const [icecreamList, setIcecreamList] = useState([])

    const receiveOrder = (newOrder) =>{
        setIcecreamList([...icecreamList, newOrder])
    }

    const removeFromList = (deleteIdx) =>{
        const filteredList = icecreamList.filter((eachIcecream, idx)=>idx!== deleteIdx)
        setIcecreamList(filteredList)
    }

    const updateUrgentFromList = (idx, updatedUrgent)=>{
        // get the array index
        // change that element for isUrgent
        const tempList = [...icecreamList]
        tempList[idx].isUrgent = updatedUrgent
        // update list
        setIcecreamList(tempList)
    }

    return (
        <fieldset>
            <legend> IcecreamTruck.jsx</legend>
            <IcecreamForm onNewOrder = {receiveOrder}/>
            <IcecreamDashboard 
                icecreamList={icecreamList} 
                onDelete={removeFromList} 
                onUpdateUrgent = {updateUrgentFromList}
                />

        </fieldset>
    )
}

export default IcecreamTruck