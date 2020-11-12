import React, {useState} from 'react'
import './IntroTeam.css'
import imgSo from './imgSo.png';
import imgSu from './김수희.png';
import imgY from './한윤정.png';
import imgD from './백다은.png';
import imgM from './이주미.png';
import imgH from './현혁승.png';
import imgJ from './김진혁.png';

class IntroTeam extends React.Component {
    render(){
    return (
        <div id="team">
           <h1>RUP 팀원을 소개합니다!</h1><br/>
           <div id="teamCEO">
               <img src={imgSo} alt="소영"/><br/>
               <div class="name">박소영:&nbsp;</div>
               RUP CEO
           </div>
           <div id="team1">
               <div class="team1_1">
               <img src={imgSu} alt="수희"/><br/>
               <div class="name">김수희:&nbsp;</div>
               Android Developer
               </div>
               <div class="team1_1">
               <img src={imgY} alt="윤정"/><br/>
               <div class="name">한윤정:&nbsp;</div>
               Android Developer
               </div>
               <div class="team1_1">
               <img src={imgD} alt="다은"/><br/>
               <div class="name">백다은:&nbsp;</div>
               UI/UX Designer
               </div>
           </div>
           <div id="team2">
           <div class="team2_1">
               <img src={imgM} alt="주미"/><br/>
               <div class="name">이주미:&nbsp;</div>
               Web Developer
               </div>
               <div class="team2_1">
               <img src={imgH} alt="혁승"/><br/>
               <div class="name">현혁승:&nbsp;</div>
               Web Developer
               </div>
               <div class="team2_1">
               <img src={imgJ} alt="진혁"/><br/>
               <div class="name">김진혁:&nbsp;</div>
               DB/Sever Manager
               </div>
           </div>
        </div>
    );
    }
};

export default IntroTeam;