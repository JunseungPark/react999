import axios from "axios";
import React from "react";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Loading from "../layouts/Loading";
import WrapTitle from "../layouts/WrapTitle";
import ReferInfo from "../info/ReferInfo"
import ContInfo from "../layouts/ContInfo";


class Reference extends React.Component {
    state =  {
        isLoading:true,
        htmlRefer: [],
        cssRefer: [],
        javascriptRefer: [],
        tab:0
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://junseungpark.github.io/react999/src/assets/json/refer.json");
        this.setState({htmlRefer, isLoading : false} )
        console.log(htmlRefer +"1");
    }
    getCssRefer = async () => {
        const {
            data: {
                data: {cssRefer},
            },
        } = await axios.get("https://junseungpark.github.io/react999/src/assets/json/css_refer.json");
        this.setState({cssRefer, isLoading : false} )
        console.log(cssRefer +"2");
    }
    getJavaRefer = async () => {
        const {
            data: {
                data: {javascriptRefer},
            },
        } = await axios.get("https://junseungpark.github.io/react999/src/assets/json/java_refer.json");
        this.setState({javascriptRefer, isLoading : false} )
        console.log(javascriptRefer +"3");
    }


    componentDidMount() {
        setTimeout(()=>{
            this.getRefer();
            this.getCssRefer();
            this.getJavaRefer();
        }, 2000)
    }

    render(){
        const {isLoading, htmlRefer} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading></Loading>
                ) : (
                    <div>
                    <Header></Header>
                    <Contents>
                        <section id="referCont">
                            <WrapTitle text={['REFERENCE','BOOK']}></WrapTitle>
                            <div className="container">
                                <div className="refer__cont">
                                    <div className="table">
                                    <div className="tab">
                                    <h3>HTML</h3>
                                    <h3>CSS</h3>
                                    <h3>JAVASCRIPT</h3>
                                    </div>
                                        <ul>
                                            {htmlRefer.map((refer) => (
                                                <ReferInfo
                                                key = {refer.id}
                                                refer = {refer}
                                                >
                                                </ReferInfo>
                                            ))}
                                        </ul>
                                    </div>
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

export default Reference;