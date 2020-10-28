import React from "react";
import { useData } from "../data/useData";
import { Link } from "react-router-dom";


export default function TransHistPage() {
    return (
        <div>
            <Link to="/">My Reframery</Link>  {">"} Records
            <BoughtItems />
            <SoldItems />
        </div>
    );
}


function BoughtItems() {
    const { data } = useData();
    return (
        <div >
            <h4>Purchase Records</h4>

            <div className="order-table">
                <table>
                    <tr>
                        <td>Order Number</td>
                        <td>Item</td>
                        <td>Price Per Unit</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Status</td>
                    </tr>
                    {data.products.map((product) => (
                        <tr>
                            <td><Link to="/myreframery/orders/purchases/purchase-details">P-000000-000000{product._id}</Link></td>
                            <td>
                                {/* <table className="order-inner-table"> */}
                                <div className="order-inner-table">
                                    <td > <img className="order-image" src={product.image} alt="product"></img></td>
                                    <td ><span className="order-product-name">{product.name}</span></td>
                                </div>
                                {/* </table> */}

                            </td>
                            <td>Price: ${product.price}</td>
                            <td>1</td>
                            <td>RCC$ {product.price}</td>
                            <td>Pay Success</td>
                        </tr>
                    ))}

                </table>
            </div>

        </div>
    );
}

function SoldItems() {
    const { data } = useData();
    return (
        <div >

                <h4>Sale Records</h4>


            <div className="order-table">
                <table>
                    <tr>
                        <td>Order Number</td>
                        <td>Item</td>
                        <td>Price Per Unit</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Status</td>
                    </tr>
                    {data.products.map((product) => (
                        <tr>
                            <td><Link to="/myreframery/orders/sales/sale-details">P-000000-000000{product._id}</Link></td>
                            <td>
                                {/* <table className="order-inner-table"> */}
                                <div className="order-inner-table">
                                    <td > <img className="order-image" src={product.image} alt="product"></img></td>
                                    <td ><span className="order-product-name">{product.name}</span></td>
                                </div>
                                {/* </table> */}

                            </td>
                            <td>Price: ${product.price}</td>
                            <td>1</td>
                            <td>RCC$ {product.price}</td>
                            <td>Pay Success</td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    );
}

