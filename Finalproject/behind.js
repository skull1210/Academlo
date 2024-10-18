function toggleMenu() {
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active');
}
let textToType = 'Hey, Soy Christian!';
const typingSpeed = 200; // Velocidad en milisegundos (cuanto más bajo, más rápido)
let index = 0;
const languageToggle = document.getElementById('language-toggle');

function typeText() {
	if (index < textToType.length) {
		document.getElementById('typed-text').textContent +=
			textToType.charAt(index);
		index++;
		setTimeout(typeText, typingSpeed);
	}
}
typeText();

// Inicia la animación de escritura
const toggle = document.getElementById('background_switchs');
const body = document.body;
toggle.addEventListener('change', () => {
	if (toggle.checked) {
		body.style.backgroundColor = 'white';
		body.style.color = '#141111';
	} else {
		body.style.backgroundColor = '#141111';
		body.style.color = 'white';
	}
});

// Cambiar idioma cuando se activa el switch
languageToggle.addEventListener('change', () => {
	const elementsToTranslate = document.querySelectorAll(
		'.translate:not(.container_body_child_text), .container_body_child_text:not(.translate)',
	);
	console.log(elementsToTranslate);
	if (languageToggle.checked) {
		elementsToTranslate.forEach((el) => {
			el.textContent = el.getAttribute('data-en');
			document.getElementById('typed-text').textContent = '';
			textToType = 'Hey, Iʼm Christian!';
			index = 0;
			typeText();
		});
	} else {
		elementsToTranslate.forEach((el) => {
			el.textContent = el.getAttribute('data-es');
			document.getElementById('typed-text').textContent = '';
			textToType = 'Hey, soy Christian!';
			index = 0;
			typeText();
		});
	}
});
