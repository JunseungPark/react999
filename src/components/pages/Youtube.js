import { useState, useEffect, React } from "react";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import YoutubeList from "../info/YoutubeList"
import YoutubeSearch from "../info/YoutubeSearch";
import Loading from "../layouts/Loading";
import {gsap} from "gsap";
import dotenv from "dotenv";

function Youtube() {

    const [videos, setVideos] = useState([]); 
    const [search, setSearch] = useState([]); 
    const [state, setState] = useState([]);
    dotenv.config();
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

    const start = () => {
        setTimeout(()=>{
            document.getElementById("loading").classList.remove("loading-active");
            gsap.set(".wrap__title h2 strong", {opacity:0, y:100})
            gsap.set(".wrap__title h2 em", {opacity:0, y:100})
            gsap.set("#header", {top:"-100%",})
            gsap.set("#footer", {bottom:"-100%",})
            gsap.set(".youtube__cont", {opacity:0,})
            gsap.to(".wrap__title h2 strong", {duration: 0.4, opacity:1, delay:1, y:0, ease: "power2.out"})
            gsap.to(".wrap__title h2 em", {duration: 0.4, opacity:1, delay:1.4, y:0, ease: "power2.out"})
            gsap.to("#header", {duration: 0.4, top:0, delay:1.8})
            gsap.to("#footer", {duration: 0.4, bottom:0, delay:2})
            gsap.to(".youtube__cont", {duration: 0.4, opacity:1, delay:2.2})
        }, 2000)
    }

    useEffect(() => {
        setSearch(state)
    }, [state])
    useEffect(() => {
        data();
    }, [search]);

    // 문자가 변경되었을때
    const onSearchChanged = event => {
        // 타이틀을 저장
        const _title = event.target.value

        console.log(_title)

        setState(_title)

    }

    // start();
    const onClick = (e) => {
    }
    const data = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${API_KEY}&maxResults=5&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items);
            })
            .catch(error => console.log('error', error));
    }
    
    return (
        <div>
            {/* <Loading></Loading> */}
            <Header></Header>
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <div className="wrap__title">
                            <h2><strong>Youtube</strong><em>Reference</em></h2>
                        </div>
                        <div className="youtube__cont">
                            <div className="search">
                                <label htmlFor="youtubeInput" className="sr-only">검색하기</label>
                                <input value={search}
                                onChange={onSearchChanged} id="video-search" type="text" placeholder="Enter Search Keyword"></input>
                                <button type="submit" onClick={onClick}>검색</button>
                            </div>   
                            <div className="youtube">
                                <YoutubeList videos={videos}></YoutubeList>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </Contents>
            <Footer></Footer>  
        </div>
    )
}

export default Youtube;