import React from 'react'
import './Menu.css'

class Menu extends React.Component{
   
    
    render(){
    return (
            <ul id="bannerTop">
                <li class="topmenu" id="rogoTop">
                    <a class="menuLink" href="/">RUP</a>
                <ul class="submenu" id="sub1">
                    <li class="submenu1">럽럽럽</li>
                </ul></li>

                <li class="topmenu" id="introTop">
                    <a class="menuLink" href="#">회사 소개</a>
                <ul class="submenu" id="sub2">
                    <li class="submenu2">
                    <a class="menuLink" href="/IntroCompany">기업 소개</a>
                    </li>
                    <li class="submenu2">
                    <a class="menuLink" href="/IntroTeam">팀원 소개</a>
                    </li>
                    <li class="submenu2">협력 소개</li>
                    <li class="submenu2">연혁</li>
                </ul></li>

                <li class="topmenu" id="registrationTop">
                    <a class="menuLink" href="#">등록</a>
                <ul class="submenu" id="sub3">
                    <li class="submenu3">포인트 등록</li>
                    <li class="submenu3">QR코드 등록</li>
                </ul></li>

                <li class="topmenu" id="questionTop">
                    <a class="menuLink" href="#">문의</a>
                <ul class="submenu" id="sub4">
                    <li class="submenu4">FAQ</li>
                    <li class="submenu4">Q&amp;A</li>
                    <li class="submenu4">제휴문의</li>
                    <li class="submenu4">사용자 가이드</li>
                </ul></li>

                <li class="topmenu" id="mypageTop">
                    <a class="menuLink" href="#">내 정보</a>
                <ul class="submenu" id="sub5">
                    <li class="submenu5">Mypage</li>
                    <li class="submenu5">포인트</li>
                </ul></li>

                <li class="topmenu" id="goLogin">
                    <a class="menuLink" href="/Login">로그인</a>
                <ul class="submenu" id="sub6">
                <li class="submenu6" id="goSignup">
                    <a class="menuLink" href="/Signup">회원가입</a>
                </li>
                </ul>
                </li>
            </ul>
    );
    }
};

export default Menu;