import React from "react";
import Header from "../layouts/Header";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import ContInfo from "../layouts/ContInfo";

class ReferDetail extends React.Component {
    componentDidMount() {
        const { location, history} = this. props;
        console.log(location);

        if(location.state == undefined) {
            history.push("/reference")
        }
    }

    render(){
        const {location} = this.props;
        const {title,desc,element,category,property} = this.props.location.state.javaRefer;
        return (
            location.state
            ? (
                <div>
                    <Header></Header>
                    <Contents>
                    <section id="referCont">
                            <div className="container">
                                <div className="refer__detail pt200">
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>요소</th>
                                                <td>{element}</td>
                                            </tr>
                                            <tr>
                                                <th>카테고리</th>
                                                <td>{category}</td>
                                            </tr>
                                            <tr>
                                                <th>속성</th>
                                                <td>{property}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <Link className="list-btn" to="/reference">목록보기</Link>
                                </div>
                            </div>
                        </section>
                        <ContInfo></ContInfo>
                    </Contents>
                    <Footer></Footer> 
                </div>
            )
            :<span></span>
        )
    }
}

export default ReferDetail