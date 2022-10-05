import React from "react";
import './mainPage.css';
import { ScrollMenu, VisibilityContext, Arrow } from 'react-horizontal-scrolling-menu';
import trending from '../assets/trending.PNG';
import desktop from '../assets/desktop.PNG';
import top10 from '../assets/top10.PNG';
export default function MainPage() {


    return (
        <>
        <div className="main">
            <img src= {desktop} width = {300}/>
            <div className="main1">
            <div class="scrollmenu">
            
            <div><h1>Trending Exclusive</h1></div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            <div className="trending-exclusive">
                <img src={trending}/>
                <div>
                    <h3>Numba</h3>
                    <p>Tyler ICU .ft DJ Mapharisa</p>
                </div>
            </div>
            </div>
        </div>
            </div>
    
        <div >
        <div className="main1">
            <h1>Top 10</h1>
            <div className="">
            <div class="scrollmenu top10">
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
        </div>
            </div>
        </div>
        <div className="main1">
            <h1>Latest Drop</h1>
            <div className="">
            <div class="scrollmenu top10">
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
            <img src = {top10} />
        </div>
            </div>
        </div>
        </div>
        </>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </Arrow>
    );
}

