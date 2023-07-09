import { getTotals} from "../Redux/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../Redux/cart/cartSlice";
import Swal from "sweetalert2";
import { useEffect } from "react";
const Products = () => {
    const products = [
        {
            id: 1,
            name: "Samsung Galaxy S20",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image:
                "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 300,
        },

        {
            id: 2,
            name: "iPhone 12",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 500,
        },

        {
            id: 3,
            name: "Redmi Note 8",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image:
                "https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 600,
        },

        {
            id: 4,
            name: "Samsung Galaxy A71",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image:
                "https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 700,
        },
    ];
    const { cart } = useSelector((state => state.cartRed))
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handelClick = (product) => {
        dispatch(addProduct(product))
        Swal.fire({
            title: "product added",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        })
    }


    console.log(cart)

    return (
        <div className="container">
            <div className="row mt-5 g-3">
                {products && products.map(product => (
                    <div className="col-md-3" key={product.id} >
                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button onClick={() => handelClick(product)} className="btn btn-sm btn-outline-dark">
                                    Add to cart
                                </button>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;