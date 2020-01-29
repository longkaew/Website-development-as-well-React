import React, { Component } from 'react'
import firebase from './firebase'
import './App.css';
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
change =(e) =>{
    this.setState({
            [e.target.name]: e.target.value
    });       
};
handleUpdate3 = (item_id = null , prefix = null , name = null,LastName = null,Date = null,email = null,phone=null,Number=null) => {
  this.setState({item_id,prefix,name,LastName,Date,email,phone,Number})
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
  const itemsRef = firebase.database().ref('info');
  itemsRef.on('value',(snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for(let item in items){
        newState.push({
            item_id:item,
            prefix:items[item].prefix,
            name:items[item].name,
            LastName:items[item].LastName,
            Date:items[item].Date,
            email:items[item].email,
            phone:items[item].phone,
            Number:items[item].Number
        })
      }

        this.setState({
        items:newState
      })

      
  })
}

removeItem3 = (itemId) => {
  const itemsRef = firebase.database().ref('/info');
  itemsRef.child(itemId).remove();
}

submitHandle2 = (e) =>{
  e.preventDefault();

  if(this.state.item_id !== ''){
    return this.updateItem3();
  }
  const itemsRef = firebase.database().ref('info')
    const item = {
      prefix : this.state.prefix,
      name : this.state.name,
      LastName : this.state.LastName,
      Date : this.state.Date,
      email : this.state.email,
      phone : this.state.phone,
      Number : this.state.Number
    }
    itemsRef.push(item)
    this.setState({
      prefix:'',
      name:'',
      LastName:'',
      Date:'',
      email:'',
      phone:'',
      Number:''
    })             
}
  render() {
  return (
    <div>
      <div className="text-center A">
          <h1>ข้อมูลส่วนตัว</h1>
      </div>
    <form onSubmit={this.submitHandle2} className="shadow-lg p-3 mb-5 B rounded ">
        <div class="row">
            <div class="col">
            <div class="form-group">
    <label >คำนำหน้า</label>
    <select class="form-control" name="prefix" value={this.state.prefix} onChange={this.change}>
      <option >นาย</option>
      <option >นางสาว</option>
    </select>
  </div>
    </div>
    <div class="col"> <div class="form-group">
    <label>ชื่อ</label>
    <input type="text" class="form-control" name="name"  value={this.state.name}  onChange={this.change}/>
  </div></div>
  <div class="col"><div class="form-group">
    <label >นามสกุล</label>
    <input type="text" class="form-control" name="LastName"   value={this.state.LastName}  onChange={this.change}/>
   
  </div></div>
  </div>
  <div class="row">
      <div class="col">
      <div class="form-group">
    <label >วันเกิด</label>
    <input type="date" class="form-control" name="Date"   value={this.state.Date} onChange={this.change}/>
  </div>
      </div>
      <div class="col">
      <div class="form-group">
    <label >อีเมล์</label>
    <input type="email" class="form-control" name="email"  value={this.state.email}  onChange={this.change}/>
  </div>
      </div>
      <div class="col">
      <div class="form-group">
    <label >เบอร์โทรศัพท์ติดต่อ</label>
    <input type="number" class="form-control" name="phone"   value={this.state.phone}  onChange={this.change}/>
   
  </div>
      </div>
  </div>
  <div class="row">
      <div class="col-4">
      <div class="form-group">
    <label >หมายเลขบัตรประชาชน</label>
    <input type="number" class="form-control" name="Number"  value={this.state.Number}  onChange={this.change}/>
   
  </div>
      </div>
      <div class="col mt-4">
      <button type="submit" class="btn btn-primary" >ตกลง</button>
      <button type="button" class="btn btn-danger ml-3" >ยกเลิก</button>
      </div>
  </div>
 </form>
 <hr/>
                      <div className="container shadow-lg p-3 mb-5 B rounded">
            
                       <table className="table table-sm table-bordered">
                          <tr className="thead-dark">
                           <th width="10%">คำนำหน้า</th>
                            <th width="10%">ชื่อ</th>
                            <th width="15%">นามสกุล</th>
                            <th width="15%">วันเกิด</th>
                            <th width="20%">อีเมล์</th>
                            <th width="20%">เบอร์โทรศัพท์ติดต่อ</th>
                            <th width="20%">หมายเลขบัตรประชาชน</th>
                            <th width="5%">Update</th>
                            <th width="5%">Delete</th>
                          </tr>
                          {
                              this.state.items.map((item) => {
                                return (
                                    <tr>
                                      <td>{item.prefix}</td>
                                      <td>{item.name}</td>
                                      <td>{item.LastName}</td>
                                      <td>{item.Date}</td>
                                      <td>{item.email}</td>
                                      <td>{item.phone}</td>
                                      <td>{item.Number}</td>
                                      <td><button className="btn btn-info " onClick={() => this.handleUpdate3(item.item_id,item.prefix,item.name,item.LastName,item.Date,item.email,item.phone,item.Number)}>Update</button></td>
                                      <td><button className="btn btn-danger " onClick={() => this.removeItem3(item.item_id)}>Delete</button></td>
                                    </tr>
                                )
                              })
                          }
                      </table>
            </div>
            </div>
  );
  
}

}

export default App;
