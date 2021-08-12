const moneybox = () => {
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log("MoneyBox: "+ saveCoins);
    }
    return countCoins;
}

let myMoneyBox = moneybox();
myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(5);
myMoneyBox(1);
