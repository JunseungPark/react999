import React from "react";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Info({text}){
    return <div>{text}</div>
}
const textInfo = [
    {text : "You are"},
    {text : "already"},
    {text : "doing well."},
]
function Contact() {
    return (
        <div>
        <Header></Header>
        <Contents>
            <section id="mainCont">
                <h2 className="sr-only">연락처 컨텐츠 영역입니다.</h2>
                <div className="main__cont tact">
                    {textInfo.map((info)=>(
                        <Info text = {info.text} key = {info.text}></Info>
                    ))}
                </div>
            </section>
        </Contents>
        <Footer></Footer>  
    </div>
    )
}

export default Contact;