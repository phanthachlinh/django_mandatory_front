import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';

const CategoryBar: React.SFC<IProps> = (props:IProps)=>{

  return(
    <Menu mode="horizontal" style={{textAlign: 'center'}}>
      {props.categories.map(
        (category:any)=>{
          return <Menu.Item>{category.name}</Menu.Item>}
        )
      }
    </Menu>
  )
}

interface IProps{
  categories: Array<String>
}

export default CategoryBar
