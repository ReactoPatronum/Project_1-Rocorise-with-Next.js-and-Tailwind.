export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form
      className="flex items-center justify-center py-6"
      onSubmit={onEditFormSubmit}
    >
      <input
        className="text-black h-12 w-3/5"
        name="updateTodo"
        type="text"
        placeholder="Update todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <div className="space-x-2">
        <button className="ml-2 text-green-300" type="submit" onClick={onEditFormSubmit}>
          Güncelle
        </button>
        <button className="text-yellow-300" onClick={() => setIsEditing(false)}>Vazgeç</button>
      </div>
    </form>
  );
}
