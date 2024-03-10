import SearchBar from "../components/SearchBar";
import { useSearchProductsQuery } from "../redux/api/productApi";

import ProductsList from "../components/ProductsList/ProductsList";
import Section from "../components/Layout/Section";
import Title from "./Title";

const HomePage = () => {
  const { data: products, isFetching: productsIsFetching } =
    useSearchProductsQuery({ searchString: "", limit: 12 });

  return (
    <main>
      <Title title={"Home Page"} />

      <Section>
        <SearchBar isSearch />
      </Section>

      <Section>
        <ProductsList
          productsList={products?.data}
          productsIsFetching={productsIsFetching}
        />
      </Section>
    </main>
  );
};

export default HomePage;
