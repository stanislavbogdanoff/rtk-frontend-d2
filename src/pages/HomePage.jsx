import SearchBar from "../components/SearchBar";
import { useSearchProductsQuery } from "../redux/api/productApi";

import Product from "../components/Product/Product";
import ProductsList from "../components/ProductsList/ProductsList";

const HomePage = () => {
  const { data: productsList, isFetching: productsIsFetching } =
    useSearchProductsQuery();
  return (
    <main>
      <h1>E-store</h1>

      <SearchBar />

      <ProductsList
        productsList={productsList}
        productsIsFetching={productsIsFetching}
      />

      {/* <DynamicInputs /> */}

      {/* <ProductForm />

      <div>
        <h2>Search Users:</h2>
        <input
          type="text"
          placeholder="name OR job title"
          value={searchString}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <button onClick={() => searchUsers(searchString)}>Search</button>
      </div>

      <div className="input-box">
        <h2>New User Data Input</h2>
        <input
          type="text"
          placeholder="name"
          value={userData.name}
          onChange={(event) => {
            setUserData({ ...userData, name: event.target.value });
          }}
        />
        <input
          type="number"
          placeholder="age"
          value={userData.age}
          onChange={(event) => {
            setUserData({ ...userData, age: Number(event.target.value) });
          }}
        />
        <input
          type="text"
          placeholder="job title"
          value={userData.jobTitle}
          onChange={(event) => {
            setUserData({ ...userData, jobTitle: event.target.value });
          }}
        />
        <button
          onClick={() => {
            createUser(userData);
            setUserData({
              name: null,
              age: null,
              jobTitle: null,
            });
          }}
        >
          Create User
        </button>
      </div>

      <UsersList
        usersData={usersData}
        userIsDeleting={userIsDeleting}
        deleteUser={deleteUser}
      /> */}
    </main>
  );
};

export default HomePage;
