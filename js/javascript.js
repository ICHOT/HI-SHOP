// document.querySelector("alert").addEventListener('click', function () {
//   swal.fire("Our First Alert", "With some body text and success icon!", "success");
// });

// document.querySelector("alerterror").addEventListener('click', function () {
//   swal.fire("Our First Alert", "With some body text and success icon!", "error");
// });
function alerterrorlog() {
  Swal.fire(
    'Login Error',
    'tekan button untuk lanjutkan',
    'error'
  )
}
function alert() {
  Swal.fire(
    'Barang Sudah Terbeli',
    'tekan button untuk lanjutkan',
    'success'
  )
}
function alerterror() {
  Swal.fire(
    'Barang Sudah Habis',
    'tekan button untuk lanjutkan',
    'error'
  )
}