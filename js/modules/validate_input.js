const d = document;

export default function validateInput(input) {
  if (input.toString().trim() === "") return true;

  return false;
}
