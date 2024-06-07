import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodos = async () => {
  const res = await axios.get("http://localhost:3000/todos");
  return res.data;
};

const Todo = () => {
  const {
    data: todos,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    // refetchOnWindowFocus: false,
    // refetchInterval: 1000,
    // staleTime: 3000,
    gcTime: 0,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    console.log(error);
    return <p>Error: {error.response.data.message}</p>;
  }

  return (
    <>
      <h1>Todo一覧</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
