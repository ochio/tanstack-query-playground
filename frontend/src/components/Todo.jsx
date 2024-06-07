import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const res = await fetch("http://localhost:3000/todos");
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
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
    retry: 5,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
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
