const text = `
- 章节一
  - 标题一
  - 标题二
    - 子标题三
- 章节二
  - 标题一
  - 标题二
`;

class Node {
  constructor({ value, level }) {
    this.value = value;
    this.level = level;
    this.children = [];
    // hint: 也可在数据结构中增加 this.parent 节点辅助解析
  }
}

const tree = parseTree(text);
// [ Node { value: "章节一", children: [ Node, Node ], level: 1 },
//   Node { value: "章节二", children: [ Node, Node ], level: 1 } ]