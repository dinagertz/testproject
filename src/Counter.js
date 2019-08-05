import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
            this.addOne = this.addOne.bind(this);
            this.state = {
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
                <button onClick={this.addOne}>+1</button><br/>
                <button onClick={this.addOne}>+1</button><br/>
                <button onClick={this.addOne}>+1</button>
            </div>
        );
    }
}

export default Counter;