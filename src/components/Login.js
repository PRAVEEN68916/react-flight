// ...existing code...
import React from 'react'

function Login() {
    return (
        <>
            <style>{`
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: url("https://images.pexels.com/photos/754194/pexels-photo-754194.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
}
.wrapper{
  padding:20px 30px;
  height:100vh;
  width:50%;
}
.container{
  height:66vh;
  width:50%;
  display:flex;
  flext-direction:column;
  align-items:center;
  justify-content:center;
  box-shadow:0px 10px 10px white;
  backdrop-filter:blur(30px);
  background:transparent;
  border:2px solid white;
  border-radius:25px;
  margin-top:89px;
  margin-left:80%;
}
// .hm{
//   display:flex;
//   margin-left:55px;
// }
h1{
  padding-top:20px;
  text-align:center;
  margin-bottom:30px;
  color:white;
  font-size:3rem;
  font-weight:bold;
  text-decoration:none;
}
.hellow{
  padding:20px;
  justify-content:center;
  text-align:start;
  display:grid;
  gap:8px;
}
input{
  width:225px;
  height:40px;
  margin-bottom:9px;
  box-shadow:0px 12px 13px;
  border:solid 5px black;
  border-radius:10px;
  margin-left:38px;
  opacity:0.5;
}
button{
  width:147px;
  border-radius:12px;
  box-shadow:0px 10px 10px black;
  margin-top:20px;
  padding:10px;
  color:black;
  font-size:1.5rem;
  margin-left:75px;
}
a{
//   color:yellow;
  text-align:center;
  margin-top:0px;
  margin-left:46px;
  font-weight:bold;
  text-decoration:none;
}
button:hover{
  background-color:aqua;
  color:white;
}
label{
  margin-bottom:1px;
  color:white;
  text-align:center;
}
u{
  color:white;
}
// nav{
//   display:flex;
//   justify-content:space-around;
//   text-align:right;
//   text-decoration:none;
//   font-weight:bold;
//   padding:20px;
//   background:transparent;
//   backdrop-filter:blur(20px);
//   box-shadow:0 10px 20px black;
//   border:2px solid gray;
//   border-radius:10px;
//   font-size:14px;
//   gap:20px;
// }
a:hover{
  color:yellow;
}
.jan{
  color:white;
}
`}</style>
                <div className="wrapper">
                    <div className="container">
                        <form className="hellow">
                            <h1><u>login</u></h1>

                            <label htmlFor="user">USER NAME</label>
                            <input id="user" type="text" placeholder="typing..." />

                            <label htmlFor="pas">PASSWORD</label>
                            <input id="pas" type="password" placeholder="typing..." />

                            <button type="submit">LOGIN</button>
                            <a href="#">create new acc?</a>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default Login
// ...existing code...