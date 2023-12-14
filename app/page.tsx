import { deleteTodo, editTodo } from "./actions";
import DeleteButton from "./components/DeleteButton";
import EditButton from "./components/EditButton";
import FormElem from "./components/Form";
import prisma from "./db";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      input: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="relative flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center shadow-2xl border rounded-lg px-5 py-4 dark:shadow-none dark:border-0">
        <h1 className="bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-300 inline-block text-transparent bg-clip-text text-4xl font-bold mb-10 text-center">
          Todo list
        </h1>
        <FormElem />
        <div className="mt-10">
          {data?.map((todo) => (
            <div className=" flex justify-center items-center border border-r-0 border-l-0 border-t-0 border-slate-300 dark:border-slate-700 my-2 px-4 py-2">
              <form
                key={todo.id}
                action={editTodo}
                className="flex justify-between items-center gap-10 text-gray-800 dark:text-white"
              >
                <input
                  name="todoId"
                  type="text"
                  className="hidden"
                  value={todo.id}
                />
                <input
                  type="text"
                  name="input"
                  className="w-full bg-transparent outline-none font-bold"
                  defaultValue={todo.input}
                />
                <EditButton />
              </form>
              <form action={deleteTodo}>
                <input
                  name="todoId"
                  type="text"
                  className="hidden"
                  value={todo.id}
                />
                <DeleteButton />
              </form>
            </div>
          ))}
          {data.length === 0 && (
            <div className="flex justify-center items-center my-4 p-2 gap-10 border border-r-0 border-l-0 border-t-0 border-slate-700">
              <p className="font-bold text-yellow-400">Todo list is empty!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
