import React, { useEffect, useState } from 'react'
import './style.css'

const Todo = () => {

    const getLocalData = ()=>{
        const list = localStorage.getItem("My Task");

        if(list){
            return(JSON.parse(list))
        }

        else{
            return []
        }
    }

    const[inputData, setinputData] = useState("");

    // const [item, setItems] = useState([]);

    const [item, setItems] = useState(getLocalData());

   const[edititem, setEditItem] = useState("");

   const [togglebtn, setToggleBtn] = useState(false);

    // how to add item
    

    const addItem = ()=>{
        if(!inputData){
            alert("Please add your task")
        }

        else if(inputData && togglebtn){
            setItems(item.map((currElem)=>{
                if(currElem.id === edititem){
                    return {...currElem, name: inputData}
                }

                return currElem
                
            }))

            setinputData("")
  setEditItem(null)
  setToggleBtn(false)
        }
        else{
            const myNewItem = {
                id:new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...item, myNewItem])
            setinputData("")
        }
    }

    // edit the item

    const editItem = (index)=>{
  const itemtoEdit = item.find((currElem)=>{
    return currElem.id === index
  })

  setinputData(itemtoEdit.name)
  setEditItem(index)
  setToggleBtn(true)
    }

    // how to delete item

    const deleteItem = (index)=>{
        const updateItem = item.filter((currElem)=>{
            return currElem.id !== index 
        })
        setItems(updateItem)
    }

    // how to remove all the items

    const removeAll = ()=>{
        setItems([])
    }

    // adding local storage

    useEffect(()=>{
           localStorage.setItem("My Task", JSON.stringify(item))
    }, [item])

  return (

   

    <>

<div className="my-own-icon">
<a href=""><i className="fab fa-github"></i></a>
</div>

        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="todo" />
                    <figcaption>Add Your List Item Here</figcaption>
                </figure>

<div className="addItems">
    <input type="text" placeholder='✍️ Enter Your Task Here....' className='form-control' value={inputData} onChange={(e) =>{
        setinputData(e.target.value);
    }} />
    {togglebtn ? (<i className="fa fa-edit add-btn" onClick={addItem} ></i>) : <i className="fa fa-plus add-btn" onClick={addItem} ></i> }
    
</div>

{/* our items that we add */}

<div className="showItems">
{
    item.map((currElem)=>{
        return(<div className="eachItem" key={currElem.id}>
        <h3>{currElem.name}</h3>
        <div className="todo-btn">
        <i className="fas fa-edit" onClick={()=>editItem(currElem.id)}></i>
        <i className="fas fa-trash-alt" onClick={()=> deleteItem(currElem.id)}></i>
        </div>
    </div>)
    })
}
    
</div>

<div className="showItems">
    <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
        <span>Check List</span>
    </button>
</div>

            </div>
        </div>
    </>
  )
}

export default Todo
