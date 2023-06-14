import axios from "axios";
import { router, useEffect, useState } from "../../lib";
import Loading from "../../components/Loading";
import { addProject, getProject, updateProject } from "../../api/project";
import { getCategories } from "../../api/category";

const ProjectEditPage = ({ id }) => {
  let urlImage = "";
  const [project, setProject] = useState({});
  const [categories, setCategories] = useState([]); // 1

  //========= Lấy list category từ server và đổ vao select=======//
  const fetchListCategory = async function () {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };
  //B1 Lấy dữ liệu đổ vào form
  const fetchProject = async () => {
    try {
      const response = await getProject(id);
      setProject(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Lấy dữ liệu
  useEffect(() => {
    fetchProject();
    fetchListCategory();
  }, []);

  useEffect(() => {
    const uploadInput = document.querySelector("#upload-image");

    //================== Onchange Upload Image ==================//
    uploadInput.addEventListener("change", async (e) => {
      const previewImg = document.querySelector(".upload-img img");
      const newUrlImage = await uploadImage(uploadInput.files[0]);
      previewImg.src = newUrlImage;
      urlImage = newUrlImage;
    });
  });

  //================== Upload Image ==================//
  const uploadImage = async function (file) {
    try {
      const CLOUD_NAME = "dwtno1ejh";
      const PRESET_NAME = "assignment";
      const FOLDER_NAME = "assignment";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      formData.append("file", file);

      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.url;
    } catch (error) {
      console.log("Upload Image Failed", error);
    }
  };

  //============== Add Project ==============//
  useEffect(() => {
    const formAddProduct = document.querySelector("#form-update-project");
    formAddProduct.addEventListener("submit", async (event) => {
      console.log("submitting...");
      event.preventDefault();

      try {
        const bodyData = {
          id,
          title: document.querySelector("#title").value,
          time: document.querySelector("#time").value,
          skills: document.querySelector("#skills").value,
          role: document.querySelector("#role").value,
          description: document.querySelector("#description").value,
          role: document.querySelector("#title").value,
          img: urlImage || project?.img,
          categoryId: document.querySelector("#category").value,
          repository: document.querySelector("#repository").value,
        };

        const response = await updateProject(bodyData);
        window.alert("Update project thành công");
        router.navigate("/admin/project");
      } catch (error) {
        console.log(error);
      }
    });
  });

  return /*html */ `
  <div id="form-wrap">
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <form id="form-update-project">
            <div class="formbold-input-flex">
              <div>
                  <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title of Project"
                  class="formbold-form-input"
                  value=${project.title}
                  />
                  <label for="title" class="formbold-form-label"> Title </label>
              </div>
              <div>
                  <input
                  type="text"
                  name="time"
                  id="time"
                  placeholder="Project time..."
                  class="formbold-form-input"
                  value=${project.time}
                  />
                  <label for="time" class="formbold-form-label"> Project Time </label>
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                  <select id="category" name="category" class="select">
                    ${categories.map((category) => {
                      return /*html */ `
                        <option ${
                          project.categoryId === category.id ? "selected" : ""
                        } value="${category.id}">${category.name}</option>
                      `;
                    })}
                  </select>
                  <label for="category" class="formbold-form-label"> Category </label>
              </div>
              <div>
                  <input
                  type="text"
                  name="repository"
                  id="repository"
                  placeholder="Project repository..."
                  class="formbold-form-input"
                  value=${project.repository}
                  />
                  <label for="repository" class="formbold-form-label"> Repository </label>
              </div>
            </div>

            <div class="formbold-input-flex">
              <div>
                  <input
                  type="text"
                  name="skills"
                  id="skills"
                  placeholder="Skill..."
                  class="formbold-form-input"
                  value=${project.skills}
                  />
                  <label for="skills" class="formbold-form-label"> Skills </label>
              </div>
              <div>
                  <input
                  type="text"
                  name="role"
                  id="role"
                  placeholder="Role in Project..."
                  class="formbold-form-input"
                  value=${project.role}
                  />
                  <label for="role" class="formbold-form-label"> Role </label>
              </div>
            </div>

            <div class="formbold-textarea">
                <textarea
                    rows="6"
                    name="description"
                    id="description"
                    placeholder="Description..."
                    class="formbold-form-input"
                >${project.description}</textarea>
                <label for="description" class="formbold-form-label"> Description </label>
            </div>

            <div class="formbold-input-file">
              <div class="upload-box ">
                  <div class="upload-img">
                      <img src="${project.img}" alt="">
                  </div>
                  <label for="upload-image" class="upload-label">
                    <i class='bx bx-image-add'></i>
                    Upload Image
                  </label>
                  <input type="file" id="upload-image" accept="images/*">
                
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

export default ProjectEditPage;
