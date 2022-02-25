// Add any extra import statements you may need here

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Add any helper functions you may need here

// function reverse(head) {
//   let tempA;
//   let tempB;
//   let trueHead = head;
//   while (head != null) {
//     if (head.next.data % 2 != 0) {
//       head = head.next;
//     } else {
//       tempA = head.next;
//       if (head.next.next.next != null) {
//         tempB = head.next.next.next;
//       } else {
//         tempB = null;
//       }
//       let pairB = head.next.next;
//       head.next = pairB;
//       pairB.next = tempA;
//       tempA.next = tempB;
//       head = tempA.next;
//     }
//   }

//   let iter = trueHead;
//   let lst = [];
//   while (iter != null) {
//     lst.push(iter.data);
//     iter = iter.next;
//   }
//   return trueHead;
// }

let reverseList = (head) => {
  if (head == null) return null;
  let newHead = head;
  if (head.next % 2 != 0) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;
  return newHead;
};
let reverse = (head) => {
  if (head == null) return null;
  while (head != null) {
    if (head % 2 == 0) head = reverseList(head);
    head = head.next;
  }
  return head;
};

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
var test_case_number = 1;

function printLinkedList(head) {
  var out = '[';
  while (head != null) {
    out += head.data;
    head = head.next;
    if (head != null) {
      out += ' ';
    }
  }
  out += ']';
  return out;
}

function check(expectedHead, outputHead) {
  var result = true;
  var tempExpectedHead = expectedHead;
  var tempOutputHead = outputHead;
  while (expectedHead != null && outputHead != null) {
    result &= expectedHead.data == outputHead.data;
    expectedHead = expectedHead.next;
    outputHead = outputHead.next;
  }
  if (!(expectedHead == null && outputHead == null)) result = false;

  var rightTick = '\u2713';
  var wrongTick = '\u2717';
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  } else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printLinkedList(tempExpectedHead);
    out += ' Your output: ';
    out += printLinkedList(tempOutputHead);
    console.log(out);
  }
  test_case_number++;
}

function createLinkedList(arr) {
  var head = null;
  var tempHead = head;
  for (var v of arr) {
    if (head == null) {
      head = new Node(v);
      tempHead = head;
    } else {
      head.next = new Node(v);
      head = head.next;
    }
  }
  return tempHead;
}

var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
var output_1 = reverse(head_1);
check(expected_1, output_1);

var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
var output_2 = reverse(head_2);
check(expected_2, output_2);

// Add your own test cases here
