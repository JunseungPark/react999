import axios from "axios";
import React from "react";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import WrapTitle from "../layouts/WrapTitle";
import ContInfo from "../layouts/ContInfo";
import PortInfo from "../info/PortInfo";
import Loading from "../layouts/Loading";

// 클래스형 컴퍼넌트 // 함수형 컴퍼넌트
// 함수형 컴퍼넌트 --> 리엑트 훅(useEffect)
class Portfolio extends React.Component {
    //변수. 배열, 객체, 스테이트
    state =  {
        isLoading: true,
        ports : [],
    }

    getPorts = async () => {
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json")
        // console.log(ports.data.data.ports);
        this.setState({ports, isLoading : false} )
    }

    componentDidMount(){
        setTimeout(()=>{
            // this.setState({isLoading: false})
            this.getPorts();
        }, 3000);
    }

    render(){
        const {isLoading, ports} = this.state;
        return (
            <div>
                {isLoading ? (
                    <Loading></Loading>
                ) : (
                    <div>
                    <Header></Header>
                    <Contents>
                        <section id="portCont">
                            <div className="container">
                                <WrapTitle text= {['portfolio','Site']}/>
                                <div className="port__cont">
                                        {ports.map((port) => (
                                            <PortInfo 
                                                key = {port.id}
                                                id = {port.id}
                                                title = {port.title}
                                                category = {port.category}
                                                link = {port.link}
                                                image = {port.image}
                                            />
                                        ))}
                                </div>
                            </div>
                        </section>
                        <ContInfo></ContInfo>
                    </Contents>
                    <Footer></Footer>  
                </div>
                )}
            </div>
        )
    }
}

// function Portfolio() {
//     return (
//     <div>
//     <Header></Header>
//     <Contents>
//         <section id="portCont">
//             <div class="container">
//                 <WrapTitle text= {['portfolio','Site']}/>
//                 <div class="port__cont">
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="port">
//                         <a href="#">
//                             <div class="pImg">
//                                 <img src="assets/img/port01.jpg" alt="포트폴리오1"/>
//                             </div>
//                             <div class="pText">
//                                 <h3>PORTFOLIO HWANG</h3>
//                                 <p>PORTFOLIO</p>
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <ContInfo></ContInfo>
//     </Contents>
//     <Footer></Footer>  
// </div>
//     )
// }

export default Portfolio;