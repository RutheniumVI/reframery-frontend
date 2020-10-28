import React from "react";
import { useData } from "../data/useData";


export default function TransHistPage() {
    return (
        <div>
            My Reframery {">"} Purchase Records
            <BoughtItems />
            <SoldItems />
        </div>
    );
}


function BoughtItems() {
    const { data } = useData();
    return (
        <div className="order-overview">
            <h4>BoughtItems</h4>
            {data.products.map((product) => (
            <div className="order-table">
                <table>
                    <tr>
                        <td>Item</td>
                        <td>Price Per Unit</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Status</td>
                    </tr>
                    <tr>
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

                </table>
            </div>
            ))}
        </div>
    );
}

function SoldItems() {
    const { data } = useData();
    return (
        <div className="order-overview">
            <h4>BoughtItems</h4>
            {data.products.map((product) => (
            <div className="order-table">
                <table>
                    <tr>
                        <td>Item</td>
                        <td>Price Per Unit</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Status</td>
                    </tr>
                    <tr>
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

                </table>
            </div>
            ))}
        </div>
    );
}

