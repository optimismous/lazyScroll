import React, { Component } from 'react';
import { LazyScroll } from './components/lazy-scroll';
import { throttle } from 'lodash';
import './App.css';

function renderItem(props, idx) {
  return <div key={`item-${idx}`} style={{boxSizing: 'border-box', border: '1px solid red', height: 20, lineHeight: '20px', backgroundColor: 'pink', color: 'red'}}>{props.name}</div>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      // todo remove
      startItemIdx: 5
    }

    // window.setInterval(() => {
    //   this.setState({
    //     startItemIdx: Math.round(Math.random() * 100) % 2 ? 10 : 5
    //   });
    // }, 500);
    this.container = React.createRef();
  }

  onScroll = throttle(() => {
    // console.log('onScroll', this.container.current.scrollTop);
    this.setState({
      scrollTop: this.container.current.scrollTop || 0
    });
  }, 300);

  render() {
    const items = [];
    
    for (let i = 0; i < 100; i++) {
      items.push({
        name: `item-${i}`
      });
    }

    return (
      <div className="App">
        <div ref={this.container} onScroll={this.onScroll} style={{height: 500, backgroundColor: 'gray', overflow: 'auto'}}>
          <LazyScroll items={items} itemHeight={20} renderItem={renderItem} visibleHeight={500} scrollTop={this.state.scrollTop} />
        </div>
      </div>
    );
  }
}

export default App;
