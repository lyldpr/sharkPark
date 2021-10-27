import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'
import spot from '/pages/posts/spot.jpeg'

export default function parkingSpots() {
    return(
        
    <><main>
            
           <title>SharkPark</title>
        <center>
            <div class = "title">
                    <div className = "spotSummary" ></div>
                    <div className = "box"></div>
                    <div className = "spotSummary2"></div>
                    <div className = "spotSummary3"></div>
                    <div className = "spotSummary4"></div>
                    <h2 className = "spot1"> 99 Calhoun St. </h2>
                    
                    <svg viewBox="0 0 1024 1024" fill="currentColor" class="Icon "><path d="M464.4 95.3c0-52.4 42.9-95.3 95.3-95.3S655 42.9 655 95.3s-42.9 95.3-95.3 95.3c-52.5-.1-95.3-43-95.3-95.3zm357.2 452.4v-95.3c-90.5 0-166.7-47.6-204.8-114.3L569.2 262c-19.1-28.6-47.6-47.6-81-47.6-14.3 0-23.8 4.8-38.1 4.8L202.4 323.9v223.9h95.3v-162l85.7-33.3L250 1024h100l85.7-381 100 95.3V1024H631V666.8l-100-95.3 28.6-142.9c61.9 71.5 157.2 119.1 262 119.1z"></path></svg>
                    <h4 className = "miles"> 1.2 miles </h4>
                    <h3 className = "price"> $8 </h3>

                    <h2 className = "spot2"> 95 Calhoun St. </h2>
                    <svg viewBox="0 0 1024 1024" fill="currentColor" class="Icon2 "><path d="M464.4 95.3c0-52.4 42.9-95.3 95.3-95.3S655 42.9 655 95.3s-42.9 95.3-95.3 95.3c-52.5-.1-95.3-43-95.3-95.3zm357.2 452.4v-95.3c-90.5 0-166.7-47.6-204.8-114.3L569.2 262c-19.1-28.6-47.6-47.6-81-47.6-14.3 0-23.8 4.8-38.1 4.8L202.4 323.9v223.9h95.3v-162l85.7-33.3L250 1024h100l85.7-381 100 95.3V1024H631V666.8l-100-95.3 28.6-142.9c61.9 71.5 157.2 119.1 262 119.1z"></path></svg>``
                    <h4 className = "miles2"> 1.3 miles </h4>
                    <h3 className = "price2"> $8 </h3>
                    <a href="http://localhost:3000/posts/buy-a-spot">
                        <input className="Button2" type="button" value="Book Parking Spot"></input>
                    </a>
                    
                    <h2 className= "spot3"> 90 Calhoun St. </h2>
                    <svg viewBox="0 0 1024 1024" fill="currentColor" class="Icon3 "><path d="M464.4 95.3c0-52.4 42.9-95.3 95.3-95.3S655 42.9 655 95.3s-42.9 95.3-95.3 95.3c-52.5-.1-95.3-43-95.3-95.3zm357.2 452.4v-95.3c-90.5 0-166.7-47.6-204.8-114.3L569.2 262c-19.1-28.6-47.6-47.6-81-47.6-14.3 0-23.8 4.8-38.1 4.8L202.4 323.9v223.9h95.3v-162l85.7-33.3L250 1024h100l85.7-381 100 95.3V1024H631V666.8l-100-95.3 28.6-142.9c61.9 71.5 157.2 119.1 262 119.1z"></path></svg>``
                    <h4 className = "miles3"> 1.5 miles </h4>
                    <h3 className = "price3"> $9 </h3>
                    <a href="http://localhost:3000/posts/buy-a-spot">
                        <input className="Button3" type="button" value="Book Parking Spot"></input>
                    </a>

                    <h2 className = "spot4"> 75 Calhoun St. </h2>
                    <svg viewBox="0 0 1024 1024" fill="currentColor" class="Icon4 "><path d="M464.4 95.3c0-52.4 42.9-95.3 95.3-95.3S655 42.9 655 95.3s-42.9 95.3-95.3 95.3c-52.5-.1-95.3-43-95.3-95.3zm357.2 452.4v-95.3c-90.5 0-166.7-47.6-204.8-114.3L569.2 262c-19.1-28.6-47.6-47.6-81-47.6-14.3 0-23.8 4.8-38.1 4.8L202.4 323.9v223.9h95.3v-162l85.7-33.3L250 1024h100l85.7-381 100 95.3V1024H631V666.8l-100-95.3 28.6-142.9c61.9 71.5 157.2 119.1 262 119.1z"></path></svg>``
                    <h4 className = "miles4"> 2 miles </h4>
                    <h3 className = "price4"> $10 </h3>
                    <a href="http://localhost:3000/posts/buy-a-spot">
                        <input className="Button4" type="button" value="Book Parking Spot"></input>
                    </a>



                    <div className = "spot1pic">
                    <Image src={spot} height = {100} width = {150} />
                    </div>
                    <div className = "spot2pic">
                    <Image src={spot} height = {100} width = {150} />
                    </div>
                    <div className = "spot3pic">
                    <Image src={spot} height = {100} width = {150} />
                    </div>
                    <div className = "spot4pic">
                    <Image src={spot} height = {100} width = {150} />
                    </div>

                    
                    
                    <a href="http://localhost:3000/posts/buy-a-spot">
                        <input className="Button" type="button" value="Book Parking Spot"></input>
                    </a>
                
            </div>
        </center>
        


        </main>
        
        <style>{`
        
        .spot3pic {
            z-index: 600;
            position: absolute;
            right: 390px;
            left: 50px;
            top: 350px;
            bottom: 0px;
            flex: left;
        } 
        

        .spot4pic {
            z-index: 600;
            position: absolute;
            right: 390px;
            left: 50px;
            top: 500px;
            bottom: 0px;
            flex: left;


        }
        .price {
            z-index: 600;
            position: absolute;
            right: 350px;
            top: 60px;
            bottom: 0px;
            flex: left;

        }
        .price2 {
            z-index: 600;
            position: absolute;
            right: 350px;
            top: 210px;
            bottom: 0px;
            flex: left;

        }
        .price3 {
            z-index: 600;
            position: absolute;
            right: 350px;
            top: 365px;
            bottom: 0px;
            flex: left;

        }
        .price4 {
            z-index: 600;
            position: absolute;
            right: 350px;
            top: 515px;
            bottom: 0px;
            flex: left;

        }
        .miles {
            z-index: 600;
            position: absolute;
            right: 575px;
            top: 100px;
            bottom: 0px;
            flex: left;
            

        }
        .miles2 {
            z-index: 600;
            position: absolute;
            right: 575px;
            top: 252px;
            bottom: 0px;
            flex: left;

        }
        .miles3 {
            z-index: 600;
            position: absolute;
            right: 575px;
            top: 400px;
            bottom: 0px;
            flex: left;

        }
        .miles4 {
            z-index: 600;
            position: absolute;
            right: 588px;
            top: 553px;
            bottom: 0px;
            flex: left;

        }
        .Icon {
            width: 20px;
            height: 20px;
            position: absolute;
            z-index: 600;
            position: absolute;
            right: 700px;
            left: 550px;
            top: 120px;
            bottom: 0px;
            flex: left;
        }
        .Icon2 {
            width: 20px;
            height: 20px;
            position: absolute;
            z-index: 600;
            position: absolute;
            right: 700px;
            left: 550px;
            top: 270px;
            bottom: 0px;
            flex: left;

        }
        .Icon3 {
            width: 20px;
            height: 20px;
            position: absolute;
            z-index: 600;
            position: absolute;
            right: 700px;
            left: 550px;
            top: 417px;
            bottom: 0px;
            flex: left;

        }
        .Icon4 {
            width: 20px;
            height: 20px;
            position: absolute;
            z-index: 600;
            position: absolute;
            right: 700px;
            left: 550px;
            top: 570px;
            bottom: 0px;
            flex: left;

        }
        .box {
            position: absolute;
            right: 0;
            left: 300px;
            bottom: 0;
            top: 0;
            background-color: #f6f7f9;
            box-shadow: 4px 4px 4px 4px rgb(0 45 91 / 10%);
            overflow: auto;
            z-index: 400;
            -webkit-overflow-scrolling: touch;
            right: auto;
            width: 700px;
        }
        .spot1pic {
            z-index: 600;
            position: absolute;
            right: 390px;
            left: 50px;
            top: 45px;
            bottom: 0px;
            flex: left;

        }
        .spot2pic {
            z-index: 600;
            position: absolute;
            right: 390px;
            left: 50px;
            top: 198px;
            bottom: 0px;
            flex: left;

        }
        .spot1 {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            z-index: 600;
            position: absolute;
            right: 410px;
            left: 600px;
            top: 30px;
            bottom: 0px;
            flex: left;

        }
        .spot2 {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            z-index: 600;
            position: absolute;
            right: 410px;
            left: 600px;
            top: 180px;
            bottom: 0px;
            flex: left;

        }
        .spot3 {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            z-index: 600;
            position: absolute;
            right: 410px;
            left: 600px;
            top: 330px;
            bottom: 0px;
            flex: left;

        }
        .spot4 {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            z-index: 600;
            position: absolute;
            right: 410px;
            left: 600px;
            top: 485px;
            bottom: 0px;
            flex: left;

        }
        
        .title {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        .spotSummary {
            height: 100px;
            width: 600px;
            margin: 2rem;
            flex: left;
            justify-content: space-between;
            position: absolute;
        right: 0px;
        left: 300px;
        top: 0px;
        bottom: 0px;
        padding: 16px;
        font-size: 14px;
    box-shadow: 1px 2px 3px 0 rgb(0 45 91 / 10%);
    display: block;
            z-index: 500;
    background: white;
    
    border-radius: 50px;
    }

    .spotSummary2 {
        height: 100px;
            width: 600px;
            margin: 2rem;
            flex: left;
        justify-content: space-between;
        position: absolute;
        right: 0px;
        left: 300px;
        top: 150px;
        bottom: 40px;
        padding: 16px;
        font-size: 14px;
    box-shadow: 1px 2px 3px 0 rgb(0 45 91 / 10%);
    display: block;
            z-index: 500;
    background: white;
    
    border-radius: 50px;

    }
    .spotSummary3 {
        height: 100px;
        width: 600px;
        margin: 2rem;
        flex: left;
        justify-content: space-between;
        position: absolute;
        right: 0px;
        left: 300px;
        top: 300px;
        bottom: 40px;
        padding: 16px;
        font-size: 14px;
        box-shadow: 1px 2px 3px 0 rgb(0 45 91 / 10%);
        display: block;
        z-index: 500;
        background: white;
        border-radius: 50px;
    }
    .spotSummary4 {
        height: 100px;
            width: 600px;
            margin: 2rem;
            flex: left;
        justify-content: space-between;
        position: absolute;
        right: 0px;
        left: 300px;
        top: 450px;
        bottom: 40px;
        padding: 16px;
        font-size: 14px;
    box-shadow: 1px 2px 3px 0 rgb(0 45 91 / 10%);
    display: block;
            z-index: 500;
    background: white;
    
    border-radius: 50px;
    }
        
        .Button {
            position: absolute;
            right: 400px;
            left: 800px;
            top: 110px;
            bottom: 0px;
            height: 40px;
            padding: 0px  10px 35px 10px;
            border-radius: 5px;
            line-height: 38px;
            border: 1.5px solid gray;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            z-index: 600;
            }
            .Button:hover {
                border: 3px solid gray;
            }
            .Button2 {
            position: absolute;
            right: 400px;
            left: 800px;
            top: 260px;
            bottom: 0px;
            height: 40px;
            padding: 0px  10px 35px 10px;
            border-radius: 5px;
            line-height: 38px;
            border: 1.5px solid gray;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            z-index: 600;
            }
            .Button2:hover {
                border: 3px solid gray;
            }
            .Button3 {
                position: absolute;
            right: 400px;
            left: 800px;
            top: 412px;
            bottom: 0px;
            height: 40px;
            padding: 0px  10px 35px 10px;
            border-radius: 5px;
            line-height: 38px;
            border: 1.5px solid gray;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            z-index: 600;

            }
            .Button3:hover {
                border: 3px solid gray;
            }
            .Button4 {
                position: absolute;
            right: 400px;
            left: 800px;
            top: 565px;
            bottom: 0px;
            height: 40px;
            padding: 0px  10px 35px 10px;
            border-radius: 5px;
            line-height: 38px;
            border: 1.5px solid gray;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            z-index: 600;

            }
            .Button4:hover {
                border: 3px solid gray;
            }
        `}</style></>

        

        

    )
}