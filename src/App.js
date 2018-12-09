import React, { Component } from 'react';
import Button from './components/styles/Button';
import NavigationItems from './components/styles/NavItems';
import AnyElement from './components/styles/AnyElement';
class App extends Component {
  render() {
    return (
      <div>
      <header>
      <NavigationItems navItems={["Home","about","photos"]}>
      </NavigationItems>
      </header>

      {/* the as prop helps us create any 
        specific element use when u want same styles on all*/}
      <AnyElement as="header">Hii</AnyElement>
      <AnyElement as="footer">&copy;</AnyElement>
      <Button>Click Here</Button>
      </div>
    );
  }
}

export default App;
