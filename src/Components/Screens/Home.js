    import React from "react";
    import {Link} from 'react-router-dom'
    import home1 from '../../images/home1.png'
    import home3 from '../../images/home3.png'
    import home2 from '../../images/home2.png'
    import home4 from '../../images/home4.png'
    import home5 from '../../images/home5.png'
    const Home=()=>{
        return(
            <div>
                <div class="row">
                <div class="col s12 l1"></div>
                <div class="col s12 m6 l5"> 
                    <img src={home1} alt="none" style={{display:"block",float:"left",width:"80%",height:"80%",margin:"25px auto"}}/>
            </div>     
                <div class="col s12 m6 l5 magic">

                    <img src={home2} alt="none" style={{display:"block",width:"80%",height:"80%",float:"right",margin:"25px 0px"}}/>
                    
                </div></div>
                
                <div className="row" style={{textAlign:"center"}}> <Link to='/services/requestform'>
                <button className="btn-large" name="action" style={{backgroundColor:"#BA0015"}}>Click here to get help from donor</button>
                </Link>
                
                </div>
                <div class="row" style={{marginTop:"20px"}}></div>
                <div class="row" style={{textAlign:'center'}}>

                    <div class="col s6 m6 l3">
                    <button className="btn-large waves-effect" style={{backgroundColor:"#BA0015"}}>500</button>
                    <p><b>500+ lives saved</b></p>
                    </div>
                    <div class="col s6 m6 l3">
                    <button className="btn-large waves-effect" style={{backgroundColor:"#BA0015"}}>300</button>
                    <p><b>over 300+ donors</b></p>                
                    </div>
                    <div class="col s6 m6 l3">
                    <button className="btn-large waves-effect" style={{backgroundColor:"#BA0015"}}>50+</button>
                    <p><b>across 50+ cities</b></p>
                    </div>
                    <div class="col s6 m6 l3">
                    <button className="btn-large waves-effect" style={{backgroundColor:"#BA0015"}}>700</button>
                    <p><b>over 700+ donations</b></p>
                    </div>
                </div>
                <div className="row">
                <div class="col s12 m6 l5"> 
                <img src={home3} style={{display:"block",width:"60%",height:"60%",margin:"50px auto",padding:"1px"}}></img>
                </div>

                <div class="col s12 m6 l6">
                <p className="textstyle">Blood is one of the most essential fluids of our body that helps in the smooth functioning of our body. If the body loses blood in excessive amounts, people to get deadly diseases and even die. Thus, we see how blood donation is literally life-saving which helps people. It is also a sign of humanity that unites people irrespective of caste, creed, religion and more.
                </p>
                <p className="textstyle">Giving blood is a quick and easy way to help people in need. 
                It only takes up to 2 hours and can save multiple lives.</p>
                </div>            
                </div>
                <div className="row">
                <div class="col s12 m1 l1"></div>
                <div class="col s12 m6 l5"> 
                <p className="textstyle">Giving blood is a compassionate motion, and more individuals are getting attracted to it by each spending year. It is a decent sign as it shows that individuals are getting progressively reasonable towards others’ sufferings.
                </p><p className="textstyle">
                As indicated by the World Health Organization (WHO) report, around 117.4 million blood gifts are gathered internationally. It also advances the development of new blood vessels.
                </p>
                </div>
                <div class="col s12 m5 l6">
                <img src={home4} style={{display:"block",width:"60%",height:"60%",margin:"auto auto"}}></img>
                </div>            
                </div>
                <div className="row" style={{marginLeft:"10%"}}>
                <b className="textstyle" style={{padding:"20",color:"#BA0015",margin:"auto auto"}}>Have a look from whom you can receive blood
    and to whom you can donate blood.</b>    
                </div>
                <div className="row">
                <img src={home5} style={{display:"block",width:"60%",height:"60%",margin:"auto auto"}}></img>

                </div>
            </div>
            
        )
    }
    export default Home