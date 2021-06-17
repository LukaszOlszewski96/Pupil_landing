import React from 'react'
import "./Product.css"
 
function Product() {
    return (
        <div className="Product-conteiner">
        <h1 className="title-product">What is Pupil?</h1>
        <div className="horizontal-box-prod">
        <img className="img-app-mockup" src="./img/app_prod.png"/>
        <div className="product-description">
            <p className="text-product">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
        </div>
        <div className="horizontal-box-prod-a">
        <div className="product-description-a">
            <p className="text-product">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <img className="img-app-mockup-a" src="./img/app_prod_2.png"/>
        </div>
        </div>
        <div className="horizontal-box-prod">
        <img className="img-app-mockup" src="./img/app_prod_3.png"/>
        <div className="product-description">
            <p className="text-product">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
        </div>
        </div>
    )
}

export default Product
