import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/singleProduct.module.css'

export default function SingleProduct(props) {
    const { title, price, description, category, image } = props.product

    return (
        <div className={`${styles.product} container`}>
            <Head>
                <title>{title}</title>
            </Head>

            <div>
                <Image src={image} width="300" height="300" />
            </div>
            <div>
                <h2>{title}</h2>
                <h3>{category}</h3>
                <h3>{price}$</h3>
                <p>{description}</p>
            </div>

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