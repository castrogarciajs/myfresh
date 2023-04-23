import { IPROPS_POST } from "@/utils/type.ts";

function Posts(props: IPROPS_POST) {
  return (
    <>
      {props.data?.map((post) =>
        props.data ? (
          <div>
            <div>
              <h2>{post.title}</h2>
            </div>
            <div>
              <p>{post.body}</p>
            </div>
          </div>
        ) : (
          <h2>no hay posts</h2>
        )
      )}
    </>
  );
}

export default Posts;
