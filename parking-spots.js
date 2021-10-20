import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'

export default function parkingSpots() {
    return(
        
    <><main>
        <center>
            <Head>
                <title>SharkPark</title>
            </Head>
        <Image src={IMG_0885} height={250} width={300} />
        </center>
            
        <center>
            <div class = "title">
                <h1> Parking spot available at 24 Calhoun St. from 10am to 2pm on 10/21/21</h1>
            
                    <a href="http://localhost:3000/posts/buy-a-spot">
                        <input className="Button" type="button" value="Book Parking Spot"></input>
                    </a>
                
            </div>
        </center>
        
            
            



        </main>
        
        <style>{`
        
        .title {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        .Button {
            height: 40px;
            padding: 0px  10px 35px 10px;
            border-radius: 5px;
            line-height: 38px;
            border: 1.5px solid gray;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            }
            .Button:hover {
                border: 3px solid gray;
           
            }
            
        `}</style></>

        

        

    )
}