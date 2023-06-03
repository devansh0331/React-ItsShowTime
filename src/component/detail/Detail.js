import React ,{useState , useEffect} from 'react'
import  {useParams} from 'react-router-dom'
import "./Detail.css"

function Detail(props) {
    const {id} = useParams()
    console.log(id);
    
    const urlNew = `https://api.tvmaze.com/shows/${id}`

    const [detail , setDetail] = useState([])
    const [image , setImage] = useState([])
    const [open , setOpen] = useState(false)
    const [schedule , setSchedule] = useState([])
    const [msg , setMsg] = useState(false)
    const getApiDetails= async () => {
        const data = await fetch(urlNew)
        const parsedData = await data.json()
        console.log(parsedData);
        setDetail(parsedData)
        setImage(parsedData.image)
        setSchedule(parsedData.schedule)
        
        


    }

    useEffect(() => {
       getApiDetails()
    })

    const handleOnClick = () => {
        setOpen(!open)
    }

    const handleSubmit = () => {
        setMsg(!msg)
    }
    
  return (
    <>
    <div id="details" className={open?"open":""}>
        <span id="nameSpan">{detail.name}</span>
      <div id="dsection1">
        <div>
            <span id="summarySpan">Summary</span>
        <div dangerouslySetInnerHTML={{ __html: detail.summary}}></div>
            
        </div>
        <img src={image.original} alt=""/>
      </div>
      <div className="moreDetail">
        <span><strong>Type</strong> : {detail.type}</span>
        <span><strong>Language</strong> : {detail.language}</span>
        <span><strong>Status</strong> : {detail.status}</span>
        <span><strong>Runtime</strong> : {detail.runtime}</span>
        <span><strong>Premiered</strong> : {detail.premiered}</span>
        <span><strong>Time</strong> : {schedule.time}</span>
        <span><strong>Day</strong> : {schedule.days}</span>
        <button type="" onClick={handleOnClick}>Book Now</button>
  
        
      </div>
      <div className="detailBtn">
        
      </div>

      
    </div>
    <div className={open ? " form" : "form open"}>
        <span><strong>"{detail.name}"</strong> <br/>Show Booking Form</span>
    <form>
        <input type="" name="" value="" placeholder="Full Name"/>
        <input type="" name="" value="" placeholder="Email"/>
        <input type="" name="" value="" placeholder="Contact Number"/>
        <input type="" name="" value="" placeholder="Gender"/>
        <button onClick={handleSubmit}>Submit</button>
       
    </form>
    <div className={msg?"msg":"msg succ"}>
        <span>Booking Confirmed</span>
    </div>
  </div>
    </>
  )
}

export default Detail
