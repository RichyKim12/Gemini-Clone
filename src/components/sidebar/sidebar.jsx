import React from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets';

const sidebar = () => {
  return (
    <div classname='sidebar'>
        <div classname = "top"> 
            <img src = {assets.menu_icon} alt=""/>
        </div>
        <div classname = "bottom"> 

        </div>
    </div>
  )
}

export default sidebar