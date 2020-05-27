 declare var data:any
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import CategoryBar from './components/categoryBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
const App:React.SFC = ()=>{

  let [categories, setCategories] = useState([])
  let [shopConfig, setShopConfig] = useState<{ID?:string,name?:string,logo?:string}>({})
  useEffect(()=>{
    if(categories.length ===0)
      axios.get('http://127.0.0.1:8000/shops/categories/'+data.ID).then((res:any)=>{
        setCategories(
          res.data.map((res:any)=>{return {ID:res.ID, name: res.name}})
        )
      })
      if(Object.keys(shopConfig).length ===0 && shopConfig!== null)
        axios.get('http://127.0.0.1:8000/shops/'+data.ID).then((res:any)=>{
          console.log(res)
          setShopConfig(
            res.data
          )
        })
  })

  return (
      <Router>
        <>
        {shopConfig?.logo && <img style={logoStyle} src={"http://127.0.0.1:8000/"+shopConfig?.logo} />}

        <CategoryBar categories={categories}/>
        <Switch>

          <div></div>
        </Switch>
      </>
    </Router>
  )
}

const logoStyle = {
  maxWidth: '500px',
  left: '50%',
  position: "relative" as "relative",
  transform: 'translateX(-50%)',
  padding: '50px'
}
export default App
