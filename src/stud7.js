import React ,{Component} from 'react';
import './App.css';
import image1 from './uniform/nike-vapor-13-elite-fg11---blue-herowhite-obsidian-_aq4176-414__0130.jpg';
import firebase from './firebase'

class App extends Component {
    constructor(props){
      super(props)
       this.state={
        items:[],
        item_id:'',
        title:"",
        name:'NIKE MERCURIAL VAPOR  BLUEHERO/OBSIDIAN/WHITE',
        price:"฿2,100",
        size:'',
        Number:"",
        plus:0,
  };
  this.handleSubmit = this.handleSubmit.bind(this)
}
handleSubmit(e){  
  e.preventDefault();        
   const itemsRef = firebase.database().ref('buy')   
     const item =   {
           name : this.state.name,
           price :this.state.price,
           size : this.state.size,
           plus :this.state.plus
                    }      
                    itemsRef.push(item)      
                    this.setState({item_id:'',size:'',plus:0})
      }
    
  change =(e) =>{
      this.setState({
              [e.target.name]: e.target.value
      });       
  };
  handleUpdate3 = (item_id = null , prefix = null , name = null,LastName = null,Date = null,email = null,phone=null,Number=null) => {
    this.setState({item_id,prefix,name,LastName,Date,email,phone,Number})
  }
  myClick= (e)=> {
    alert("สั่งซื้อสินค้าเรียบร้อยแล้ว");
  }
  updateItem3 = () =>{
  
    var obj = { prefix:this.state.prefix,name:this.state.name,LastName:this.state.LastName,Date:this.state.Date,email:this.state.email,phone:this.state.phone,Number:this.state.Number }
  
    const itemsRef = firebase.database().ref('/info')
  
    itemsRef.child(this.state.item_id).update(obj);
  
    this.setState({
      item_id:'',
      prefix:'',
      name:'',
      LastName:'',
      Date:'',
      email:'',
      phone:'',
      Number:''
    })
  
  }
  componentDidMount(){
    const itemsRef = firebase.database().ref('stud7');
    itemsRef.on('value',(snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for(let item in items){
          newState.push({
              item_id:item,
              title:items[item].title,
          })
        }
  
          this.setState({
          items:newState
        })
    })
  }
  _handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
    e.preventDefault();        
        if(this.state.item_id !== ''){ 
         return this.updateItem()      
         }const itemsRef = firebase.database().ref('stud7')      
       const item =   {
         title : this.state.title
                      }      
                      itemsRef.push(item)      
                      this.setState({item_id:'',title:''})
                    }
  }
  clickp = () =>{
    this.setState({
      plus:this.state.plus+1
    })
  }
  clickd = () =>{
    this.setState({
      plus:this.state.plus-1
    })
  }
render() {
    return( <header class="App-header1 fon">
      <form onSubmit={this.handleSubmit}>
<div className="aaa2 mina p2">
  <div className="row">
    <div className="cc1">
<img className=" tu" src={image1} width="550" height="500"></img></div>
<div className="col-4 ss">
  <div className="mt-3  mb-3 ">{this.state.name}
  <p className="mt-5"><font color="#FFCC00">{this.state.price}</font></p>
  <p>ขนาด</p>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="size" id="exampleRadios1"  value="25CM" onChange={this.change}/>
  <label class="form-check-label" for="defaultCheck1">
    25CM
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="size" id="exampleRadios2" value="26CM" onChange={this.change}/>
  <label class="form-check-label" for="defaultCheck1">
    26CM
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="size" id="exampleRadios3" value="27CM"onChange={this.change} />
  <label class="form-check-label" for="defaultCheck1">
    27CM
  </label>
</div>
 <div className="row mt-4"> 
      <div className="col-1">จำนวน </div>
      <div className="col-1 tuu">
            <img id="s" src="https://bucket.arifootballstore.com/front/assets/images/icon/minus-Y.svg"
              onClick={this.clickd} width="20" height="20"/>
     </div>
     <div className="col-1 ml-3">
          {this.state.plus}
      </div>
      <div className="col-2 mr-5">
      <img src="https://bucket.arifootballstore.com/front/assets/images/icon/plus-Y.svg" className="ml-3 mr-5" 
       onClick={this.clickp} width="20" height="20"/>
       </div>
      ชิ้น
      </div>
  </div>
  <button className="btn btn-success btn-lg" onClick={this.myClick}>สั่งซื้อสินค้า</button>
</div>
</div>
<div className="container shadow-lg p-5 mb-5 B rounded ">
                       <table className="table table-sm table-bordered" width="100">
                          <tr className="thead-dark">
                           <th width="10%">แสดงความคิดเห็น</th>
                           </tr>
                           
                           </table>
                           <input type="text" class="form-control" placeholder="เขียนความคิดเห็น...." onKeyDown={this._handleKeyDown} onChange={this.change} value={this.state.title} name="title"></input>
                           <table className="table table-sm table-bordered" width="100">
                           {
                              this.state.items.map((item) => {
                                return (
                                    <tr>
                                      <td className="ss"><font color="white">{item.title}</font></td>
                                    </tr>
                                );
                              })
                          }
                           
                           </table>
                           </div>
 </div>
 </form>
    </header>
    
    );
  }
}
  export default App;