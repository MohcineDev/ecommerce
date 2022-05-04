import Product from "../components/Product";

export default function Index(props) {
  return (
    <main className={"container"}>
      <div className="main">

      {
        props.data.map(item => <Product key={item.id} productItem={item}/>
        )
      }
      </div>

    </main>
  )
}


export async function getStaticProps() {
  const req = await fetch('https://fakestoreapi.com/products')
  const data = await req.json()

  return {

    props: {
      data
    }
  }
}