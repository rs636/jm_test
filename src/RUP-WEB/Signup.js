import React, {useState} from 'react'
import './Signup.css'

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            pw:"",
            pw2:"",
            email:"",
            bank:"",
            bankname:"",
            name:"",
            phone:"",
            birth:"",
            checked: false,
            pwError:false
        }
    }
    handleValueChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    checkHandleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    changePw2=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        
        const {pw}=this.state;
        if(e.target.value !== pw) {
            this.setState({
                pwError:true
            });
        }
        else{
            this.setState({
                pwError:false
            });
        }
    }


    checkId=(e)=>{
        //아이디 중복체크(DB와 연동)
        //진혁승
       const {id}=this.state;
        const regId = /^[A-za-z]{1}[A-za-z0-9]{4,14}/g;
        //첫글자는 무조건 영문, 그뒤로 영문 대문자, 소문자 숫자 포함5-15글자
        if(!regId.test(id)){ //정규식에 안맞으면
             alert("아이디 입력 양식에 맞게 입력해주세요");
             //안된다고 하고 input text지워버리기
         }
        // return false;
        //중복체크 버튼 누르면 이전에 넣어놨던 값이 다 없어지는 부분 구현
    }
    
    onSubmit=(e)=>{
        //가입할때, sns이벤트 안내 부분이 체크되어있는것과 안되어있는것 구분 
        e.preventDefault();
        const regPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
        // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
        
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        // 이메일주소 형식 체크 정규식
    
        const regPhone=/^[0-9]{10,11}/;
        //폰번호 체크 정규식 숫자10-11글자

        const{pw,email,phone}=this.state;
        
        if(!regPw.test(pw)){
            alert("비밀번호 입력 양식에 맞게 입력해주세요");
            return false; //이게 되는지 확인해줘 현혁승!
        }
        if(!regEmail.test(email)){
            alert("이메일 입력 양식에 맞게 입력해주세요");
            return false; //이게 되는지 확인해줘 현혁승!
        }
        if(!regPhone.test(phone)){
            alert("전화번호 입력 양식에 맞게 입력해주세요");
            return false; //이게 되는지 확인해줘 현혁승!
        }
        alert("가입이 완료되었습니다. 로그인해주세요!");
       // return true;
       //얘는 왜 입력값이 안없어지지..?
    }
     
       render(){
    return (
        <div id="mainSignup">
            {/*다음엔 텍스트 한줄이면 div말고 label써주기~
            그리고 줄구분하는거 소스 길거같으면 <br/>말고 div로 닫아서 구분하기*/}
           <h1>회원가입 화면입니다!</h1>
           <form>
           <div class="formdiv">아이디</div> <input class="inp" type="text" name="id" placeholder="ID" value={this.id} required onChange={this.handleValueChange}/>
           &nbsp;<button id="checkId" onClick={this.checkId}>아이디 중복체크</button><br/> <div class="inpText">첫글자는 영문, 그뒤로 영문, 숫자 포함 5-15글자 입력</div>
           <div class="formdiv">비밀번호</div> <input class="inp" name="pw" type="password" placeholder="PW" value={this.pw} required onChange={this.handleValueChange}/><br/>
           <div class="inpText">숫자, 특문 1개 이상, 영문 2개 이상 사용해 8자리 이상 입력</div>
           <div class="formdiv">재입력</div> <input class="inp" name="pw2" type="password" placeholder="PW CHECK" value={this.pw2} required onChange={this.changePw2}/>
           {this.state.pwError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}<br/>
           {/*비밀번호가 일치하지 않을때만 빨간글씨로 나타냄*/}
           <div class="formdiv">이름</div> <input class="inp" name="name" type="text" placeholder="NAME" value={this.name} required onChange={this.handleValueChange}/><br/>
           <div class="formdiv">생년월일</div> <input class="inp" name="name" type="text" placeholder="BIRTH" value={this.birth} required onChange={this.handleValueChange}/><br/>
           <div class="formdiv">이메일</div> <input class="inp" name="email" type="text" placeholder="EMAIL" value={this.email} required onChange={this.handleValueChange}/><br/>
           <div class="formdiv">전화번호</div> <input class="inp" name="phone" type="text" placeholder="PHONE NUMBER" value={this.phone} required onChange={this.handleValueChange}/><br/>
           <div class="formdiv">은행사</div> <select class="inp" name="bankname" type="text" placeholder="BANK" value={this.bankname} required onChange={this.handleValueChange}>
               <option selected value="kb">국민은행</option>
               <option value="keb">하나은행</option>
               <option value="bnk">부산은행</option>
               <option value="u">우리은행</option>
           </select><br/>
           <div class="formdiv">계좌번호</div> <input class="inp" name="bank" type="text" placeholder="BANK NUMBER" value={this.bank} required onChange={this.handleValueChange}/><br/>
           <div class="formdiv2">SNS 알림 수신 동의</div><input type="checkbox" checked={this.checked} onChange={this.checkHandleChange}/><br/>
           <br/><button id="Signup" type="primary" onClick={this.onSubmit}>가입하기</button>
           </form>
        </div>
    );
};
}

export default Signup;