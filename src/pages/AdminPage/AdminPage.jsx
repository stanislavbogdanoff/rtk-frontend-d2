import {
  useGetProductsQuery,
  useLazySearchProductsQuery,
} from "../../redux/api/productApi";
import { useAdmin } from "../../hooks/useAdmin";
import Product from "../../components/Product/Product";

import "./AdminPage.css";
import ProductForm from "../../components/ProductForm/ProductForm";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Section from "../../components/Layout/Section";
import Title from "../Title";

const AdminPage = () => {
  useAdmin();

  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchProducts, { data: products, isFetching: productsIsFetching }] =
    useLazySearchProductsQuery();

  useEffect(() => {
    searchProducts({ searchString, page: currentPage });
  }, []);

  let pagesArray = [];
  for (let i = 1; i <= products?.totalPages; i++) {
    pagesArray.push(i);
  }

  return (
    <main>
      <Title title={"Admin Page"} />

      <Section>
        <ProductForm />
      </Section>

      <Section>
        <div>
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button
            onClick={() => searchProducts({ searchString, page: currentPage })}
          >
            Search
          </button>
        </div>
      </Section>

      <Section>
        {!productsIsFetching ? (
          <div className="products_admin_list">
            {products?.data?.map((prod) => {
              return <Product key={prod._id} product={prod} isAdmin />;
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Section>

      <Section>
        <div className="pagination">
          {products?.totalPages > 1 &&
            pagesArray.map((page) => (
              <button
                className="pagination_btn"
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  searchProducts({ searchString, page });
                }}
              >
                {page}
              </button>
            ))}
        </div>
      </Section>
    </main>
  );
};

export default AdminPage;
