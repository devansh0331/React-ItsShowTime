import React , {useState , useEffect} from 'react'

import Card from "../card/Card"

function Main() {
    const url = "https://api.tvmaze.com/search/shows?q=all"


    const [shows , setShows] = useState([])
    // const [day , setDays] = useState([])
    // const [imgUrl , setImgUrl] = useState([])

    const getApi= async () => {
        const data = await fetch(url)
        const parsedData = await data.json()
        console.log(parsedData);
        setShows(parsedData)
        


    }

    useEffect(() => {
       getApi()
    }, [])
    


  return (
    <div className="container">
    <h1>It's Show Time</h1> 
    <div className="row">

        {shows.map((item , key) => {
            return <div key={key} className="col-md-4 my-4" >
            <Card href={`/details/${item.show.id}`} name={item.show.name} showImg={item.show.image.original} language={item.show.language} time={item.show.schedule.time} day={item.show.schedule.days[0]}/> 
            </div>
        })}
                
    </div>
    </div>
  )
}

export default Main
