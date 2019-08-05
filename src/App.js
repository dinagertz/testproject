import React, { Component } from 'react';
import alertify from 'alertifyjs';
//import { WebView } from 'react-native-webview';
//import { WebView } from 'react-native';
// import Todos from './Todos'
// import Restos from './component/Restos'
class App extends React.Component {
/**   constructor(props){
    super(props);
        this.addOne = this.addOne.bind(this);
        this.state = {
            count : 0
        }
}
addOne(){
  this.setState((preState) => {
      return{
          count: preState.count + 1
      };
  });
}

render(){
  return(
      <div>
          <h2>Count : {this.state.count}</h2>
          <button onClick={this.addOne}>+1</button>
      </div>
  );
}*/
  // state = {
  //   todos:[
  //     {id: 1, content: 'buy some milk'},
  //     {id: 2, content: 'play mario kart'}
  //   ]
  // }
  // deleteTodo = (id) => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id
  //   });
  //   this.setState({
  //     todos
  //   })
  // }
  state = {
    id: 0,
    isShow: true,
    nameTitle: "List of Restaurant",
    orders: [],
    total: "",
    count : 0,
    restos: [
      {
        text: "Resto1",
        id: "1",
        child: [
          {
            text: "Juice22222222",
            id: "1",
            child: [
              {
                text: "Milk Tea",
                id: "1001",
                price: "5.00"
              },
              {
                text: "Orange Juice",
                id: "1002",
                price: "7.00"
              },
              {
                text: "Avocado Juice",
                id: "1003",
                price: "3.00"
              }
            ]
          },
          {
            text: "Crepes2222222",
            id: "2",
            child: [
              {
                text: "Mini Crepes",
                id: "2001",
                price: "2.5"
              },
              {
                text: "Fruits Crepe",
                id: "2002",
                price: "5.00"
              }
            ]
          }
        ]
      },
      {
        text: "Resto2",
        id: "2",
        child: [
          {
            text: "Juice",
            id: "1",
            child: [
              {
                text: "Milk Tea",
                id: "1001",
                price: "5.00"
              },
              {
                text: "Orange Juice",
                id: "1002",
                price: "7.00"
              },
              {
                text: "Avocado Juice",
                id: "1003",
                price: "3.00"
              }
            ]
          },
          {
            text: "Crepes",
            id: "2",
            child: [
              {
                text: "Mini Crepes",
                id: "2001",
                price: "2.5"
              },
              {
                text: "Fruits Crepe",
                id: "2002",
                price: "5.00"
              }
            ]
          }
        ]
      }
    ]
  }



  add = (name, price) => {
    let order = {
      name: name,
      price: price
    }
    let orders = [...this.state.orders, order]
    this.setState({
      orders: orders
    })
    alertify.success('Add item. \nCheck your cart icon');
  }
  
  myorder = () => {
    const sums = this.state.orders.map(el => parseFloat(el.price));
    let total_price = sums.reduce((accumulator, currentValue) => accumulator + currentValue);

    this.setState({
      template4:
        this.state.orders.map((order, index) => {
          return (
            <div className="collection-item" key={index}>
              <span>{order.name}</span><span className="right">{order.price}</span>
            </div>
          )
        }),
      isShow: false,
      nameTitle: "Order List",
      total: total_price.toFixed(2)
    })
  }
  back = () => {
    if (this.state.id2) {
      return this.setState({ id2: null, nameTitle: "Menu's" })
    }
    if (this.state.id && !this.state.id2) {
      return this.setState({ id: 0, nameTitle: "List of Restaurant" })
    }
  }
  exit = () => {
    this.setState({
      isShow: true,
      nameTitle: "List of Restaurant",
      id2: null,
    })
  }
  next = (id) => {
    this.setState({orders:[]});
    this.setState({ id: parseInt(id), nameTitle: "Menu's" }, () => {
      const menu1 = this.state.restos.filter(el => el.id === id);
      this.setState({
        template2: menu1[0].child.map(restos => {
          return (
            <div className="collection-item" key={restos.id}>
              <span onClick={() => this.next1(restos.id)}>{restos.text}</span>
            </div>
          )
        })
      })
    })
  }

  next1 = (id) => {
    this.setState({ id2: parseInt(id), nameTitle: "Category's" }, () => {
      const menu1 = this.state.restos.filter(el => el.id === id);
      this.setState({
        count: this.state.restos.id + this.state.restos,
        template3: menu1[0].child[0].child.map((restos, index) => {
          
          return (
            <div className="collection-item" key={restos.id}>
              <span >{restos.text}</span><br />
              <span >Price : {restos.price}</span>

              <span className="right"><button type="button" className="waves-effect waves-light btn-small adjust-position-bottom" onClick={() => this.add(restos.text, restos.price)}> Add</button></span>
            </div>
          )
        })
      })
    })
  }

  render() {
    const restoList = this.state.restos.map(restos => {
      return (
        <div className="collection-item" key={restos.id}>
          <span onClick={() => { this.next(restos.id) }}>{restos.text}</span>
        </div>
      )
    })

    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Restaurant</h1>
        {this.state.isShow ? <button className="waves-effect waves-light btn" onClick={this.myorder}><i className="material-icons small">shopping_cart</i></button> :
          <button className="waves-effect waves-light btn" onClick={this.exit}><i className="material-icons small">cancel</i></button>}
        <div className="collection">
          <div className="collection-item">
            <span className="center blue-text text-darken-2">{this.state.nameTitle}</span>
          </div>
        </div>
        <div className="collection">
          {this.state.id === 0 && this.state.isShow ? restoList : null}
          {((this.state.id === 1 || this.state.id === 2) && !this.state.id2 && this.state.isShow) ? this.state.template2 : null}
          {((this.state.id2 === 1 || this.state.id2 === 2) && this.state.isShow) ? this.state.template3 : null}
          {!this.state.isShow ? this.state.template4 : null}
          {!this.state.isShow ?
            <div className="collection-item">
              <span>Total</span>
              <span className="right">{this.state.total}</span>
            </div>
            : null}
        </div>
        {this.state.id && this.state.isShow ? <button className="waves-effect waves-light btn" onClick={this.back}><i className="material-icons small">reply</i></button> : null}
      </div>

    );
  }
}

export default App;
