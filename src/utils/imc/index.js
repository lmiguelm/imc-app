export function calculateImc(height, weight) {
    let res = weight / (Math.pow(height, 2).toFixed(2));

    res > 999 && (res = 999.99);
    isNaN(res) && (res = 0);

    return res;
}

export function formatImc(res) {

    let imc = {};

    if(res < 17 ) {
        imc.color = '#ffa500';
        imc.title = 'Muito abaixo do peso'
    } else if (res >= 17 && res <= 18.49) {
        imc.color = '#FCCC00';
        imc.title = 'Abaixo do peso';
    } else if(res >= 18.5 && res <= 24.99) {
        imc.color = '#04d361';
        imc.title = 'Peso normal';
    } else if (res >= 25 && res <= 29.99) {
        imc.color = '#9ACD32';
        imc.title = 'Acima do peso';
    } else if (res >= 30 && res <= 34.99) {
        imc.color = '#FF4500';
        imc.title = 'Obesidade I';
    } else if(res >= 35 && res <= 39.99) {
        imc.color = '#e03d00';
        imc.title = 'Obesidade II (Severa)';
    } else if(res > 40) {
        imc.color = '#ed1c1c';
        imc.title = 'Obesidade III (Mórbida)';
    }

    return imc;
}
