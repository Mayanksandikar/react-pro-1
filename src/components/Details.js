

import { createContext, useState } from "react"
import React  from 'react'


export const store = createContext()
 
  const Details = (props) => {
    const [details ,setDetails] = useState([

        {id:1,category:'Tourism', title:'Red Fort', image:'../images/tourism1.jpg', text:"The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. ", date:'march 24, 2022'},
    
        {id:2,category:'Tourism', title:'Bengaluru', image:'../images/tourism2.jpg', text:"Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building.", date:'march 26, 2021'},
    
    
        {id:3,category:'Tourism', title:'Sikkim small but Beautiful', image:'../images/tourism3.jpg', text:"The Kingdom of Sikkim was founded by the Namgyal dynasty in the 17th century. It was ruled by Buddhist priest-kings known as the Chogyal. It became a princely state of British India in 1890. Following Indian independence, Sikkim continued its protectorate status with the Union of India after 1947, and the Republic of India after 1950", date:'January 27, 2020'},
    
    
        {id:4,category:'Tourism', title:'Manali', image:'../images/tourism4.jpg', text:"Manali is a town in the Indian state of Himachal Pradesh. It is situated in the northern end of the Kullu Valley, formed by the Beas River.", date:'July 24, 2022'},
    
        {id:5,category:'Fitness', title:'Sweat now shine later', image:'../images/fitness1.jpg', text:"Need plenty of room for planning your workout routine and track your exercises and weight loss process? Our new Workout Planner is finally here! This stylish and minimal fitness journal will keep you motivated everywhere you go.", date:'August 29, 2018'},

        {id:6,category:'Fitness', title:'Balance', image:'../images/fitness2.jpg', text:"Though it might not cross your mind, you need good balance to do just about everything, including walking, getting out of a chair, and leaning over to tie your shoes.", date:'November 24, 2019'},

        {id:7,category:'Fitness', title:'Sprint', image:'../images/fitness3.jpg', text:"If you want an efficient way to burn calories, increase your cardiovascular and muscular endurance, and take your physical fitness to the next level, then consider adding sprints and intervals to your workout routine.", date:'March 11, 2019'},

        {id:8,category:'Technology', title:'construction technology', image:'../images/tech1.jpg', text:"By definition, construction technology is the “collection of innovative tools, machinery, modifications, software, etc. used during the construction phase of a project”."},

        {id:9,category:'Technology', title:'energy power technology.', image:'../images/tech2.jpg', text:"The E&P Technologies CoI purpose is to provide technologies to enable intelligent power & energy management to enhance operational effectiveness. Electromechanical Conversion: Increase the power density, efficiency, and robustness of motors, generators, and actuators while also reducing their life cycle costs.", date:'May 01, 2015'},

        {id:10,category:'Technology', title:'Artificial Intelligence', image:'../images/tech3.jpg', text:"Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative.", date:'March 14, 2017'},

        {id:11,category:'Bollywood', title:'Pushpa: The Rise', image:'../images/b3.jpg', text:"Mangalam Srinu, a merciless dealer who manages the red sandalwood syndicate entrusts Konda Reddy to keep 200 tons of his stock safe. As Konda's younger brother, Jolly Reddy is deemed incompetent, Pushpa is given the job. Govindappa attempts to raid them but Pushpa throws all the logs into the river, saving it from being seized. At a party, Pushpa overhears that Srinu is selling the wood at a much higher rate than what they're paid. He asks Konda to demand a fair share but backs down as going against Srinu seems risky.", date:'January 11, 2022'},

        {id:12,category:'Bollywood', title:'RRR', image:'../images/b1.jpg', text:"Rajamouli came across stories about the lives of Rama Raju and Bheem and connected the coincidences between them, imagining what would have happened had they met, and been friends. The film was formally announced in March 2018", date:'March 11, 2022'},

        {id:13,category:'Bollywood', title:'sarkaru vaari paata', image:'../images/b2.jpg', text:"Mahesh aka Mahi is a finance agent, who has set up his own loan agency, named Mahi Finance Corporation, in Miami. He turns his debtors' life into hell when they fail to repay their debts.", date:'may 21, 2022'},

        {id:14,category:'Food', title:'Idli', image:'../images/food1.jpg', text:"A precursor of the modern idli is mentioned in several ancient Indian works. Vaddaradhane, a 920 CE Kannada language work by Shivakotiacharya mentions iddalige, prepared only from a black gram batter.", date:'June 29, 2011'},

        {id:15,category:'Food', title:'Masala Dosa', image:'../images/food2.jpg', text:"This classic Masala dosa recipe makes perfectly light, soft and crispy crepes stuffed with a savory, wonderfully spiced potato and onion filling. It might take a bit of time to make delicious hotel style masala dosa, but with my step-by-step instructions and photos I promise it will be easier than you think and is so worth the effort!", date:'February 08, 2013'},

        {id:16,category:'Food', title:'Pav Bhaji', image:'../images/food3.jpg', text:"Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread. Vegetables in the curry may commonly include potatoes, onions, carrots, chillies, peas, bell peppers and tomatoes.", date:'September 25, 2016'},

        {id:17,category:'Fitness', title:'Aerobic', image:'../images/aerobic.jpg', text:"Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness.", date:'October 17, 2017'},

        {id:18,category:'', title:'', image:'', text:"October", date:'March 21, 2019'},
    
    ])
    return (
        <div>
           <store.Provider value ={[details,setDetails]}> 
          {props.children}
           </ store.Provider >
        </div>
    )
}

export default Details

