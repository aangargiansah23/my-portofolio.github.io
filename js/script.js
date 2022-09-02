const scriptURL = 'https://script.google.com/macros/s/AKfycby2W-Yo8NYQvnwQQ6E9XqE8fb4onsgqP1-ybQVLfwwbMP3OrOH4AOcmzdtI4x7ZTgo7KQ/exec';
const form = document.forms['argiansah-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlertSuccess = document.querySelector('.my-alert-success');
const myAlertGagal = document.querySelector('.my-alert-gagal');


form.addEventListener('submit', e => {
   e.preventDefault();
   // ketika tombol submit diklik
   // tampilkan tombol loading, hilangkan tombol kirim
   btnLoading.classList.toggle('d-none');
   btnKirim.classList.toggle('d-none');

   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      myAlertSuccess.classList.toggle('d-none');
      // reset form
      form.reset();

      console.log('Success!', response);
   })
   .catch(error => {
      myAlertGagal.classList.toggle('d-none');
      console.error('Error!', error.message)
   });
});


// Animate AOS
const galleryImg = document.querySelectorAll('.gallery-img');
galleryImg.forEach((img, i) => {
   img.dataset.aos = 'fade-down';
   img.dataset.aosDelay = i * 100;
   img.dataset.aosDuration = 1000;
});

AOS.init();
