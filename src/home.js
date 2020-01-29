import React ,{Component} from 'react';
import './App.css';
import image1 from './uniform/nike-รองเท้าฟุตบอล.jpg';
import image2 from './uniform/Adidas-Predator-18-2-FG-Energy-Mode.jpg';
import image3 from './uniform/Adidas-Predator-19-3-Kids-302-Redirect.jpg';
import image4 from './uniform/JTRM29-HP.jpg';
import firebase from './firebase'
import image5 from './uniform/NEYMAR-HP (1).jpg';
import image6 from './uniform/EOS19-1.jpg';
import image7 from './uniform/F50-HP.jpg';
import image8 from './uniform/ninja vs samurai - hp.jpg';
import { Slide } from 'react-slideshow-image';
import Banner from 'react-js-banner'; 
import image10 from './uniform/mizuno_rebula_3_japan_p1ga196001275__01_new.jpg';
import image11 from './uniform/mizuno_morelia_neo_ii_-_red-black_p1ga195062__00.jpg';
import image12 from './uniform/morelia_neo_ii_mij_-_black-white-red_p1ga165001__01_new.jpg';
import image13 from './uniform/nike_nk_airlock_street_x_-_white_bright_crimson_black_sc3972-100__00.jpg';
import image14 from './uniform/adidas_finale_rm_cpt_-_hiregr-nindig-white_dy2541__01_new.jpg';
import image15 from './uniform/adidas_finale_ttrn_-_white-brcyan-syello_dy2551__01jaaa_new.jpg';
import image16 from './uniform/apd_tigris_v_2_-_white_yellow_gk23ty23__01_new.jpg';
import image17 from './uniform/adidas_pred_pro_-_brcyan_silvmt_syello_dy2595__01_new (1).jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
    constructor(props){
      super(props)
       this.state={
        items:[],
        item_id:'',
      prefix:"",
      name:"",
      LastName:"",
      Date:"",
      email:"",
      phone:"",
      Number:""
  };
    }
    
    render() {
      
    const slideImages = [
      image8,
      image7,
      image6,
      image5,
      image4
    ];
     
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }
     
      return (
        <header class="App-header1 fon">
          
        <div className="slide-container mt-5">
        <Slide {...properties}>
            <div className="each-fade">
              <div className="image-container">
                <img src={slideImages[0]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={slideImages[1]} width="500px"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={slideImages[2]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={slideImages[3]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={slideImages[4]} />
              </div>
            </div>
            </Slide>
        </div>
        <div className="aaa mina p"><h1 className="text-center ">สินค้าใหม่</h1>
    <div class="row mt-5 ">
    <div className="col">
        <Link to="/show2"><img className="rounded" src={image10} width="200"></img></Link>
                <p>MIZUNO Campo 18.2 FG</p> 
                <p className="t">฿1,000</p>
        </div>
        <div className="col">
        <Link to="/show3"><img className="rounded" src={image11} width="200"></img></Link>
                <p>MIZUNO MOREL NEO II JAPAN </p>
                <p className="t">฿1,399</p>
        </div>
        <div className="col">
        <Link to="/show4"><img className="rounded" src={image12} width="200"></img></Link>
                <p>MIZUNO MOREL NEO 18.2 FG</p>
                <p className="t">฿1,999</p>
        </div>
        <div className="col ">
        <Link to="/football1"><img className="rounded" src={image13} width="200" ></img></Link>
                <p>NIKE AIRLOCK League ball</p>
                <p className="t">฿1,200</p>
        </div>
    </div>

    <div class="row mt-5">
    <div className="col">
        <Link to="/football2"><img className="rounded" src={image14} width="200" ></img></Link>
                <p>ADIDAS FINALE RM CPT </p>
                <p className="t">฿1,300</p>
        </div>
        <div className="col">
        <Link to="/football3"><img className="rounded" src={image15} width="200"></img></Link>
                <p>ADIDAS FINALE OMB WHITE</p>
                <p className="t">฿4,200</p>
        </div>
        <div className="col ">
        <Link to="/football5"><img className="rounded" src={image16} width="200" ></img></Link>
                <p>APD SENTINEL-BLACK/YELLOW</p>
                <p className="t">฿1,500</p>
        </div>
        <div className="col">
        <Link to="/football8"><img className="rounded" src={image17} width="200"></img></Link>
                <p>ADIDAS PREDATOR PRO</p>
                <p className="t">฿3,000</p>
        </div>
    </div>
 </div>
 <div class="middle lo">
      <a class="btn1" href="https://www.facebook.com/spanner.kaew">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="btn1" href="#">
        <i class="fab fa-twitter"></i> 
      </a>
      <a class="btn1" href="https://myaccount.google.com/?utm_source=OGB&tab=rk&utm_medium=act&pli=1">
        <i class="fab fa-google"></i>
      </a>
      <a class="btn1" href="https://www.instagram.com/augkaew/">
        <i class="fab fa-instagram"></i>
      </a>
      <a class="btn1" href="https://www.youtube.com/channel/UCbKQkE6Yj_xH1VTjDWgG4WQ?view_as=subscriber">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
        </header>
      )
    
    }
  }
  export default App;