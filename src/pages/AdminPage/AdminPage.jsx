import { useGetProductsQuery } from "../../redux/api/productApi";
import { useAdmin } from "../../hooks/useAdmin";

const AdminPage = () => {
  useAdmin();

  const genres = ["action", "horror", "adventures"];

  const { data: productsList } = useGetProductsQuery();

  productsList?.map((prod) => {
    console.log(`http://localhost:5000/${prod.image}`);
  });

  return (
    <main>
      <h2>Admin Page</h2>
      <h3 className="example">Example</h3>
      {/* <GenresList genres={genres} /> */}
      {productsList?.map((prod) => {
        return (
          <div
            key={prod._id}
            style={{
              backgroundImage: `url("http://localhost:5000/${prod?.img
                ?.split("\\")
                ?.join("/")}")`,
            }}
          >
            {prod.name}
            <img
              src={`http://localhost:5000/${prod.image}`}
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
          </div>
        );
      })}
    </main>
  );
};

export default AdminPage;