import React, { Component } from 'react';
import { LazyScroll } from './components/lazy-scroll';
import { throttle } from 'lodash';

function renderItem(props, idx) {
  return <div key={`item-${idx}`} style={{boxSizing: 'border-box', border: '1px solid red', height: 20, lineHeight: '20px', backgroundColor: 'pink', color: 'red'}}>{props.name}</div>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0
    }
    this.container = React.createRef();
  }

  onScroll = throttle(() => {
    this.setState({
      scrollTop: this.container.current.scrollTop || 0
    });

  }, 300);

  render() {
    const items = [];
    const containerHeight = 500;
    
    for (let i = 0; i < 20000; i++) {
      items.push({
        name: `item-${i}`
      });
    }

    return (
      <div className="App">
        <div ref={this.container} onScroll={this.onScroll} style={{height: containerHeight, backgroundColor: 'gray', overflow: 'auto'}}>
          <LazyScroll
            items={items}
            itemHeight={20}
            renderItem={renderItem}
            visibleHeight={containerHeight}
            additionalItems={15}
            scrollTop={this.state.scrollTop} />
        </div>
      </div>
    );
  }
}

export default App;
