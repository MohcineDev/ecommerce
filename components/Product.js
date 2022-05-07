import Image from "next/image";
import Link from "next/link";
import styles from '../styles/product.module.css'

export default function Product(props) {


    return (
        <div className={styles.product}>
            <div>
                <Image src={props.productItem.image} width="200" height="200" />
            </div>
            <ul>
                <li>{props.productItem.title}</li>
                <li>{props.productItem.price} $</li>
            </ul>
            <Link href={`/products/${props.productItem.id}`} >
                <a className="btn">More Details</a>
            </Link>
        </div>
    )
}
