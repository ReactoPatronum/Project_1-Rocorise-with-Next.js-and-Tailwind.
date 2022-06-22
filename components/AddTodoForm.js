export default function AddTodoForm({
  todo,

  onAddFormSubmit,

  onAddInputChange,
}) {
  return (
    <form
      className="flex items-center justify-center py-6"
      onSubmit={onAddFormSubmit}
    >
      <input
        className="text-black h-12 w-3/5"
        name="todo"
        type="text"
        placeholder="1.Gün : 32 Roco 165M ..."
        value={todo}
        onChange={onAddInputChange}
      />
    </form>
  );
}
