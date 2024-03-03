import SearchBar from "../../components/SearchBar";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useSearchProductsQuery } from "../../redux/api/productApi";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [params] = useSearchParams();
  //   console.log(params.get("searchString"));
  const { data: productsList, isFetching: productsIsFetching } =
    useSearchProductsQuery(params.get("searchString"));

  return (
    <main>
      <section className="search_section">
        <SearchBar
          initialSearchString={params.get("searchString")}
          isSearchPage
        />
      </section>
      <section className="product_section">
        <ProductsList
          productsList={productsList}
          productsIsFetching={productsIsFetching}
        />
      </section>
    </main>
  );
};

export default SearchPage;
