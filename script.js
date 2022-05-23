window.addEventListener('message', changeLocation);

function changeLocation(e) {
    if (e.origin !== 'https://bls.ivi.ru') {
        return;
    }
    window.location.href = 'https://dev-bls-client.getshop.tv' + message.data;
}
