const obj = {
    "expenseData": [
        {
            "amount": 50,
            "startDate": "2021-01-01T00:00:00.000Z"
        },
        {
            "amount": 20,
            "startDate": "2021-02-01T00:00:00.000Z"
        },
        {
            "amount": 30,
            "startDate": "2021-03-01T00:00:00.000Z"
        }
    ],
    "revenueData": [
        {
            "amount": 60,
            "startDate": "2021-02-01T00:00:00.000Z"
        }
    ]
}

const expData = obj.expenseData.sort((a, b) => {
    return new Date(a.startDate).getMonth() - new Date(b.startDate).getMonth()
})
const revData = obj.revenueData.sort((a, b) => {
    return new Date(a.startDate).getMonth() - new Date(b.startDate).getMonth()
})

const result = []
for (var i = 0; i < 12; i++) {
    var sk = revData.filter((s) => {
        return new Date(s.startDate).getMonth() == i;
    })
    var x = 0;
    var das = new Date();
    if (sk.length > 0) {
        sk.map((dos) => {
            x += dos.amount;
            das = dos.startDate;
        })
        result.push({
            amount: x,
            startDate: das
        });
    }
}
const result1 = []
for (var i = 0; i < 12; i++) {
    var sk = expData.filter((s) => {
        return new Date(s.startDate).getMonth() == i;
    })
    var x = 0;
    var das = new Date();
    if (sk.length > 0) {
        sk.map((dos) => {
            x += dos.amount;
            das = dos.startDate;
        })
        result1.push({
            amount: x,
            startDate: das
        });
    }
}


const finalResult = []
for (var i = 0; i < 12; i++) {
    var sk = result.filter((s) => {
        return new Date(s.startDate).getMonth() == i;
    })
    var skk = result1.filter((s) => {
        return new Date(s.startDate).getMonth() == i;
    })
    var x = 0;
    var das = new Date(new Date('2021-01-01T00:00:00.000Z').setMonth(new Date('2021-01-01T00:00:00.000Z').getMonth() + i));
    if (sk.length > 0) {
        sk.map((dos) => {
            x += dos.amount;
            das = dos.startDate;
        })
    }
    if (skk.length > 0) {
        skk.map((dos) => {
            x -= dos.amount;
            das = dos.startDate;
        })
    }
    finalResult.push({
        amount: x,
        startDate: new Date(das)
    })
}

console.log({
    balance: finalResult
})