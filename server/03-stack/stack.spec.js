const stackFactory = () => {
  let count = 0;
  let element;

  return {
    isEmpty: () => count === 0,
    size: () => count,
    push: (elem) => {
      if (count === 2) throw new Error('capacity overflow error');
      count += 1;
      element = elem;
    },
    pop: () => {
      if (count === 0) throw new Error('capacity underflow error');
      count -= 1;
      return element;
    }
  };
};

describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  it('starts empty', () => {
    let stack = stackFactory();
    expect(stack.isEmpty()).toBe(true);
  });

  it('starts with stack size of 0', () => {
    let stack = stackFactory();
    expect(stack.size()).toBe(0);
  });

  it('is not empty when pushed', () => {
    let stack = stackFactory();
    stack.push();
    expect(stack.isEmpty()).toBe(false);
  });

  it('stack size is 1 when pushed', () => {
    let stack = stackFactory();
    stack.push();
    expect(stack.size()).toBe(1);
  });

  it('stack is empty when pushed and popped', () => {
    let stack = stackFactory();
    stack.push();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('stack size is 0 when pushed and popped', () => {
    let stack = stackFactory();
    stack.push();
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it('throws overflow error when pushing to a stack at full capacity', () => {
    let stack = stackFactory();
    stack.push();
    stack.push();
    expect(() => {
      stack.push();
    }).toThrowError('capacity overflow error');
  });

  it('throw underflow error when popping an empty stack', () => {
    let stack = stackFactory();
    expect(() => {
      stack.pop();
    }).toThrowError('capacity underflow error');
  });

  it('pops the same one item when pushed', () => {
    let stack = stackFactory();
    stack.push('a');
    expect(stack.pop()).toBe('a');
  });
  it.todo('pops two items with the most recent first');
  it.todo('accepts only a positive capacity');
});