import Head from 'next/head'
import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'




export default function Home() {
  return (
    <div>
      
        <title>SharkPark</title>
      

      <main>
       
        <Image src={IMG_0885} height = {240} width= {290}/>
            
            
            <h1 className = "headerStyle">Welcome to SharkPark!</h1>
    
          
            <div className="left">
                
                <a href="http://localhost:3000/posts/sign-up" className="card2">
                    <h3>  Sign Up</h3>
                </a>
                
                <a href="http://localhost:3000/posts/login" className="card2">
                    <h3>Login</h3>
                </a>

            </div>
          
            <div className="owner"> 
                <a href="http://localhost:3000/posts/owner-signup">
                  <h3>List Your Parking Spot</h3>
                </a>
           </div>
          
          
                <a href="http://localhost:3000/posts/sign-up" className="card">
                  <h3>Find a Parking Spot</h3>
            
                </a>
        
      </main>

      

      <style>{`
    main {
      padding: 2rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .left {
    display: inline;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 14px; 
  }
  
    .owner {
    position: absolute;
    top: 9px;
    right: 240px;
    float: left;
    margin: 0px;
    flex-basis: 45%;
    align-items: flex-start;
    text-align: center;
    color: inherit;
    text-decoration: none;
    border: 3px solid Gainsboro;
    border-radius: 60px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 200px;
    right: 60px;
    margin-top: 20px;
    padding: 5px;
  }
      .owner:hover, .owner:active, owner:focus {
          color: teal;
          border: 3px solid navy;
        }
  
    .headerStyle{
      margin:  60px;
  }
        
    a {
      color: inherit;
      text-decoration: none;
      }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

  
    .title {
      margin: 1;
      line-height: 1.15;
      font-size: 4rem;
      }

    .title,
      .description {
      text-align: center;
      }

    
        
    .card2 {
      display:inline
      float: left;
      margin: 0px;
      flex-basis: 45%;
      align-items: flex-start;
      text-align: center;
      color: inherit;
      text-decoration: none;
      border: 3px solid Gainsboro;
      border-radius: 60px;
      transition: color 0.15s ease, border-color 0.15s ease;
      float: left;
      width: 150px;
      margin-left: 20px;
      margin-top: 10px;
      padding: 6px;
      }
        .card2:hover, .card2:focus, .card2:active {
          color: teal;
          border: 3px solid navy;
        }
    .card {
          margin: 1px;
          flex-basis: 50%;
          padding: 2rem 1rem 2rem 1rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 3px solid Gainsboro;
          border-radius: 5px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 400px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: teal;
          border: 3px solid navy;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          
        }

        

        
        
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }


      `}</style>
    </div>
   
  )
}
