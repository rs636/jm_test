import React from 'react'
import './Home.css'
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
     navigator1=(e)=>{
        var s=$('#content1').width(); //너비
        window.scrollTo(s,0); //이건 상단메뉴 값인데 수정해줄것
    }


    //나중에 상단메뉴 height값 정해지면 sb-크기값 해주기
    navigator2=(event)=>{
        var sb=$('#content2').height(); //높이
        var s=$('#content2').width(); //너비
        window.scrollTo(s,sb+50); //이건 상단메뉴 값인데 수정해줄것
    }

    navigator3=(event)=>{
        var sb=$('#content3').height(); //높이
        var s=$('#content3').width(); //너비
        window.scrollTo(s,(sb+50)*2); //이건 상단메뉴 값인데 수정해줄것
    }

    navigator4=(event)=>{
        var sb=$('#content4').height(); //높이
        var s=$('#content4').width(); //너비
        window.scrollTo(s,(sb+50)*3); //이건 상단메뉴 값인데 수정해줄것
    }
    
    
    render(){
    return (
        <Router>
        <div id="mainHome" >
            
            <ul id="navigator">
                <li id="nav1" onClick={this.navigator1}>
                    <button>1페이지</button>
                </li>
                <li id="nav2" onClick={this.navigator2}>
                    <button>2페이지</button>
                </li>
                <li id="nav3" onClick={this.navigator3}>
                    <button>3페이지</button>
                </li>
                <li id="nav4" onClick={this.navigator4}>
                    <button>4페이지</button>
                </li>
            </ul>

            <div id="content1" class="scrollContent">
                content1
            </div>

            <div id="content2" class="scrollContent">
                content2
            </div>

            <div id="content3" class="scrollContent">
                content3
            </div>

            <div id="content4" class="scrollContent">
                content4
            </div>
        </div>
        </Router>
    );
    }
};

export default Home;
