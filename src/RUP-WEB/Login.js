import React, {useState} from 'react'
import './Login.css'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            pw:""
        }
    }
    handleValueChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
     onSubmit=()=>{
        //현혁승
        //마지막에 Home으로 돌아가게 만들어죠
    }
    render(){
    return (
        <div id="mainLogin">
           <h1>로그인 화면입니다!</h1>
           <form onSubumit={this.onSubmit}>
           <div class="divLogin">아이디</div> <input class="inpLogin" type="text" placeholder="ID" value={this.id} required onChange={this.handleValueChange}/> <br/>
           <div class="divLogin">비밀번호</div> <input class="inpLogin" type="password" placeholder="PW" value={this.pw} required onChange={this.handleValueChange}/> <br/>
           <br/><button id="btnLogin" type="primary">로그인</button>
           </form>
        </div>
    );
    }
};

export default Login;