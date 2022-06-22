export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
  return (
    <>
      <li
        className=" bg-slate-400 h-14 rounded-md flex items-center justify-between overflow-hidden px-3"
        key={todo.id}
      >
        {todo.text}
      </li>
      <div className="space-x-3 text-sm">
        <button className="text-green-300" onClick={() => onEditClick(todo)}>
          Güncelle
        </button>
        <button className="text-red-500" onClick={() => onDeleteClick(todo.id)}>
          Sil
        </button>
      </div>
    </>
  );
}
