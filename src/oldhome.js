import React, { Component } from 'react';

import './Home.css';



class App extends Component {
    render() {
      return (
        <div id="container">
        <div id="ucb"><script type="text/javascript">ucbheader<>;</script></div>
        <div id="wrapper">
         <div id="nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="presentations.html">Presentations</a></li>
                <li><a href="teaching.html">Teaching</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="awards.html">Awards</a></li>
            </ul>
        </div>
         <div id="banner">
             <div id="name">
            <h1>Jesse Egbert</h1>
            <p><b>Assistant Professor</b></p>
            <p>Applied Linguistics</p>
            <p>Northern Arizona University</p>
        </div>
        <div>
            <p align="right"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="https://en.wikipedia.org/wiki/Rotuma" style="color: white" target="_blank">ROTUMA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></p>
             </div>
        </div>
        <div id="page">
                    <div id="content">
    
                    <div id="sidebar">
                    <img src="Jesse3.jpg" width="160" height="225" id="fac_photo" title="faculty photo" />
                    <h3>Contact</h3>
                      <font size=3>BAA 315<br />
                     Northern Arizona University<br />
                     Flagstaff, AZ 86011<br />
                      Phone (801) 979-1706<br />
                      <a href="mailto:Jesse.Egbert@nau.edu">Jesse.Egbert@nau.edu</a></p></font>
                </div>
    
                <font size=3.5><p>Welcome!</p>
                <p>I am an Assistant Professor of Applied Linguistics at Northern Arizona University.
    
                <p>As a researcher, I specialize in the use of corpus linguistic methods to explore patterns of language variation across registers <situationally-defined language varieties> of academic prose and the internet. I'm also interested in issues related to quantitative linguistic research, including corpus design and representativeness, methodological triangulation, and the application of multivariate statistical techniques to language data.</p>
                </p></font>
                <p>  </p>
    
    
          </div>
        </div>
        </div>
        <div id="footer">
            <script type="text/javascript">ucbfooter<>;</script></div>
    </div>
      
      );
    }
  }
  
  export default Home;