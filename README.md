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

- class component => state를 사용할 때 class component를 사용
- state가 필요 없다면? function component를 사용

==> react hook이 나오면서 class compoent, function component 구분 x
==> function component에서 react hook을 사용

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

### Reference

- yts (movie json) = https://github.com/serranoarevalo/yts-proxy

### Deploy

- npm install gh-pages --save (gh-pages install)

- package.json => "homepage" : "https://[username].github.io/[appname]/" 추가

- script => "deploy" : "gh-pages -d build",
  "predeploy" : "npm run build" 추가
- deploy하기 전 predeloy가 먼저 실행됨 (pre를 앞에 붙이면 동일한 명령어에 대해서 먼저 실행하게 만들어 줌 )
  - ex, start : ~~ / prestart: ~~ ==> start할 시 prestart가 먼저 실행

-
