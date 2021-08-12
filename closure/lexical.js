const builCount = (i) =>{
    let count = i;
    const displayCount=() => {
        console.log(count++);
    }
    return displayCount;
}

const aumento = builCount(10);
aumento();
aumento();
aumento();

const Aumento100 = builCount(100);
Aumento100();
Aumento100();