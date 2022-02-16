const tasks = require('./tasks');

function sum(a,b) {
    return a + b;
}

test('adds 2 variables', () => {
    expect(tasks.getTask()).toBe(3);
})

test('should give an ID for a task', () => {
    expect(tasks.getTask(1,2)).toBe(3);
})
