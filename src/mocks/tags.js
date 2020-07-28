// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mockTags = {
    "records": [
        {
            "id": "rec1AUUDQgdP7it32",
            "fields": {
                "Name": "NLP",
                "Amount": 1
            },
            "createdTime": "2020-07-27T23:01:21.000Z"
        },
        {
            "id": "rec2e6XYYDjgTTyHq",
            "fields": {
                "Name": "American",
                "Amount": 0
            },
            "createdTime": "2020-07-27T20:04:15.000Z"
        },
        {
            "id": "rec47fHpJvEYXJbdl",
            "fields": {
                "Name": "Advice",
                "Amount": 1
            },
            "createdTime": "2020-07-28T03:48:32.000Z"
        },
        {
            "id": "rec8C1rVZUNgcGqHU",
            "fields": {
                "Name": "European",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:04:15.000Z"
        },
        {
            "id": "recDQJDbF6z6tuMUa",
            "fields": {
                "Name": "Business",
                "Amount": 1
            },
            "createdTime": "2020-07-28T03:47:06.000Z"
        },
        {
            "id": "recDwninr5EGEAhQ7",
            "fields": {
                "Name": "People",
                "Amount": 2
            },
            "createdTime": "2020-07-27T23:05:37.000Z"
        },
        {
            "id": "recJGDuw2vhTxzbFd",
            "fields": {
                "Name": "VC",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:24:47.000Z"
        },
        {
            "id": "recLT2vgcOxVAXQDF",
            "fields": {
                "Name": "Reviews",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:24:54.000Z"
        },
        {
            "id": "recLub4JId6K0ddak",
            "fields": {
                "Name": "GPT-3",
                "Amount": 1
            },
            "createdTime": "2020-07-27T23:01:14.000Z"
        },
        {
            "id": "recNjTtjbW5tuUNWb",
            "fields": {
                "Name": "Recommendations",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:25:07.000Z"
        },
        {
            "id": "recQHHGsOFPrewfpi",
            "fields": {
                "Name": "Megathread",
                "Amount": 1
            },
            "createdTime": "2020-07-28T03:44:23.000Z"
        },
        {
            "id": "recRnrrltMJcsgaXE",
            "fields": {
                "Name": "Urban Planning",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:04:15.000Z"
        },
        {
            "id": "recYeDbjkO7vELaVe",
            "fields": {
                "Name": "Literature",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:24:55.000Z"
        },
        {
            "id": "recaiVkTfCch2lS1P",
            "fields": {
                "Name": "Mali",
                "Amount": 1
            },
            "createdTime": "2020-07-28T00:59:00.000Z"
        },
        {
            "id": "recjDGXaa6r8OguEz",
            "fields": {
                "Name": "Culture",
                "Amount": 1
            },
            "createdTime": "2020-07-28T00:58:56.000Z"
        },
        {
            "id": "recpRnhG5uZ8zFjyY",
            "fields": {
                "Name": "Software Engineering",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:24:48.000Z"
        },
        {
            "id": "recqjydNPcM8cAnza",
            "fields": {
                "Name": "Technology",
                "Amount": 3
            },
            "createdTime": "2020-07-27T20:24:48.000Z"
        },
        {
            "id": "recqx8WKdmqPddlDE",
            "fields": {
                "Name": "Startups",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:24:39.000Z"
        },
        {
            "id": "recrCqpVmgSUqJHCN",
            "fields": {
                "Name": "Quantum",
                "Amount": 1
            },
            "createdTime": "2020-07-28T03:57:15.000Z"
        },
        {
            "id": "recrcOxbxiYxGO089",
            "fields": {
                "Name": "Books",
                "Amount": 1
            },
            "createdTime": "2020-07-27T20:24:55.000Z"
        },
        {
            "id": "recrxk7A2u2LhsnCM",
            "fields": {
                "Name": "Jack Butcher",
                "Amount": 1
            },
            "createdTime": "2020-07-27T23:05:40.000Z"
        },
        {
            "id": "recubqsj8k5d7TCz1",
            "fields": {
                "Name": "History",
                "Amount": 1
            },
            "createdTime": "2020-07-28T00:59:32.000Z"
        },
        {
            "id": "recvrRI4MXg9JPx3K",
            "fields": {
                "Name": "Bro Science",
                "Amount": 1
            },
            "createdTime": "2020-07-28T04:05:52.000Z"
        },
        {
            "id": "recwWeAwBZ8tA1LUg",
            "fields": {
                "Name": "Math",
                "Amount": 1
            },
            "createdTime": "2020-07-28T03:57:20.000Z"
        },
        {
            "id": "recx4YhFQifHd5Q4n",
            "fields": {
                "Name": "vgr",
                "Amount": 1
            },
            "createdTime": "2020-07-28T03:44:27.000Z"
        },
        {
            "id": "reczIwe5ZlNINqB0k",
            "fields": {
                "Name": "Machine Learning",
                "Amount": 2
            },
            "createdTime": "2020-07-27T20:25:00.000Z"
        }
    ]
}
export default mockTags