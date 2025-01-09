import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const { postId } = await params;
  const post = await loadPost(postId);

  //trae el parámetro que tenga el postId
  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>

      <h3>Otras publicaciones</h3>

      {/* mientras carga el resto de las publicaciones (<Posts />) 
      muestra la publicación seleccionada previamente */}
      <Suspense fallback={<div>Cargando publicaciones ...</div>}>
      
        {/* el prop fallback especifica que se quiere mostrar mientras
       carga el componente de adentro */}
        <Posts />
      </Suspense>
    </div>
  );
}

export default Page;
