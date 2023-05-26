import { posts } from "../dataFake";
const PostDetailPage = ({ id }) => {
  const post = posts.find((post) => post.id === +id);
  if (!post) return "<h1>Post not found </h1>";
  return /*html */ `
           <section class="section">
                <h1>This is detail page </h1>
                <h2>${post.title}</h2>
                <img class="project__img" src="${post.img}" alt="netflix">
                <p>${post.content}</p>
           </section>
            `;
};
export default PostDetailPage;
