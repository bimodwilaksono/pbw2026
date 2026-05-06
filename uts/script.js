/**
 * Todos Interface
 * Array of Object
 * { 
 * id: string, 
 * namaKegiatan: string, 
 * tanggalKegiatan: string, 
 * isDone: boolean 
 * }
 */
let todos = [];
let editingId = null;
let deletingId = null;

const todoListForm = document.getElementById('todoListForm');
const editTodoForm = document.getElementById('editTodoForm');
const todosTableBody = document.querySelector('.todos-table-body');

const editModal = new bootstrap.Modal(document.getElementById('editModal'));
const deleteConfirmModal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));

const datePicker = document.querySelector('.date-picker');
const today = new Date().toISOString().split('T')[0];

const toggleTodo = (id) => {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.isDone = !todo.isDone;
    renderTodos();
  }
};

const startDelete = (id) => {
  deletingId = id;
  deleteConfirmModal.toggle();
};

const startEdit = (todo) => {
  editingId = todo.id;
  document.getElementById('editNamaKegiatan').value = todo.namaKegiatan;
  document.getElementById('editTanggalKegiatan').value = todo.tanggalKegiatan;
  editModal.toggle();
};

const renderTodos = () => {
  todosTableBody.innerHTML = '';

  const taskCountBadge = document.getElementById('taskCount');
  if (taskCountBadge) {
    taskCountBadge.innerText = `${todos.filter(t => !t.isDone).length} Kegiatan Aktif`;
  }

  if (datePicker) {
    datePicker.setAttribute('min', today);
  }

  if (todos.length === 0) {
    todosTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-4">
          <div class="text-muted">
            <i class="bi bi-inbox fs-1 mb-2 d-block"></i>
            Belum ada kegiatan
          </div>
        </td>
      </tr>
    `;
    return;
  }

  todos.forEach((todo, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td class="ps-3 text-muted fw-medium">${index + 1}</td>
      <td>
        <div class="fw-semibold ${todo.isDone ? 'text-secondary text-decoration-line-through' : 'text-dark'}">
          ${todo.namaKegiatan}
        </div>
      </td>
      <td class="${todo.isDone ? 'text-decoration-line-through text-muted' : ''}">
        ${todo.tanggalKegiatan}
      </td>
      <td class="text-center">
        <div class="form-check d-flex justify-content-center">
          <input class="form-check-input" type="checkbox" value="" id="todoCheck-${todo.id}" 
            ${todo.isDone ? 'checked' : ''}>
        </div>
      </td>
      <td class="text-center">
        <button class="btn btn-light action-btn text-primary me-1 shadow-sm edit-btn" title="Edit">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn-light action-btn text-danger shadow-sm delete-btn" title="Delete">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    `;

    const checkbox = row.querySelector('.form-check-input');
    checkbox.addEventListener('change', () => toggleTodo(todo.id));

    const deleteBtn = row.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => startDelete(todo.id));

    const editBtn = row.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => startEdit(todo));

    todosTableBody.appendChild(row);
  });
};

todoListForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const namaInput = document.getElementById('namaKegiatan');
  const tanggalInput = document.getElementById('tanggalKegiatan');

  const newTodo = {
    id: crypto.randomUUID(),
    namaKegiatan: namaInput.value,
    tanggalKegiatan: tanggalInput.value,
    isDone: false
  };

  todos.push(newTodo);
  renderTodos();
  todoListForm.reset();
});

editTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const index = todos.findIndex(t => t.id === editingId);
  if (index !== -1) {
    todos[index] = {
      ...todos[index],
      namaKegiatan: document.getElementById('editNamaKegiatan').value,
      tanggalKegiatan: document.getElementById('editTanggalKegiatan').value
    };
    editModal.toggle();
  }
});

document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
  if (deletingId) {
    todos = todos.filter(t => t.id !== deletingId);
    deleteConfirmModal.toggle();
    deletingId = null;
  }
});

document.getElementById('editModal').addEventListener('hidden.bs.modal', renderTodos);
document.getElementById('deleteConfirmModal').addEventListener('hidden.bs.modal', renderTodos);

renderTodos();
