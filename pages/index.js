import Product from "../components/Product";
import Head from 'next/head'

export default function Index(props) {
  return (
    <main className={"container"}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="main">
        {
          props.data.map(item => <Product key={item.id} productItem={item} />)
        }
      </div>

    </main>
  )
}


export async function getStaticProps() {
  //get the data from the api
  const req = await fetch('https://fakestoreapi.com/products')
  const data = await req.json()

  return {

    props: {
      data
    }
  }
}