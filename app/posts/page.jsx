import PostCard from "@/components/PostCard";
import "./Posts.css";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  //le pone delay a la respuesta (promesa) con el setTimeout
  //en este caso sirve para simular posibles tiempos de espera
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
}

// React Server Component
async function PostPages() {
  const posts = await loadPosts();
  console.log(posts);

  return (
    <div className="grid">
      {/* recorrer el arreglo de los posts que trae el fetch */}
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;
