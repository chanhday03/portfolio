import { addCategory } from "../../api/category";
import { router, useEffect } from "../../lib";

const CategoryAddPage = () => {
  useEffect(() => {
    const formAddCategory = document.querySelector("#form-add-category");
    formAddCategory.addEventListener("submit", async (event) => {
      event.preventDefault();
      try {
        // B1 lay du lieu cua form
        const bodyData = {
          name: document.querySelector("#category_name").value,
        };
        const response = await addCategory(bodyData);
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
        <form id="form-add-category">
            <div class="formbold-input-flex">
              <div>
                  <input
                  type="text"
                  name="category_name"
                  id="category_name"
                  placeholder="Enter..."
                  class="formbold-form-input"
                  />
                  <label for="category_name" class="formbold-form-label"> Category Name </label>
              </div>
            </div>

            <button type="submit" class="formbold-btn">
                Submit
            </button>
        </form>
      </div>
    </div>
  </div>
  `;
};

export default CategoryAddPage;
