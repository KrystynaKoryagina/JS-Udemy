// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
    
//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });

// });


// Promise
const inputRub = document.getElementById('rub'),
      inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    const request = () => new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'js/current.json');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   
        xhr.onloadend = () => resolve(JSON.parse(xhr.responseText));
        xhr.onerror = () => reject('Что-то пошло не так!');
        
        xhr.send();
    });

    request()
        .then(data => inputUsd.value = inputRub.value / data.usd)
        .catch(error => inputUsd.value = error);

});