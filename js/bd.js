export let users = [
    {
        id:1,
        company: "UZCARD",
        currency: "UZB",
        total: 2100000
    },
    {
        id:2,
        company: "HUMO",
        currency: "RUB",
        total: 120000
    },
    {
        id:3,
        company: "MasterCard",
        currency: "USD",
        total: 2300
    },
    {
        id:4,
        company: "VISA",
        currency: "USD",
        total: 5300
    },
]

export let tranzactions = [
    {
        id: Math.round(Math.random() * 100200),
        company: "HUMO",
        coteg: "CAR",
        total: 2300,
        time: "4 дня назад"
    },
    {
        id: Math.round(Math.random() * 104000),
        company: "MasterCard",
        coteg: "HOME",
        total: 100,
        time: "4 дня назад"
    },
    {
        id: Math.round(Math.random() * 104000),
        company: "UZCARD",
        coteg: "EAT",
        total: 120000,
        time: "4 дня назад"
    },
]
