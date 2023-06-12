import { deleteCategory, getCategories } from "../../api/category";
import { useEffect, useState } from "../../lib";

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]); // 1

  //========= Lấy list category từ server và đổ ra table=======//
  const fetchListCategory = async function () {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  //=========== Lấy list category ===========//
  useEffect(() => {
    fetchListCategory();
  }, []);

  //=========== Chức năng xoá category ===========//

  useEffect(() => {
    const btnsRemove = document.querySelectorAll(".btn-remove");
    btnsRemove.forEach((btn) => {
      btn.addEventListener("click", async (event) => {
        try {
          const isRemove = window.confirm("Bạn chắc muốn xoá chứ");
          if (!isRemove) return;

          const id = btn.dataset.id;
          const response = await deleteCategory(id);
          const newCategoryList = categories.filter((category) => {
            return +category.id !== +id;
          });
          setCategories(newCategoryList);
        } catch (error) {
          console.log(error);
        }
      });
    });
  });

  return /*html */ `
    <div id="table-product">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Category ID</th>
                    <th>Name</th>
                    <th>
                        <a href="/admin/category/add">
                        <button class="btn-add">
                            <i class='bx bx-plus-circle'></i>
                        </button>
                        <span>Add</span>
                        </a>
                    </th>
                </tr>
            </thead>
            <tbody>
                ${categories
                  .map((category, index) => {
                    return /*html */ `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${category.id}</td>
                        <td>${category.name}</td>
                        <td>
                            <button class="btn-edit">
                              <a href="/admin/category/${category.id}/edit">
                                <i class='bx bx-edit'></i>
                              </a>
                            </button>
                            <button 
                              data-id="${category.id}" 
                              class="btn-remove">
                              <i class='bx bx-trash'></i>
                            </button>
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

export default CategoryListPage;
