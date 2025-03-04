export default function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  if (!form || !messageContainer) {
    console.error('Elementos del formulario no encontrados'); // eslint-disable-line no-console
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const dropdownInput = document.getElementById('dropdown');
    const commentsInput = document.getElementById('comments');

    if (!nameInput || !emailInput || !ageInput || !dropdownInput || !commentsInput) {
      console.error('Uno o más elementos del formulario no existen en el DOM'); // eslint-disable-line no-console
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = Number(ageInput.value);
    const dropdown = dropdownInput.value;
    const radioButtons = document.querySelectorAll('input[name="choice"]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const comments = commentsInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name
        && emailRegex.test(email)
        && !Number.isNaN(age) && age > 0
        && dropdown !== ''
        && radioButtons.length > 0
        && checkboxes.length > 0
        && comments
    ) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON ÉXITO';
      messageContainer.style.color = 'green';
      form.reset();
    } else {
      messageContainer.textContent = 'Por favor, complete todos los campos requeridos correctamente';
      messageContainer.style.color = 'red';
    }
  });
}
