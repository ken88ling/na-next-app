import ProductSection from "../components/ProductSection";
import { fetchQuery } from "../utils/fetchQuery";

function Products ({ featureProduct }) {
 
  return (
      <main >
        <ProductSection product={featureProduct} />
      </main>
  );
}
export async function getStaticProps () {
  // Run API calls in parallel
  const [productsRes] = await Promise.all([

    fetchQuery("/products", {
      filters: {
        isFeature: {
          $eq: true,
        },
      },
    }),
  ]);
  return {
    props: {
      featureProduct: productsRes.data,
    },
  };
};

export default Products


