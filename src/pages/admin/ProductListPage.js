import { useEffect, useState } from "../../lib";

const ProductListPage = () => {
  const [products, setProducts] = useState([]); // 1

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URI}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return /*html */ `
    <div id="table-product">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>
                        <a href="/admin/product/add">
                        <button class="btn-add">
                            <i class='bx bx-plus-circle'></i>
                        </button>
                        <span>Add</span>
                        </a>
                    </th>
                </tr>
            </thead>
            <tbody>
                ${products
                  .map((product, index) => {
                    return /*html */ `
                    <tr>
                        <td>${index + 1}</td>
                        <td><img src="${product.img}" /></td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <button class="btn-edit"><i class='bx bx-edit'></i></button>
                            <button class="btn-remove"><i class='bx bx-trash' ></i></button>
                        </td>
                    </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
    </div>
  `;
};

export default ProductListPage;
