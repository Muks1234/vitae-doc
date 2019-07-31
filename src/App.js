import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bodyclass">
      <div className="contacts">
      <img className="avatar" alt="profile pic" src="https://pbs.twimg.com/media/EAO4UQoXkAEeddN.jpg"></img>
      <div className="info">  
        <p id="contact">Junior Full Stack developer</p>       
        <table>
          <tr>
            <td className="table-icon">
            <i style={{fontSize:'13pt'}} className="fa fa-baby"></i>
            </td>
            <td className="table-text">
            Born 3 January 1994 in Matatiele, Eastern Cape
            </td>
          </tr>
          <tr>
            <td className="table-icon">
              <i className="fas fa-home"></i>
            </td>
            <td className="table-text">
                89 Gordonsands Gordonsbay 7151
            </td>
          </tr>
          <tr>
            <td className="table-icon">
              <i className="fas fa-phone fa-rotate-90"></i>
            </td>
            <td className="table-text">
                064 645 0631/ 079 103 8123
            </td>
          </tr>
          <tr>
            <td className="table-icon">
              <i className="fas fa-envelope"></i>
            </td>
            <td className="table-text">
              mollelwa@outlook.com
            </td>
          </tr>
          <tr>
            <td className="table-icon">
              <i className="fab fa-github" style={{fontSize:14}}></i>
            </td>
            <td className="table-text">
          <a style={{color:'white'}} href="https://github.com/Muks1234"  target="_blank">github.com/Muks1234</a> 
            </td>
          </tr> 
          <tr>
            <td className="table-icon">
            <i className="fab fa-free-code-camp" style={{fontSize:14}}></i>
            </td>
            <td className="table-text">
            www.freecodecamp.org <a style={{color:'white'}} href="https://www.freecodecamp.org/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd" target="_blank">public profile link</a>
            </td>
          </tr>
          <tr>
            <td className="table-icon">
            <i className="fa fa-globe" style={{fontSize:14}}></i>
            </td>
            <td className="table-text">
            <a style={{color:'white'}} href="http://mngoma_mollelwa_portfolio.surge.sh/" target="_blank">Personal portfolio</a>
            </td>
          </tr>           
        </table>

      </div>
      </div>
      <div className="content">
        <h3 style={{marginTop:'0px',textAlign:'center', display:'block', border:'1px solid grey',color:'white', backgroundColor:'teal', padding:5, borderRadius:4}}>Personal information</h3>

        <table className="details" style={{backgroundColor:'white', marginBottom:'-9px'}}>
          <tr>
            <th>Surname and First Names</th>
            <td>Mollelwa Solomon Mngoma</td>
          </tr>
          <tr>
            <th>ID Number</th>
            <td>9401036334085</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Male</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>South African</td>
          </tr>
          <tr>
            <th>Race</th>
            <td>Black</td>
          </tr>
          <tr>
            <th>Cell phone number</th>
            <td>064 645 0631</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>mollelwa@outlook.com</td>
          </tr>
          
        </table>
        <h3 style={{textAlign:'center', display:'block', border:'1px solid grey',color:'white', backgroundColor:'teal', padding:5,borderRadius:4}}>Profile</h3>
        <table className="contentTable">
    
          <tr>
            <td style={{verticalAlign: 0}}>
              
            </td>
            <td>
              <p style={{fontSize:15}}>I dropped out of bsc mechatronics at University of Cape town and went to pursue a national diploma in electrical 
              engineering at the Durban University of Techonolgy. I completed all studies under the diploma except for 
               practical industrial training two (P2) required in order for one to graduate. Whilst in search of P2 in January of this year (2019),
               I came across <a href="https://www.freecodecamp.org/" target="_blank"><em>freecodecamp.org</em></a>, an online non-profit organisation for learning to code in Javascript technology stack. I started my web-development career there, programming 13-14 hours a day (5AM - 6PM). I completed
               their entire self paced curriculum and recieved all six certifications -three under front-end and three under backend development respectively, as well as the Full stack (mern stack) certification, all of this achieved with the help of additional resources like
               free ebooks, reading blog posts on medium, w3schools and spending time on online forums and communities like stack overflow, reddit and reading issues on github as well as the friendly very supportive chatroom of freecodecamp called Gitter in case one gets stuck.</p>
              <br/>
               <p style={{fontSize:15}}>Competency on the Front-end</p>
                <ul style={{fontSize:15}}>
                  <li><b>Responsive web design</b> - html5 (with emphasis on search engine optimization and page usage by screen readers), templating languages (such as pug.js and ejs) as well as css3 (using important features such media query, flex-box as well css grid (currently supported by chrome) for flexible page layouts and cross-platform functionality.</li>
                  <li><b>Javascript algorithms and Data structures</b> - vanilla Javascript, ES6, Regular expressions, debugging, data structures, Object oriented programming (prototypes, supertypes and inheritance) and functional programming paradigm using higher
                    order functions like reduce, map, filter on arrays and much more. 
                  </li>  
                  <li>
                    <b>Front End libraries</b> - Reactjs, react router version 4,lifecycle methods, bootstrap 4, Jquery and exposure to redux and flux (for convenient state management of large scale apps) and exposure to Angularjs. Use of facebook's create-react-app tool to save time and avoid frustrations in line with the use of webpack.
                  </li>
                </ul>
                <br/>
                <p style={{fontSize:15}}>Competency on the back-end</p>
                <ul style={{fontSize:15}}>
                  <li><b>APIs and Microservices certification</b> - managing packages with Npm (and a selection of good packages from the open npm registry), working with Nodejs (Javascript runtime) and express, essential middleware like cors and body-parser, MongoDB and mongoose (a convenient library that makes life simple when it comes to querying the database in node as opposed to querying the db directly with mongo drivers.) and RestAPIs (e.g using fetch or axios for making http(s) requests from the react front-end or back-end(server to server requests) and handle them with javascript promises).</li>
                  <li><b>Information security and quality assurance</b> - Information security with Helmetjs (e.g avoiding XSS attacks with helmet.xssFilter() and click-jacking with helmet frame guard) middleware as well as  Quality assurance and testing with Mocha Chai (unit and functional testing). Advanced Node and express (e.g using bcrypt middleware for hashing passwords from form inputs into the database, serialization of a user object,
                  passport user authentication strategies e.g using passport local, or social authentication strategies such as github strategy with passport-github, google and many more. Use of Socket.io on web sockets with its real time communication by emitting feature and authentication.
                  </li>
                  <li>
                    <b>Data visualization</b> - (does not really fall under backend I just grouped it here) I have learned D3.js , a Javascript library for visualising data e.g data fetched from an external API and transforming it into its corresponding 
                    visual domain equivalent using graphs (e.g scatter plots,  bar charts, treemaps and heatmaps) on the client side.
                  </li>
                </ul>
            </td>
          </tr>
        </table>
        <h3 style={{textAlign:'center', display:'block', border:'1px solid grey',color:'white', backgroundColor:'teal', padding:5, borderRadius:4, marginTop:0}}>Technical Experience</h3>
        <table className="contentTable">
          <tr>
          </tr>
          <tr>
            <td>
                <p style={{fontSize:15}}>Freecodecamp has a regorous learn by doing training approach (like an apprenticeship, but of coding), in order for one to obtain a certification of a certain topic under web development
                  they have to complete 5 compulsory final projects of varying complexity at the end of studying and completing a lot of coding challenges under that topic on the site.
                  <a href="http://mngoma_mollelwa_portfolio.surge.sh/" target="_blank"> This is a link to my personal portfolio</a>.               
                </p>
                <p>As can be noted, on this portfolio majority of projects are front end (backend projects are on my github) and I have hosted each one
                  of them on the free hosting static server called surge after running npm's production build on each app's create-react-app bundle. Backend projects can be seen 
                  on my github as provided, the link on the side bar. In the tables below I briefly articulate some of the crucial lessons from some of my portfolio projects (some lessons basic but vital and some advanced) that I learned under each
                  project, front-end and backend respectively</p>
            </td>
          </tr>
          <tr><td><h4><u>Front-end projects</u>:</h4></td></tr>
          <tr>
            <td>
              <table className="frontend-table">                   
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>What has been learned</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td style={{verticalAlign: 0}}>
                            <a href="http://javascript_calculator.surge.sh/">Javascript Calculator</a>
                            </td>
                          <td>This calculator functions exactly like a mobile phone calculator (but without the percentage operator), I built it
                            using react and vanilla javascript making use of mainly if/else statements, for loops, javascript functions, ES6 arrow functions, the changing of the text of an element conditionally using ternary operators and textContent property, adding event listeners with event delegation pattern for click events, I learnt to decide on what is supposed to be in the state object of a project and what is not, and passing the state down from parent to child components as props and using callback functions from child components
                            to manipulate the state placed high in the parent component. 
                          </td>
                        </tr>
                        <tr className="even">
                          <td style={{verticalAlign: 0}}>                           
                            <a href="http://my_drum_beats_machine.surge.sh/"> Drum beats machine</a>
                          </td>
                          <td>
                            This app produces music beats similar to those of beat making software in the music industry although it is small. I built it with react and css grid for the layout. On the 
                            logical side I had to directly use javascript's event listeners for DOM manipulation(as reactjs for now only supports simple events like 'onClick' or 'onChange'), if you press (clicking works too) a key on your keyboard (one of the keys written on the app buttons e.g Q,W,E,A...) a 
                            property of the state object - the display message changes as can be seen on the display screen of the app,
                            the beat plays and css styles change correspondingly on each button, this is all a response to the 'keydown' and 'keyup' event listeners (mounted in componentDidmount and cleared in componentWillUnmount lifecycle methods for housekeeping of the global object) and their corresponding handler functions.
                            I also had to play around with html5 audio attributes like audio volume as can be seen (the audio track element on the app) and the audio play method.
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign: 0}}>
                          <a href="http://quotes_machine.surge.sh/">Random Quotes machine</a>
                          </td>
                          <td>
                            As the name suggests, this is a simple application that produces a random quote on each click of a 'new quote' button on the app. Ideally this app makes an http(s) request to the external API that delivers a random quote on each request to fill up a state object of the app in the componentDidmount lifecycle method,
                            however due to not finding a good free quotes API I decided to download and use a JSON file with a huge collection of quotes I found on github
                            and used it to hardcode the state and used a Math.random function to complete the app.
                          </td>
                        </tr>
                        <tr className="even">
                          <td style={{verticalAlign: 0}}>
                            <a href="http://mymarkdown_previu.surge.sh/">Markdown previewer</a>
                          </td>
                          <td>
                            This app is used to render a light weight syntax similar to html called markup. As one types in markup into the app editor , an output corresponding to html equivalent of the markup is rendered in the previewer.
                            I made the app with reactjs and css3,  as you type into the editor an 'onChange' handler inserts your input into the state object
                            and I used a package called Marked to parse down the markup in the state into html and the output is displayed into the previewer.
                            Here I also used conditional rendering of the UI as can be seen when expanding and contracting each UI element (previewer and editor) in its top right corner.
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign: 0}}>
                            <a href="http://tomato_watch.surge.sh/">Pomodoro clock</a>
                          </td>
                          <td>
                            Also known as tomato clock, it was used by Pomodoro during his days as a university student to be productive when studying. This clock counts down from 25 minutes by default (but can be adjusted on the up and down arrows provided)
                            on the UI, after that 25 minutes count down it rings notifying you that it is break time, e.g 5 minutes break count down, and goes back to the 25 minutes
                            countdown again, continuously in that cyclic order unless you stop it. I built it with react, here I mainly learnt to use the javascript 'setinterval' method regarding the clock count as well the formatting of the time string in 'hh:mm:ss'.
                          </td>
                        </tr>
                        <tr className="even">
                          <td style={{verticalAlign: 0}}>
                           <a href="portfilo.site">Responsive web projects</a>
                          </td>
                          <td>
                            Other projects on my portfolio site are made up mainly of html5 and css3 only, here the emphasis was on learning all the important features of css3 like
                            layout tools such as flex-box and media query which enable a site to function responsively 
                            across platforms of various screen sizes. In addition, I also learnt to build common website features such as top navigation e.g used on the <a href="http://product-landing-page.surge.sh/">Product landing page</a> - and here I additionally used an iframe to embbed a video from youtube into the site,  and then side navigation
                            as can be seen here on the <a href="http://my_python_documentation.surge.sh/">Technical Documentation page</a> - here the effect of flex-box in conjuction with media query is also well demonstrated, as can be seen its side navigation changes to top navigation when screen size decreases.
                          </td>
                        </tr>
                      </tbody>            
              </table>
            </td>
          </tr>
          <tr><td><h4><u>Back-end projects</u>:</h4>
                <p style={{fontSize:15}}>For the sake of brevity, in this section I have mentioned three projects from my freecodecamp backend projects on my github repositories,
                  there are 11 repos in total. Each project has a well explained readme.md file of instructions
                  about what the project should be able to do when one completes it. I was using a real live server online called Gomix from glitch website in conjunction with Mongo database
                  and exported each project to my github after completion. Therefore, the rest of the projects can be easily imported back to glitch.com from github to be seen in operation, below I have picked 3 of them
                  and I have explained their example operation and what I learned from doing each project.
                </p>
          </td></tr>
          <tr>
            <td>
            <table className="frontend-table">                   
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>What has been learned</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr>
                          <td style={{verticalAlign: 0}}>
                          <a href="https://github.com/Muks1234/Url-shortening-microservice">Url-shortening-microservice</a>
                          </td>
                          <td>
                            The url shortening microservice does exactly as the name suggests. It takes an url of any website that a user posts from the form input and retrieves it from the payload (body) of the request object and saves the url into the database
                            according to the mongoose schema model defined for the data, then responds with a shortened url in a form of a number in a json.
                            When visiting (GETting) that returned short url, a user gets redirected to the original url ,that they initially inserted into the form, with a response status code of 301.
                            For example if you visit my completed project on <a href="https://enchanted-thrill.glitch.me/" target="_blank">https://enchanted-thrill.glitch.me/</a> and replace the provided default input url  on the form with any url that you like e.g "https://twitter.com/" without the quotes (but the url protocol included), you will get a json response with a number 957273 as your short url and then if you visit <a href="https://enchanted-thrill.glitch.me/api/shorturl/957273" target="_blank">https://enchanted-thrill.glitch.me/api/shorturl/957273 </a> you will as a result be redirected to twitter.
                            The lessons in project were for example routing(endpoints), the ability to query the database then process the returned data and the use of dns.lookup package from npm registry as well as the ability to extract values from url and query parameters in general
                          </td>
                        </tr>
                        
                        
                        <tr className="even">
                          <td style={{verticalAlign: 0}}>
                           <a href="https://github.com/Muks1234/metric-imperial-converter">metric-imperial-converter</a>
                          </td>
                          <td>
                            Likewise as the name says, what this project does is, a user inputs a value of a certain quantity in metric unit (such as gallons as gal, pounds as lbs, miles as mi) and gets converted into its imperial unit equivalent value (gal to litres- L, lbs to kilograms- kg, mi to kilometers - km) respectively and vice versa.
                            for example if a user inputs a value of "4gal" (without quotes) into my completed app at <a href="https://rich-meteorite.glitch.me/" target="_blank">https://rich-meteorite.glitch.me/</a> then they will get a response "4 gallons converts to 15.14164 litres". Here the emphasis was on learning to perform unit and functional tests
                            after completing my app as well adding security features to my project e.g to prevent the client from trying to guess MIME type, as well as prevent cross site scripting on my completed app.
                          </td>
                        </tr>                        
                        <tr>
                          <td style={{verticalAlign: 0}}>
                           <a href="https://github.com/Muks1234/Server-listing-app" target="_blank">Server-listing-app</a>
                          </td>
                          <td>
                          This is a full stack application that uses MERN(mongoDB express react node) technology stack, I built it locally in create-react-app and uploaded its source code into my github therefore it can be cloned and operated locally in seperate
                          ports,front end on localhost:3000 and the server on localhost:4200.
                          The main aim of this simple project was to finally see myself actually putting the whole technology stack pieces together in one full stack react app and see how everything fits together e.g I also used react router v4 for routing.                        
                          </td>
                        </tr>                                      
                      </tbody>            
              </table>
            </td>
          </tr>
        </table>
        <h3 style={{marginTop:'0px',textAlign:'center', display:'block', border:'1px solid grey',color:'white', backgroundColor:'teal', padding:5, borderRadius:4}}>Education</h3>
        <table className="details" style={{backgroundColor:'white', marginBottom:'6px'}}>
          <tr>
            <th>Grade 12</th>
            <td>Tholang sss , science stream 2011</td>
          </tr>
          <tr>
            <th>Bsc Mechatronics</th>
            <td>University of Cape Town 2012-2014</td>
          </tr>
          <tr>
            <th>ND Electrical engineering</th>
            <td>Durban University of Techonolgy 2015-2017</td>
          </tr>
          <tr>
            <th>Electrical Industrial  Training 1 (P1)</th>
            <td>Sapling non-woven and textiles Westmead PineTown 2018</td>
          </tr>
          <tr>
            <th><a href="https://www.freecodecamp.org/certification/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd/responsive-web-design" target="_blank">Responsive web design certification</a></th>
            <td>Freecodecamp.org 2019</td>
          </tr>
          <tr>
            <th><a href="https://www.freecodecamp.org/certification/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd/full-stack" target="_blank">Full Stack Developer certification</a></th>
            <td>Freecodecamp.org 2019</td>
          </tr>
          <tr>
            <th><a href="https://www.freecodecamp.org/certification/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd/javascript-algorithms-and-data-structures" target="_blank">Javascript algorithms and Data structures cert</a></th>
            <td>Freecodecamp.org 2019</td>
          </tr>
          <tr>
            <th><a href="https://www.freecodecamp.org/certification/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd/front-end-libraries" target="_blank">Front End libraries certification</a></th>
            <td>Freecodecamp.org 2019</td>
          </tr>
          <tr>
            <th><a href="https://www.freecodecamp.org/certification/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd/apis-and-microservices" target="_blank">APIs and Microservices certification</a> </th>
            <td>Freecodecamp.org 2019</td>
          </tr>
          <tr>
            <th><a href="https://www.freecodecamp.org/certification/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd/information-security-and-quality-assurance" target="_blank">Information security and quality assurance cert</a></th>
            <td>Freecodecamp.org 2019</td>
          </tr>
          <tr>
            <th><a href="https://www.freecodecamp.org/certification/fcc0de029ee-f031-4b9b-9c3e-98c7f03049bd/data-visualization" target="_blank">Data visualization certification</a></th>
            <td>Freecodecamp.org 2019</td>
          </tr>
          
        </table>
        <h3 style={{marginTop:'0px',textAlign:'center', display:'block', border:'1px solid grey',color:'white', backgroundColor:'teal', padding:5, borderRadius:4}}>Awards</h3>
        <table className="details" style={{backgroundColor:'white', marginBottom:'6px'}}>
          <tr>
            <th>Certificate of academic exellence</th>
            <td>Tholang sss 2011 best learner Physical sciences</td>
          </tr>
          <tr>
            <th>Certificate of academic exellence</th>
            <td>Tholang sss 2011 best learner Mathematical sciences</td>
          </tr>
                 
        </table>
        <h3 style={{marginTop:'0px',textAlign:'center', display:'block', border:'1px solid grey',color:'white', backgroundColor:'teal', padding:5, borderRadius:4}}>Hobbies</h3>
        <table className="details" style={{backgroundColor:'white', marginBottom:'6px'}}>
          <tr>
            <td>Reading - online articles, motivational stories</td>
          </tr>
          <tr>
            <td>Use of technology gadgets</td>
          </tr>
          <tr>
            <td>Learning new technology frameworks and libraries</td>
          </tr>
          <tr>
            <td>Watching new movies</td>
          </tr>
          <tr>
            <td>Cooking</td>
          </tr>
                 
        </table>
        <h3 style={{marginTop:'0px',textAlign:'center', display:'block', border:'1px solid grey',color:'white', backgroundColor:'teal', padding:5, borderRadius:4}}>References</h3>
        <table className="details" style={{backgroundColor:'white', marginBottom:'6px'}}>
          <tr>
            <th>Tholang sss</th>
            <td>Mr Mfunda school principal- 0711476157</td>
          </tr>
          <tr>
            <th>Durban university of technology</th>
            <td>DR T Duba Senior lecturer mathematics III - Thamadub@dut.ac.za</td>
          </tr>
          <tr>
            <th>Sapling non-woven and textiles</th>
            <td>Siyabonga Xaba, colleague - 0730834535</td>
          </tr>
        
        </table>
      </div>
    </div>
  );
}

export default App;
