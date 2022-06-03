import { Link } from 'react-router-dom';


import React,{ useContext } from 'react'
import {store} from "./Details"

const Bolly = () => {
    const [details] =useContext(store)
    return (
        <>
        <div className='main'>
            {/* <div className='headcontainer'> */}


            {/* <div className='heading' style={{ width: '20%' }}>Top Posts<div className='line'></div></div> */}

            {/* </div> */}
            <div className='tcontainer'>
                <div className='heading' style={{ width: '40%' }}>
                    Bollywood
                    <div className='line'></div>
                </div>
                {details.filter((art)=> {
                    if(art.category==='Bollywood'){
                        return art;
                    }
                }).map((art) => (
                    // key={art.index}
                    <Link to={'/article/'+art.id} style={{ textDecoration: 'none', color:'black' }}  >
                        {/* {const back=`${art.image}`} */}
                        <div className='tdiv1'>

                            <div className='image' style={{ backgroundImage: "url(" + `${art.image}` + ")" }} >

                            </div>
                            <div className='articleshort'>
                                {/* {article.title} */}
                                <div style={{ fontSize: '35px', fontWeight: '900' }}>{art.title}</div>
                                <div style={{ fontSize: '15px' }}>{art.text}</div>
                                <div className='date'>
                                    Bollywood / {art.date}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='tcontainerA'>
                <div className='heading' style={{ width: '250px' }}>Top Posts<div className='line'></div></div>
                {details.filter((art)=>{
                    if(art.category==='Bollywood'){
                        return art;
                    }
                }).map((art) => (
                    // key={art.index}
                    <Link to={'/article/'+art.id} style={{ textDecoration: 'none', color:'black' }}  >
                        {/* {const back=`${art.image}`} */}
                        <div className='tdiv2'>

                            <div className='imageA' style={{ backgroundImage: "url(" + `${art.image}` + ")" }} >

                            </div>
                            <div className='articleshortA'>
                                {/* {article.title} */}
                                <div style={{ fontSize: '20px', fontWeight: '900' }}>{art.title}</div>
                                {/* <div style={{ fontSize: '10px' }}>{art.text}</div> */}
                                <div className='dateA'>
                                    Bollywood / {art.date}
                                </div>
                            </div>
                        </div>

                    </Link>
                ))}
                <div style={{border:'4px black solid', height:'400px', marginTop:'25px'}}> Advertisement</div>

            </div>
        </div>
    </>
    )
}

export default Bolly

