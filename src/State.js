// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     // class가 생성되면서 호출
//     super(props);
//   }

//   state = {
//     // 변화를 주고 싶은 data를 넣어줌
//     count: 0,
//   };

//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//   };
//   componentDidMount() {
//     //component가 render된 후 호출됨
//     console.log('component rendered');
//   }

//   componentDidUpdate() {
//     //state가 변경될 때 render된 후 호출됨
//     console.log('i just updated');
//   }
//   componentWillUnmount() {
//     // 다른 page로 가거나 component가 바뀌는 등의 행위가 이루어질 때 호출됨
//     console.log('good by');
//   }
//   render() {
//     console.log('i am rendering');
//     return (
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

// export default App;
