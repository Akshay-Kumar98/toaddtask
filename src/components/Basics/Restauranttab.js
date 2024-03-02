import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((currElem)=>{
 return currElem.category
})
), "All"
]

// spread-operator used ...

console.log(uniqueList)

const Restauranttab = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList)
  // return (
  //   <div>
  //   <h1>hello </h1>
  //   </div>
  // )

  const filterItem = (category) =>{

    if(category === "All"){
      setMenuData(Menu)
      return ;
    }

       const updateList = Menu.filter((currElem)=>{
        return  currElem.category === category;
       })

       setMenuData(updateList);
  }

  return(
    <>


  <Navbar filterItem = {filterItem} menuList={menuList}/>
      <MenuCard menuData = {menuData} />
    </>
  )

}

export default Restauranttab
