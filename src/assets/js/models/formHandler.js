export default function setupformHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  form.addEventListener('submit' , (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('age').value;
      const dropdown = document.getElementById('dropdown').value;
      const radioButtons = document.querySelectorAll('input [name="choice"]:checked');
      const checkboxes = document.querySelectorAll('input [type="checkbox"]:checked');
      const comments = document.getElementById('comments').value;

      if(name && email && age && dropdown && radioButtons && checkboxes.length > 0 && comments) {
          messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
          messageContainer.style.color = 'green'; // estilo para el mensaje de exito
          form.reset(); // opcional: resestea el formulario despues de enviarlo
      } else {
          messageContainer.textContent = 'Por favor, complete todos los campos requeridos';
          messageContainer.style.color = 'red';
      }
          


  });
}  