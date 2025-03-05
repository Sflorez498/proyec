export default function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  if (!form || !messageContainer) {
    console.error('Elementos del formulario no encontrados'); // eslint-disable-line no-console
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = {
      name: document.getElementById('name'),
      email: document.getElementById('email'),
      age: document.getElementById('age'),
      dropdown: document.getElementById('dropdown'),
      comments: document.getElementById('comments'),
    };

    // Validar que todos los elementos existen en el DOM
    if (Object.values(fields).some((field) => !field)) {
      console.error('Uno o más elementos del formulario no existen en el DOM'); // eslint-disable-line no-console
      return;
    }

    const { name, email, age, dropdown, comments } = fields;
    const radioButtons = document.querySelectorAll('input[name="choice"]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid =
      name.value.trim() &&
      emailRegex.test(email.value.trim()) &&
      !Number.isNaN(Number(age.value)) &&
      Number(age.value) > 0 &&
      dropdown.value !== '' &&
      radioButtons.length > 0 &&
      checkboxes.length > 0 &&
      comments.value.trim();

    if (isValid) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON ÉXITO';
      messageContainer.style.color = 'green';
      form.reset();
    } else {
      messageContainer.textContent = 'Por favor, complete todos los campos requeridos correctamente';
      messageContainer.style.color = 'red';
    }
  });
}
