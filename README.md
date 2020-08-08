# ReactJS - Movie App

React JS Fundamentals

## Component

- A Function that return HTML code
- reuseable

> <Potato fav="kimchi" some={true}>

- component에서 이런식으로 property를 넣어주게 되면

```
- function Potato(props){
   // {props.fav} 로 kimchi라는 value를 사용할 수 있음
  }

- 또는
  function Potato({fav}){
   // {fav}로 사용할 수도 있음
  }
```

### Class Component

- React는 자동적으로 class component의 render method를 실행.
- state => 변화가 필요한 data를 저장
- setState를 사용하여 data의 변화를 처리
  - setState를 호출할 때 마다 react는 새로운 state와 함께 render method를 호출 => virtual DOM을 사용하여 바뀐 부분만 적용해줌

---

## JSX

- hmtl inside of javascript
  ```
  const element = <h1> Hello, world!</h1>;
  ```
-

---

### Javascript

```
 const arr = [1, 2, 3];
 arr.map(function(item){
   //item에 대한 처리
   item++;
   return item;
 })

 //=> return 된 item들로 이루어진 array가 생성
 [2, 3, 4];
```
