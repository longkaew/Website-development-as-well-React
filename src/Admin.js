import React, { Component } from 'react';
// 
import firebase from './firebase'
import {storage} from './firebase'


function searchingFor(term) {
    return function (x) {
        return (x.titlename.toLowerCase().includes(term.toLowerCase()) || !term);
    }
  }
class Writedata extends Component{
    constructor() {
        super();
        this.state = {
          items: [],
          item_id: '',
          main:'หน้าหลัก',
          group:'',
          titlename:'',
          con:'',
          con1:'',
          con2:'',
          references:'',
          charb:'#',
          LinkVDO:'',
          image: null,
          url: '',
          progress: 0,
          term:'',
          visible : false
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
      }
      
    
      componentDidMount() {
        const itemsRef = firebase.database().ref('contents');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              item_id: item,
              charb: items[item].charb,
             
              url: items[item].url,
              main: items[item].main,
              group: items[item].group,
              titlename: items[item].titlename,
              con: items[item].con,
              con1: items[item].con1,
              con2: items[item].con2,
              LinkVDO: items[item].LinkVDO,
              references: items[item].references
   
            })
          }
          try {
            this.setState({
                items: newState,
    
            })
        } catch (exception) { }
        })
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
    
      }
    
    
      handleSubmit(e) {
        e.preventDefault();
    
        if (this.state.item_id != '') {
          return this.updateItem();
        }
    
        const itemsRef = firebase.database().ref('contents')
        const item = {
          charb: this.state.charb,
          url: this.state.url,
          main: this.state.main,
          group: this.state.group,
          titlename: this.state.titlename,
          con: this.state.con,
          con1: this.state.con1,
          con2: this.state.con2,
          LinkVDO: this.state.LinkVDO,
          references: this.state.references
   
        }
        itemsRef.push(item)
        this.setState({
          item_id: '',
          charb:'#',
          url: '',
          main:'หน้าหลัก',
          group:'',
          titlename:'',
          con:'',
          con1:'',
          con2:'',
          LinkVDO:'',
          references:''
        })
      }
    
    
      handleUpdate = (item_id = null, 
        // charb = null,
        url= null,
        //  main = null,
          group = null,
           titlename = null, con = null,con1 = null,con2 = null, LinkVDO  = null,references = null) => {
        this.setState({ item_id,
          // charb,
           url,
          //  main,
            group,
            titlename,con,con1,con2,LinkVDO,references })
      }
    
      updateItem() {
    
        var obj = {url: this.state.url,
          // charb: this.state.charb,
          // main: this.state.main, 
          group: this.state.group,
           titlename: this.state.titlename,
            con: this.state.con,
             con1: this.state.con1, 
             con2: this.state.con2,
             LinkVDO: this.state.LinkVDO,
              references: this.state.references}
    
        const itemsRef = firebase.database().ref('/contents')
    
        itemsRef.child(this.state.item_id).update(obj);
    
        this.setState({
          item_id: '',
          // charb:'#',
          url:'',
          // main:'หน้าหลัก',
          group:'',
          titlename:'',
          con:'',
          con1:'',
          con2:'',
          LinkVDO:'',
          references:''
        })
    
      }
    
      removeItem(itemId) {
        const itemsRef = firebase.database().ref('/contents');
        itemsRef.child(itemId).remove();
      }
      clearInput = () => {
        this.setState({
          item_id: '',
          url: '',
          charb:'#',
          main:'หน้าหลัก',
          group:'',
          titlename:'',
          con:'',
          con1:'',
          con2:'',
          LinkVDO:'',
          references:''
        })
      }
      handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
          (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({ progress });
          },
          (error) => {
            // error function ....
            console.log(error);
          },
          () => {
            // complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({ url, image: '' });
            })
          });
      }
      onChangeImage = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({ image, }));
        }
      }
      search(e){
        this.setState({ term: e.target.value })
      }
  render(){

    return(
    
      <header class="App-header1 fon">
                เพิ่มข้อมูลรองเท้าฟุตบอล <button className="btn btn-danger btn-lg mp mt-3 mr-2" onClick={() => firebase.auth().signOut()}>Sign out</button>
        <div className="aaa mt-5">
                     <form onSubmit={this.handleSubmit}>
          <h1>เพิ่มข้อมูลรองเท้าฟุตบอล</h1>
            <div class="grid-container-Write">
                <div class="grid-item-Write1">
                    <div id="Tab">
                        <div className="uploads">
                        <input type="file" name="url" multiple="" className="myButton-upimg"
                        onChange={this.onChangeImage} style={{ fontSize: '12px'}}></input>

                        <button class="btn btn-success"  onClick={this.handleUpload} value={this.state.url}style={{ fontSize: '12px'}}>อัปโหลด</button>
                    </div>
                    </div>
              </div>

                    <div id="Tab"><input type="text"className="form-control-2" placeholder="ชื่อสินค้า"  name="titlename" onChange={this.handleChange} value={this.state.titlename}/>
                    </div>
     
                <div class="grid-item-Write4">
                    <div id="Tab"><input type="text"className="form-control-2" placeholder="ราคา"  name="con" onChange={this.handleChange} value={this.state.con}/>
                    </div>
                </div>
                <div className="ss">
                  SIZE
                <div class="grid-item-Write4">
                    <div id="Tab"><input type="text"className="form-control-2" placeholder=""  name="con1" onChange={this.handleChange} value={this.state.con1}/>
                    </div>
                </div>

                <div class="grid-item-Write4">
                    <div id="Tab"><input type="text"className="form-control-2" placeholder=""  name="con2" onChange={this.handleChange} value={this.state.con2}/>
                    </div>
                </div>

                <div class="grid-item-Write4">
                    <div id="Tab"><input type="text"className="form-control-2" placeholder=""  name="LinkVDO" onChange={this.handleChange} value={this.state.LinkVDO}/>
                    </div>
                </div>
                </div>
                <div class="grid-item-Write6">
                
                <div id="Tab">
                <button class="btn btn-success">Save</button>
                <button class="btn btn-danger ml-3"  onClick={() => this.clearInput()}>ยกเลิก</button>
                </div>
            </div>  

          </div>
          
             </form>
             <br />
           
            <div className="search-bar" style={{margin: "10px", width: "25%", textAlign: "lift"}}>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" className="textitlte">
                
                     <input type="text" class="search-table" placeholder="Search for names.." onChange={this.search.bind(this)} value={this.state.term}/>      
                    
                </a>
            </nav>
         </div>
         <div className="container shadow-lg p-5 mb-5 B rounded ">
           <h1>รายการสินค้า</h1>
<table className="table table-sm table-bordered">
                    <tr className="thead-dark">
                      <th width="15%">รูปสินค้า</th>
                      <th width="30%">ชื่อสินค้า</th>
                      <th width="15%">ขนาด</th>
                      <th width="10%">ราคา</th>
                      <th width="10%">แก้ไข</th>
                      <th width="10%">ลบ</th>
                    </tr>
                    {
                             this.state.items.filter(searchingFor(this.state.term)).map((item) => {
                                return (
                                    <tr>
                                      <td><img src={item.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="180" width="180" /></td>
                                      <td><font color="white">{item.titlename}</font></td>
                                      <td><font color="white">{item.con1} {item.con2} {item.LinkVDO}</font></td>
                                      <td><font color="white">{item.con}</font></td>
                                      <td><button className="btn btn-success"  onClick={() => this.handleUpdate(
                                item.item_id,
                                item.url,
                                item.group,
                                item.titlename,
                                item.con,
                                item.con1,
                                item.con2,
                                item.LinkVDO,
                                item.references
                                )}>Update</button></td>
                                      <td><button className="btn btn-danger " onClick={() => this.removeItem(item.item_id)}>Delete</button></td>
                                    </tr>
                                )
                              })
                          }

                </table>
                          </div>
                          </div>
      </header>
    

    
    );
  }
}
export default Writedata;
