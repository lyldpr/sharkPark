import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'
import metamask from '/pages/posts/metamask.png'




export default function buyASpot() {

    return (
        
    <><main>
        <Head>
            <title>SharkPark</title>
        </Head>
        
        <center>
            <Image src={IMG_0885} height={250} width={300} />
        </center>
        
        <center>
        <div class="checkout-panel">
           <h2 class="title">Checkout</h2>
                <div class="payment-method">
            
                    <label for="paypal" class="method paypal">
                        <Image src={metamask} height={300} width={75} />
                            <div class="radio-input">
                                <input id="mm" type="radio" name="payment"/>
                                        ay $8.00 with MetaMask
                            </div>
                    </label>
      
                </div>
    

            <div class="panel-footer">
                <a href="http://localhost:3000/posts/transaction-complete">
                    <button class="btn next-btn">Complete Booking</button>
                </a>
            </div>
  
        </div>
        </center>


        

        </main><style>{`
       
        * {
            box-sizing: border-box;
          }
           
          html,
          body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            font-size-adjust: u
            display: flex;
            width: 100%;
            height: 100%;
            min-height: 100%;
            background: white;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
            

          }
          
          .checkout-panel {
          
            position: absolute;
            width: 940px;
            height: 766px;
            background-color: white;
            align-items: center;
            justify-items: center;
            margin: 0;
            top: 50%;
            left: 35%;
            
            
          }
          
           
          .title {
            display: flex;
            position: absolute;
            margin: 0;
            top: -50px;
            left: 15%;
            font-weight: 700;
            
            
            color: #2e2e2e;
            align-text: center;
          }
          
          .payment-method {
            display: flex;
            margin-bottom: 60px;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            top: 50px;
            left: 30px;
          }
           
          .method {
            display: flex;
            flex-direction: column;
            width: 382px;
            height: 130px;
            padding-top: 10px;
            padding-bottom: 20px;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 2px;
            background-color: rgb(249, 249, 249);
            justify-content: center;
            align-items: center;
            
          }
    
          .card-logos {
            display: flex;
            width: 150px;
            justify-content: space-between;
            align-items: center;
          }
           
          
           
          div[class*='column'] {
            width: 382px;
          }
           
          
          
          .btn {
            font-size: 16px;
            width: 163px;
            height: 30px;
            cursor: pointer;
            
            letter-spacing: 1px;
            border: none;
            border-radius: 23px;
            align-items: center;
            position: absolute;
            margin: 0;
            top: 150px;
            left: 110px;

          }
           
          
           
          .next-btn {
            height: 50px;
            padding: 4px  10px 35px 10px;
            border-radius: 5px;
            line-height: 20px;
            border: 1.5px solid gray;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            
            
          }
          
            .btn:hover {
                border: 3px solid gray;
           
            }
          .btn:focus {
            outline: none;
          }
           
          
          

        `}</style></>
    )
}
