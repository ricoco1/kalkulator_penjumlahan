$(document).ready(function () {
    function tampilnama() {
        Swal.fire({
          icon: 'info',
          title: 'Halo',
          text: 'Nama saya Rico Pratama'
        });
      }
  
      window.onload = function() {
        tampilnama();
      };
    $('#hitung').click(function () {
      var number1 = parseFloat($('#number1').val());
      var number2 = parseFloat($('#number2').val());

      if (!number1 || !number2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Harap masukkan angka pada kedua input'
        });
        return;
    }

      var result = number1 + number2;
      Swal.fire({
        iconHtml: '<img src="static/calculator.jpg" style="width: 50px; height: 50px;">',
        title: 'Hasil',
        text: 'Penambahan: ' + number1 + ' + ' + number2 + ' = ' + result
      });
    });
  });
