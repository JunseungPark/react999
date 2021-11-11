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
        htmlRefer: []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
        this.setState({htmlRefer, isLoading : false} )
        console.log(htmlRefer);
    }


    componentDidMount() {
        setTimeout(()=>{
            this.getRefer();
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
                                    <h3>HTML</h3>
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