let prizes = [
    {
        name: "Amazon Echo, $100 CAD, Job offer, & dinner with the Lush Plans team",
        description: "Best Overall hack",
        value: "1st prize",
        img: "res/alexa.png",
        id: "bestHack"
    },
    {
        name: "Raspberry Pi Kit, $50 CAD, and Job offer",
        description: "Second Best Overall hack",
        value: "Runner-up Prize",
        img: "res/pi.png",
        id: "runnerUpHack"
    },
    {
        name: "Power Bank, $50 CAD, and Internship from one of our partners",
        description: "Third Best Overall hack",
        value: "2rd  Runner-up Prize",
        img: "res/bank.png",
        id: "secondRunnerUpHack"
    },
    {
        name: "VR Headset, $50 CAD, and Internship from one of our partners",
        description: "Best Open Source Project Prize",
        value: "OSS Unicorn Award",
        img: "res/vr.png",
        id: "ossHack"
    },
    {
        name: "N1,000,000 over 12 months for the team in exchange for 2% equity",
        description: "Project most likely to sponsor Naija Hacks in four years from now",
        value: "Most Fundable Hack",
        img: "",
        id: "mostFundableHack"
    },
    {
        name: "Opportunity to contribute to the Hyperledger Blockchain and learn from some of the Developers",
        description: "Best use of Blockchain",
        value: "The Blockchain Prize",
        img: "",
        id: "blockchainHack"
    },
    {
        name: "Raspberry Pi Kit",
        description: "Best IoT or hardware Hack",
        value: "STEMHub Foundation Prize",
        img: "res/pi.png",
        id: "iosHack"
    },
    {
        name: "Unlimited access to Lush Plans private API and the opportunity to Intern at Lush Plans",
        description: "Best data science/AI/Machine Learning in Events hack",
        value: "Data Ninja award",
        img: "",
        id: "dataHack"
    },
    {
        name: "$100 CAD, and Internship at Lush Plans",
        description: "Best use of LushPlans API",
        value: "Top API Hack",
        img: "",
        id: "apiHack"
    },
    {
        name: "$50 CAD, and Internship at Lush Plans",
        description: "Best Event Planning and Marketing Solution",
        value: "Wedding Planner/Management Award",
        img: "",
        id: "eventsHack"
    },
    {
        name: "STEMHub Foundation Prize and the opportunity to Intern at STEMHub Foundation",
        description: "Best Hack from a majority-women team",
        value: "Women in STEM Award",
        img: "",
        id: "womenHack"
    },
    {
        name: "Application fee to an Internatonal University & one-on-one admissions mentorship by Humans & Leaders",
        description: "Most technically challenging",
        value: "Top Hacker Award",
        img: "",
        id: "topHackerHack"
    },
    {
        name: "1-year of Figma Professional plan",
        description: "Best User Experience",
        value: "UI/UX Grand Prize",
        img: "",
        id: "uxHack"
    },
    {
        name: "PRIZE/AWARD (Needs a sponsor)",
        description: "Best Financial Hack",
        value: "-",
        img: "",
        id: "financialHack"
    },
    {
        name: "PRIZE/AWARD (Needs a sponsor)",
        description: "Best Naija-focused hack",
        value: "Made in Nigeria Award",
        img: "",
        id: "madeInNigeriaHack"
    },
    {
        name: "PRIZE/AWARD (Needs a sponsor)",
        description: "Best Women focused hack",
        value: "Diversity Prize",
        img: "",
        id: "diversityHack"
    },
    {
        name: "PRIZE/AWARD (Needs a sponsor)",
        description: "Best hack that makes housing more Luxurious/comfortable",
        value: "Real estate/housing Grand Prize",
        img: "",
        id: "luxuryHack"
    },
    {
        name: "PRIZE/AWARD (Needs a sponsor)",
        description: "Best hack that enables transparency and accountability in government",
        value: "Community engagement award",
        img: "",
        id: "govHack"
    },
]


const sponsors = [
    {
        description: "STEMHub Foundation",
        img: "http://stemhubfoundation.com/img/logo_cropped.png",
        url: "http://stemhubfoundation.com"
    },

    {
        description: "Lush Plans",
        img: "https://lushplans.com/img/logo_color.png",
        url: "http://lushplans.com"
    },

]



const technologies = [
    {
        description: "Blockchain",
        img: "https://blockgeeks.com/wp-content/uploads/2016/09/image-4-276x300.png",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "Machine Learning",
        img: "http://en.es-static.us/upl/2018/05/deep-learning-quora.png",
        url: "https://en.wikipedia.org/wiki/Machine_learning"
    },
    {
        description: "IoT",
        img: "https://appsec-labs.com/wp-content/uploads/2016/12/iotree-e1481456398592.png",
        url: "https://en.wikipedia.org/wiki/Internet_of_things"
    },
    {
        description: "Big Data",
        img: "http://cdn1.noahdatatech.com/wp-content/uploads/2018/03/big-data-analytics-22-768x574.png",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "React",
        img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        url: "https://reactjs.org/"
    },
    {
        description: "UI/UX",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "Angular",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "Node.js",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "Hardware",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "PHP",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "Go",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "Javascript",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "Android",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
        description: "iOS",
        img: "",
        url: "https://en.wikipedia.org/wiki/Blockchain"
    },
]
