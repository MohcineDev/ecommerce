
export default function SingleProduct(props) {
    const {title, price, description, category, image} = props.product
    return (
        <div className="container">

            {
                props.product.title
            }
        </div>
    )
}

export async function getStaticPaths() {
    const req = await fetch(`https://fakestoreapi.com/products`)
    const products = await req.json()

    const paths = products.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const req = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await req.json()

    return {
        props: {
            product
        }
    }

}