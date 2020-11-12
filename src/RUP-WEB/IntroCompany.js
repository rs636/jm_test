import React, {useState} from 'react'
import './IntroCompany.css'
import tmb from './텀블러2.jpg';

class IntroCompany extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedOption:false //기본은 아무것도 안누르게 설정
    }
}
   handleOptionChange=(e)=>{ //옵션설정바꿔주기
    this.setState({
      selectedOption: e.target.value
    });
  }
    render(){
    return (
        <div id="Company">
          <h3>플라스틱으로 인한 환경 문제를 쉽게 해결할 수 있다면<br/>
          당신도 참여하시겠습니까?</h3>
          <br/>
          <label class="labelR">
          <input type="radio" value="YES" class="buttonR"
          checked={this.state.selectedOption === 'YES'} //만약 옵션설정이 YES이면 체크
          onChange={this.handleOptionChange}/>
          <span>YES</span>
          </label>
          <label class="labelR">
          <input type="radio" value="NO" class="buttonR"
          checked={this.state.selectedOption === 'NO'} //만약 옵션설정이 NO이면 체크
          onChange={this.handleOptionChange}/>
         <span>NO</span>
          </label> <br/><br/>

          {/*라디오 박스 선택이 YES이면 img가 보이도록 */}
          {this.state.selectedOption==="YES"&&<img id="tmbl" src={tmb}/>}
          {/*NO이면 div가 보이도록 */}
          {this.state.selectedOption==="NO" && <div style={{color : 'red'}}>YES를 눌러 환경 문제 해결에 기여해보세요!</div>}<br/>
        </div>
    );
    }
};

export default IntroCompany;