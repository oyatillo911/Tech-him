import "./Products.css"
import ProductsOneSection from "./ProductsSections/ProductsOneSection/ProductsOneSection"

function Products({data}) {
  return (
    <>
      <ProductsOneSection data={data} />
    </>
  )
}

export default Products