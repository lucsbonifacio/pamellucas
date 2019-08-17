import React, { Component } from 'react';
import './playlist.css';


export default class Playlist extends Component {
    openPlaylist() {
        const playlistUrl = 'https://open.spotify.com/playlist/3awHggCmrclQC7RwmQx96l?si=gBHzAOh3T0ir2kknVF3aEw';
        window.open(playlistUrl, '_blank');
    }

    render() {
        return (
            <div className="playlist">
                <button className="button--spotify" onClick={() => this.openPlaylist()}>
                    <svg className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.9806557,0 C22.4213115,0 0,22.4229508 0,49.9845902 C0,77.5632787 22.4213115,100 49.9806557,100 C77.5613115,100 100,77.5632787 100,49.9845902 C100,22.4229508 77.5613115,0 49.9806557,0 Z M24.6163934,68.3508197 C30.4111475,66.5868852 36.352459,65.692459 42.2744262,65.692459 C52.3321311,65.692459 62.2613115,68.2413115 70.9931148,73.0662295 C71.512459,73.3491803 71.9845902,74.284918 72.1963934,75.4498361 C72.4081967,76.6144262 72.3239344,77.8121311 71.9839344,78.435082 C71.5547541,79.2344262 70.6839344,79.7511475 69.764918,79.7511475 C69.3095082,79.7511475 68.9091803,79.6488525 68.5088525,79.432459 C60.4931148,75.0265574 51.4216393,72.697377 42.2744262,72.697377 C36.7481967,72.697377 31.3229508,73.5154098 26.1540984,75.1265574 C25.9022951,75.2029508 25.6432787,75.2419672 25.3842623,75.2419672 C24.252459,75.2422951 23.2701639,74.5213115 22.9406557,73.4514754 C22.4957377,71.9888525 23.4160656,68.7432787 24.6163934,68.3508197 Z M22.4360656,49.9354098 C28.8947541,48.1796721 35.5695082,47.2891803 42.2747541,47.2891803 C54.3288525,47.2891803 66.2986885,50.2059016 76.8980328,55.7281967 C77.6409836,56.1052459 78.1885246,56.7445902 78.4393443,57.5281967 C78.6937705,58.3219672 78.6170492,59.1754098 78.22,59.9370492 C77.2740984,61.7881967 76.1685246,63.0321311 75.4681967,63.0321311 C74.9718033,63.0321311 74.4927869,62.9131148 74.0157377,62.6747541 C64.1734426,57.5495082 53.4944262,54.9508197 42.2744262,54.9508197 C36.0334426,54.9508197 29.9104918,55.7714754 24.0813115,57.3885246 C23.8101639,57.4619672 23.5318033,57.4990164 23.2547541,57.4990164 C21.852459,57.4993443 20.6167213,56.5521311 20.2508197,55.1996721 C19.7822951,53.4406557 20.8527869,50.3659016 22.4360656,49.9354098 Z M21.8777049,37.9036066 C21.5816393,37.9767213 21.2790164,38.0134426 20.9780328,38.0134426 C19.2832787,38.0137705 17.8147541,36.8685246 17.4068852,35.2308197 C16.8957377,33.1577049 18.1927869,30.7495082 20.0711475,30.2763934 C27.3763934,28.4819672 34.8465574,27.5721311 42.2744262,27.5721311 C56.6534426,27.5721311 70.4242623,30.804918 83.2091803,37.182623 C84.0970492,37.6206557 84.7590164,38.3767213 85.0737705,39.3114754 C85.3885246,40.2472131 85.3190164,41.2544262 84.8796721,42.1442623 C84.2809836,43.342623 82.9872131,44.6327869 81.5613115,44.6327869 C81.0114754,44.6327869 80.4468852,44.5039344 79.9468852,44.2691803 C68.2029508,38.3934426 55.5281967,35.4140984 42.2747541,35.4140984 C35.4636066,35.4144262 28.6013115,36.2518033 21.8777049,37.9036066 Z" id="XMLID_86_"></path>
                    </svg>
                </button>
            </div>            
        );
    }
}