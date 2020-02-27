# JOOJ-DA-VELHA
https://masander.github.io/JOOJ-DA-VELHA/

import React, { Component } from 'react';
import Axios from 'axios';

export default class pageCreate extends Component{
    constructor(props){
        super(props);

        this.state = {
            tag: ""
            ,objct: [{type: "", key: "", value: ""}]
        };
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    fillTag(event){
        this.setState({ tag: event.target.value })
    }

    addClick(){
        this.setState(prevState => ({
            objct: [...prevState.objct, {type: "string", key: "", value: ""}]
        }))
    }

    //Create new input
    createUI(){
        return this.state.objct.map((el, i) =>(
            <div key={i}>
                <input placeholder="Name key" name="key" value={el.key ||''} onChange={this.handleChange.bind(this, i)} />
                <input placeholder="Value key" name="value" value={el.value ||''} onChange={this.handleChange.bind(this, i)} />
                <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
            </div>
        ))
    }

    handleChange(i, e) {
        const { name, value } = e.target;
        let objct = [...this.state.objct];
        objct[i] = {...objct[i], [name]: value};
        this.setState({ objct });
    }

    //Remove input
    removeClick(i){
        let objct = [...this.state.objct];
        objct.splice(i, 1);
        this.setState({ objct });
    }

    //I dont understand this
    handleSubmit(event) {
        event.preventDefault();
        //alert('A name was submitted: ' + JSON.stringify(this.state.users));

        //var i = 0;
        //var dados = {};
        //var data = {};
        //var dataArray = [];
        //for(i; i < this.state.objct.length; i++ ){
        //    data = {};
        //    data[this.state.objct[i].key] = this.state.objct[i].value
        //    dataArray.push(data)
        //}

        let sendData = {
            tag: this.state.tag
            ,data: this.state.objct
        }
        
        console.log(sendData)

        Axios.post('', sendData)
        .then(data => {
            alert('create json')
        })
        .catch(erro => {
            console.log(erro);
            alert('Erro')
        })

    }

    render(){
        return(
            <div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>

                <div id="container" />

                <h1> Create JSON </h1>
                    <input placeholder="Tag" onChange={this.fillTag.bind(this)}/>
                <form onSubmit={this.handleSubmit}>
                    {this.createUI()}
                    <input type='button' value='add more' onClick={this.addClick.bind(this)} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

