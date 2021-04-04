const submitConfirm = (e: Event) => {
  const submitButton = e.target as HTMLInputElement;
  const text = submitButton.dataset['confirm'];
  if (text && !confirm(text)) {
      e.stopPropagation();
      e.preventDefault();
  }
};

Array.from(document.querySelectorAll('input[type="submit"')).forEach((element) => {
  element.addEventListener('click', submitConfirm)
});
