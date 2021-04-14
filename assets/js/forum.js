var defaultThreads = [
    {
        id: 1,
        title: "Waiter Needed",
        author: "Tester",
        date: Date.now(),
        content: "Test",
        comments: [
            {
                author: "Jack H.",
                date: Date.now(),
                content: "Hello, I am interested in this position."
            },
            {
                author: "Bob Seagul",
                date: Date.now(),
                content: "Please direct message me!"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
    localStorage.clear();
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}