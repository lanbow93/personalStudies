const $openModalButton = $(".open");
const $closeModalButton = $(".close");
const $modal = $(".modal");

function displayModal(event) {
    $modal.css('display', 'flex')
}

$openModalButton.on("click", displayModal)
$closeModalButton.on("click", (event) => $modal.css("display", "none"))