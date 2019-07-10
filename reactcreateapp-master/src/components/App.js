import React from 'react';
import Header from './Header';
import Grocery from './Grocery';
import AddGroceryFrom from './AddGroceryForm';

class App extends React.Component {
  state = {
    grocery: [
      {
        name: 'Apple',
        quantity: 2,
        id: 1
      },
      {
        name: 'Orange',
        quantity: 5,
        id: 2
      },
      {
        name: 'Milk',
        quantity: 2,
        id: 3
      },
      {
        name: 'Pop',
        quantity: 5,
        id: 4
      }
    ]
  };

  previd = 4;
  handleAddGrocery = name => {
    this.setState(prevState => {
      return {
        grocery: [
          ...prevState.grocery,

          {
            name,
            quantity: 0,
            id: (this.previd += 1)
          }
        ]
      };
    });
  };
  handleRemoveGrocery = id => {
    //console.log('removed item ' + id);
    this.setState(prevState => ({
      grocery: prevState.grocery.filter(g => g.id !== id)
    }));
  };
  render() {
    return (
      <div>
        <Header />
        {this.state.grocery.map(g => (
          <Grocery
            name={g.name}
            quantity={g.quantity}
            key={g.id.toString()}
            id={g.id}
            removeGrocery={this.handleRemoveGrocery}
          />
        ))}
        <AddGroceryFrom addGrocery={this.handleAddGrocery} />
      </div>
    );
  }
}

export default App;
