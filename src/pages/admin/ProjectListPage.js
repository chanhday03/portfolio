import { deleteProject, getProjects } from "../../api/project";
import { useEffect, useState } from "../../lib";

const ProjectListPage = () => {
  const [projects, setProjects] = useState([]); // 1

  // Get List Project
  const fetchListProject = async () => {
    try {
      const response = await getProjects();
      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Get List Project
  useEffect(() => {
    fetchListProject();
  }, []);

  // remove
  useEffect(() => {
    const btnsRemove = document.querySelectorAll(".btn-remove");
    btnsRemove.forEach((btn) => {
      btn.addEventListener("click", async (event) => {
        try {
          const isRemove = window.confirm("Bạn chắc muốn xoá chứ");
          if (!isRemove) return;

          const id = btn.dataset.id;
          const response = await deleteProject(id);
          const newProjectList = projects.filter((project) => {
            return +project.id !== +id;
          });
          setProjects(newProjectList);
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
                    <th>Title</th>
                    <th>Description</th>
                    <th>Time</th>
                    <th>Skills</th>
                    <th>Image</th>
                    <th>Role</th>
                    <th>
                        <a href="/admin/project/add">
                        <button class="btn-add">
                            <i class='bx bx-plus-circle'></i>
                        </button>
                        <span>Add</span>
                        </a>
                    </th>
                </tr>
            </thead>
            <tbody>
                ${projects
                  .map((project, index) => {
                    return /*html */ `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.title}</td>
                        <td>${project.description}</td>
                        <td>${project.time}</td>
                        <td>${project.skills}</td>
                        <td><img width=20 src="${project.img}" /></td>
                        <td>${project.role}</td>
                        <td>
                            <button class="btn-edit">
                              <a href="/admin/project/${project.id}/edit">
                                <i class='bx bx-edit'></i>
                              </a>
                            </button>
                            <button data-id="${
                              project.id
                            }" class="btn-remove"><i class='bx bx-trash' ></i></button>
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

export default ProjectListPage;
