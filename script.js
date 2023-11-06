const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", function () {
  const markdown = editor.value;
  const html = marked(markdown);
  preview.innerHTML = html;
});

// Cargar un ejemplo de Markdown en el editor al inicio
editor.value = `# Título principal
## Subtítulo
[Enlace a Google](https://www.google.com)
\`Código en línea\`

\`\`\`
Bloque de código
\`\`\`

- Lista item 1
- Lista item 2

> Bloque de cita

![Texto alternativo de una imagen](https://via.placeholder.com/150)

**Texto en negrita**`;