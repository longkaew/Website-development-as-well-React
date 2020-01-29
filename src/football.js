import React, { Component } from 'react';
import firebase from './firebase'
import {storage} from './firebase';
import './App.css';

function searchingFor(term) {
    return function (x) {
        return (x.titlename.toLowerCase().includes(term.toLowerCase()) || !term);
    }
  } 
class BlogListItem extends Component{
   

    constructor(props) {
        super(props)
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
            LinkVDO:'',
            charb:"#",
            url: '',
            term: '',
            plus:0,
            size:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){  
        e.preventDefault();        
         const itemsRef = firebase.database().ref('buy')   
           const item =   {
            titlename : this.state.titlename,
            con :this.state.con,
                 size : this.state.size,
                 plus :this.state.plus
                          }      
                          itemsRef.push(item)      
                          this.setState({item_id:'',size:'',plus:0})
                          alert("สั่งซื้อสินค้าเรียบร้อยแล้ว");
            }
            change =(e) =>{
                this.setState({
                        [e.target.name]: e.target.value
                });       
            };
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
    componentDidMount() {
        const itemsRef = firebase.database().ref('contents');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
    
            for (let item in items) {
                newState.push({
    
                    item_id: item,
                    charb: items[item].charb,
                    main: items[item].main,
                    group: items[item].group,
                    titlename: items[item].titlename,
                    con: items[item].con,
                    con1: items[item].con1,
                    con2: items[item].con2,
                    LinkVDO: items[item].LinkVDO,
                    references: items[item].references,
                    url: items[item].url,
                })
            }
            try {
                this.setState({
                    items: newState,
                })
            } catch (exception) { }
        })
    }
    search(e) {
        this.setState({ term: e.target.value })
    }
    onNextForm() {
        this.setState({
    
        })
    }
    
    onChangebutton = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image, }));
        }
    }
  render(){
    return(
        
      <header class="App-header1 fon ">
         
        <div className="aaa mt-5 mb-5">
         <div class="row-item mbbb"> 
         <h1 className="text-center mt-5">รองเท้าฟุตบอล</h1>    
         {
                            this.state.items.filter(searchingFor(this.state.term)).map((item) => {
                                return (
            <div class="column-item mt-5">
               <button type="button"  data-toggle="modal" data-target={'#' +item.item_id} >
                    <div class="blog-card" >
                        <img class="blog-img" width="200" height="200" src={item.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" />
                    <div class="text-overlay">
                        <h2 style={{textAlign: "left"},{fontWeight:"bold"}}>{item.titlename}</h2>
                        <p ></p> 
                        <h2 style={{textAlign: "left"},{fontWeight:"bold"}} className="mt-5 ass">{item.con}</h2>   
                  </div>
              </div>
            </button>
              {/* <!-- Modal --> */}
                    <div class="modal fade" id={item.item_id} tabindex="-1" role="dialog" aria-labelledby={item.item_id} aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content" style={{width:"850px"}}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">เนื้อหาบทความ</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="aaa2 mina p2">
                        {/* <div class="content-Title"> */}
                                {/* <div class="content-Title-img"> */}
                                <div className="row">
                                        <div className="cc1 marl mr-5">
                                        <img width="400"  height="350" id="imgtitle"src={item.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" ></img>
                                        </div>
                                        <div className="cc1">
                                                                {item.titlename}
                                                                <p>{item.con}     </p>                               
                                                                <p><div className="col-1 ">
                 <img id="s" className="ml-3" src="https://bucket.arifootballstore.com/front/assets/images/icon/minus-Y.svg"
                            onClick={this.clickd} width="20" height="20"/>
                         </div>
                   <div className="col-1 ml-3">
          {this.state.plus}
      </div>
      <div className="col-2 mr-5">
      <img src="https://bucket.arifootballstore.com/front/assets/images/icon/plus-Y.svg" className="ml-3 mr-5" 
       onClick={this.clickp} width="20" height="20"/>
       </div>
</p>
       <div class="form-check">
  <input class="form-check-input" type="radio" name="size" id="exampleRadios1"  value="S" onChange={this.change}/>
  <label class="form-check-label" for="defaultCheck1">
  {item.con1}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="size" id="exampleRadios1"  value="S" onChange={this.change}/>
  <label class="form-check-label" for="defaultCheck1">
  {item.con2}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="size" id="exampleRadios1"  value="S" onChange={this.change}/>
  <label class="form-check-label" for="defaultCheck1">
  {item.LinkVDO}
  </label>
</div>
<button className="btn btn-success btn-lg" onClick={this.handleSubmit}>สั่งซื้อสินค้า</button>
</div>
</div>
                                {/* </div> */}
                        {/* </div> */}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                        </div>
                    </div>
                    </div>
              </div>
                    )
                })
            }  
          </div>
         
          </div>
          
      </header>
    );
  }
}
export default BlogListItem;
