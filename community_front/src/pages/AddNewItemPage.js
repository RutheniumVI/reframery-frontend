import React from 'react';
import { HashRouter as Router, Link, Route,NavLink } from 'react-router-dom';

class AddMesaage extends React.Component{
    render(){
        return (
            <div>
                <p className= 'text1'> This item has been added successfully!</p>
                <Link to = "/" ><button className= 'box2'>Back</button></Link>
            </div>
        )
    }
}

class AddNewItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {items: [], input: "", mode: "Add", nextID: 0, editIndex: 0};
    }

    submit(){
        if(this.state.mode == "Add"){
            this.setState({
                items: [...this.state.items, {item: this.state.input, id: this.state.nextID}],
                input: "",
                nextID : this.state.nextID + 1
            })
        }
        else{
            var newItems = this.state.items;
            newItems[this.state.editIndex].item = this.state.input;
            this.setState({
                mode: "Add",
                input: "",
                items: newItems
            })
        }
    }

    delete(delID){
        this.setState({
            items: this.state.items.filter(({item,id}) => id != delID)
        })
    }

    edit(editID){
        var editItem = this.state.items.find(({item,id})=> id == editID)
        this.setState({
            input: editItem.item,
            mode : "Edit",
            editIndex: this.state.items.indexOf(editItem)
        })
    }

    render()
    {
        return(
            <Router>
                <div>
                    <header class= "header1">Add a new item</header>
                    <input type="text" class="box1"
                        onChange= {(event) => this.setState({input: event.target.value})}
                        value= {this.state.input} /> <br />
                    <ul>
                        {this.state.items.map(
                            ({item, id}) =>
                                <li key = {id} >
                                    <p class='text2'>{item}</p> <br />
                                    <button onClick={this.delete.bind(this,id)}> Delete </button>
                                    <button class= 'box5' onClick={this.edit.bind(this,id)}> Edit </button>
                                </li>
                        )}
                    </ul>
                    <Link to = "/myreframecy/add-item/message"><button class="box4" onClick= 
                    {this.submit.bind(this)} >{this.state.mode}</button></Link>
                    <Link to = "/myreframecy/add-categories"><button className= 'box3'>Back</button></Link>
                    <Route path= "/myreframecy/add-item/message" component= {AddMesaage}></Route>
                    {/* <ul>
                        {this.state.items.map(
                            ({item,id}) =>
                                <li key= {id}>
                                    {item} - <br />
                                    <button onClick={this.delete.bind(this,id)}> Delete </button>
                                    <button onClick={this.edit.bind(this,id)}> Edit </button>
                                </li>
                            )}
                    </ul>  */}
                </div>
            </Router>
            
        )
    }
}

export default AddNewItem;