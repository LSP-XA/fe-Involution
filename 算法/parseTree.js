const text = `
- 章节一
  - 标题一
  - 标题二
    - 子标题三
    - 子标题四
      - 子标题五
- 章节二
  - 标题一
  - 标题二
    - 子标题三
      - 子标题四
        - 子标题五
      - 子标题六
        - 子标题七
`;

class TreeNode {
  constructor({ value, level }) {
    this.value = value;
    this.level = level;
    this.children = [];
  }
}

function concatResult(result, cache) {
  return result.concat(cache[0] ? [cache[0]] : [])
}

function  parseTree(text) {
  const stack = text.split('\n').filter(Boolean);
  let cache = [];
  let result = [];
  while(stack.length) {
    const level = (stack[0].indexOf('-') / 2) + 1;
    const node = new TreeNode(
      {
        level,
        value: stack[0].split('- ')[1],
      }
    )
    if (level === 1) {
      result = concatResult(result, cache);
      cache = [];
    }
    cache.push(node)
    if(level !== 1) {
      cache[level -2].children.push(node)
      if(level !== cache.length) {
        cache[level - 1] = node
        cache.pop()
      }
    }
    stack.shift()
  }
  result = concatResult(result, cache);
  return result
}

const tree = parseTree(text);