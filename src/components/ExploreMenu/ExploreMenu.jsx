import React from 'react' ;
import './ExploreMenu.css' ;
import { menu_list } from '../../assets/assets';

export const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring  a delectable array of dishes crafted with the finest ingredients and culinary experience that satisfies your cravings and elevate your dining experience , one delicious meal at a time </p>
    <div className='explore-menu-list'>
          {menu_list.map((itemm, index) => {
            return (
                <div onClick={() => setCategory(prev => prev===itemm.menu_name ?"All" : itemm.menu_name)} key={index} className='explore-menu-list-item' >
                   <img className={category===itemm.menu_name?"active" :"" } src={itemm.menu_image} alt='' />
                   <p>{itemm.menu_name}</p>

                </div>
            )

          })}
    </div>

    </div>
  )
}
