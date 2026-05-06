document.addEventListener("DOMContentLoaded", function () {
  const paisSelect = document.getElementById("pais");
  const capitalSelect = document.getElementById("capital");
const capitalesMap = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogota",
    Peru: "Lima",
    Uruguay: "Montevideo",
  };

  paisSelect.addEventListener("change", function () {
    const paisValue = this.value;

    if (paisValue && capitalesMap[paisValue]) {
      capitalSelect.value = capitalesMap[paisValue];
      const paisTexto = paisSelect.options[paisSelect.selectedIndex].text;
      const capitalTexto =
        capitalSelect.options[capitalSelect.selectedIndex].text;

      console.log(
        `El país seleccionado es ${paisTexto} y su capital es ${capitalTexto}.`,
      );
    } else {
              capitalSelect.value = "";
    }
  });
});
