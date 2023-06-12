import { getCategory, updateCategory } from "../../api/category";
import { router, useEffect, useState } from "../../lib";

const CategoryEditPage = ({ id }) => {
  const [categoryName, setCategoryName] = useState("");

  //B1 Lấy dữ liệu đổ vào form
  const fetchCategory = async () => {
    try {
      const response = await getCategory(id);
      setCategoryName(response.name);
    } catch (error) {
      console.log(error);
    }
  };

  // Lấy dữ liệu
  useEffect(() => {
    fetchCategory();
  }, []);

  // Gọi api update category
  useEffect(() => {
    const formUpdateCategory = document.querySelector("#form-update-category");
    formUpdateCategory.addEventListener("submit", async (event) => {
      event.preventDefault();
      try {
        // B1 lay du lieu cua form
        const bodyData = {
          name: document.querySelector("#category_name").value,
          id,
        };
        const response = await updateCategory(bodyData);
        window.alert("Cập nhật thành công");
        router.navigate("/admin/category");
        // B2 Goi api gui len server
      } catch (error) {
        console.log(error);
      }
    });
  });

  return /*html */ `
  <div id="form-wrap">
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <form id="form-update-category">
            <div class="formbold-input-flex">
              <div>
                  <input
                  type="text"
                  name="category_name"
                  id="category_name"
                  placeholder="Enter..."
                  class="formbold-form-input"
                  value="${categoryName}"
                  />
                  <label for="category_name" class="formbold-form-label"> Category Name </label>
              </div>
            </div>

            <button type="submit" class="formbold-btn">
                Update
            </button>
        </form>
      </div>
    </div>
  </div>
  `;
};

export default CategoryEditPage;
