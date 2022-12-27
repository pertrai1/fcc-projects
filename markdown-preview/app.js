const editor = document.querySelector('#editor');
const editorWrapper = document.querySelector('#wrapper-editor');
const preview = document.querySelector('#preview');
const previewWrapper = document.querySelector('#wrapper-preview');
const resizer = document.querySelector('#resizer');

const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');

leftBtn.addEventListener('click', () => {
  editorWrapper.style.display = 'none';
  previewWrapper.style.display = 'block';
  previewWrapper.style.width = '100%';
  resizer.style.left = '1px';
  rightBtn.style.left = '.75%';
  rightBtn.style.display = 'block';
  leftBtn.style.display = 'none';
});

rightBtn.addEventListener('click', () => {
  previewWrapper.style.display = 'none';
  editorWrapper.style.display = 'block';
  editorWrapper.style.width = '100%';
  leftBtn.style.left = 'auto';
  leftBtn.style.right = '.75%';
  leftBtn.style.display = 'block';
  rightBtn.style.display = 'none';
  resizer.style.right = '1px';
  resizer.style.left = 'auto';
});

resizer.addEventListener('click', () => {
  previewWrapper.removeAttribute('style');
  editorWrapper.removeAttribute('style');
  leftBtn.removeAttribute('style');
  rightBtn.removeAttribute('style');
  resizer.removeAttribute('style');
})
const codeBlock = '`const test = "hello world"`';
editor.value = `# Header 1

## Header 2

[link](http://google.com)

${codeBlock}

- list item

> blockquote

**bold text**
`;

preview.innerHTML = marked.parse(editor.value);

editor.addEventListener('input', ({target}) => {
  preview.innerHTML = marked.parse(target.value);
})

