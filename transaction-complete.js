
import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'


export default function transactionComplete() {
    return(
        
        <><main>
            <Head>
                <title>SharkPark</title>
            </Head>
            
            <center>
                <Image src={IMG_0885} height={250} width={300} />
            </center>
            
            <center>
                <h1 class="title"> Payment Accepted</h1>
            </center>

        </main>
        
        <style>{`
        
        .title {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        `}</style></>
    )
}