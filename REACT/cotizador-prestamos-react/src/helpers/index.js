const formatMoney = value => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(value);
}

const calculatePayment = (amount, term) => {
    let totalAmount;
    // Mientras mayor es la cantidad solicitada, menor es el interes

    if (amount < 5000) {
        totalAmount = amount * 1.5;
    } else if (amount >= 5000 && amount < 10000) {
        totalAmount = amount * 1.4;
    } else if (amount >= 10000 && amount < 15000) {
        totalAmount = amount * 1.3;
    } else {
        totalAmount = amount * 1.2;
    }

    // Mientras mas plazo, mayor interes
    if (term === 6) {
        totalAmount *= 1.1;
    } else if (term === 12) {
        totalAmount *= 1.2;
    } else {
        totalAmount *= 1.3;
    }
    return totalAmount.toFixed(2);
}

export {
    formatMoney,
    calculatePayment
}