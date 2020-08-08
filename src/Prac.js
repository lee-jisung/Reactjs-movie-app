// import React from 'react';
// import PropTypes from 'prop-types';

// const foodILike = [
//   {
//     id: 1,
//     name: 'Kimchi',
//     image: 'https://i.ytimg.com/vi/iJzBe08Rtb8/hqdefault.jpg',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Doncasu',
//     image: 'https://i.ytimg.com/vi/LWlafDHuwHo/maxresdefault.jpg',
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: 'Kimbab',
//     image:
//       'http://recipe.ezmember.co.kr/cache/recipe/2016/06/29/e83ce1d994ff9b5ffcd1981c8971119d1.jpg',
//     rating: 5.5,
//   },
//   {
//     id: 4,
//     name: 'Bibimbap',
//     image: 'https://i.ytimg.com/vi/6QQ67F8y2b8/maxresdefault.jpg',
//     rating: 4.7,
//   },
// ];

// function Food(props) {
//   console.log(props);
//   return (
//     <div>
//       <h2>i like {props.name}</h2>
//       <h4>{props.rating}/6.0</h4>
//       <img src={props.picture} alt={props.name} />
//     </div>
//   );
// }

// // food에 대해서 얻고 싶은props을 적어줌
// // 즉 각 prop에 대해서 얻고 싶은 type들을 적어주고 isRequired를 해주면 console에서
// // 오류가 있음을 말해줌
// // isRequired => props가 필수로 있어야 함을 나타냄
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       {foodILike.map(dish => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
