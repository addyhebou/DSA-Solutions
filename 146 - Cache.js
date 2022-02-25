/*

Hash maps are unordered, but linkedlist are ordered -> this is what you use to put items in constant time
necessary to trace what was last used or accessd
{}

LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4


General Idea for the Algorithm:
The Cache is made up of two data structure: linkedList and hashmap

the hash map is to quickly access the values that are inputted
the linkedList is to remove them

the least accessed ones are placed in the back (the tail), while the most recent are in the front


Lessons I Learned From Mock Run:
  JAVASCRIPT SYNTAX
  to delete from an object, you write delete object[keyYouWishToDelete]
  to get length of an object, you get its keys first, then length of its list of keys => Object.keys(desiredObject).length
  

  LINKEDLISTS
  When initializing a new linkedList, not only do you init new head and tail nodes,
  you must also set their relation to each other IMMEDIATELY (head.next = tail, tail.prev = head)

*/

class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next;
    this.prev;
  }
}

class LRUCache {
  constructor(capacity) {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.hashMap = {};
    this.capacity = capacity;
  }

  put(key, value) {
    let node = this.hashMap[key];
    if (node != null) {
      this.removeNode(this.hashMap[key]);
      this.addNode(node);
    } else {
      if (Object.keys(this.hashMap).length == this.capacity) {
        let deleteNode = this.tail.prev;
        this.removeNode(deleteNode);
        delete this.hashMap[deleteNode.val];
      }
      let newNode = new Node(key, value);
      this.hashMap[key] = newNode;
      this.addNode(newNode);
    }
  }

  get(key) {
    if (key in this.hashMap) {
      this.put(key, this.hashMap[key].val);
      return this.hashMap[key].val;
    }
    return -1;
  }

  addNode(node) {
    // LinkedList function
    // Adds a node to the front into a new relative head node
    let secondInLineNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = secondInLineNode;
    secondInLineNode.prev = node;
  }

  removeNode(node) {
    // LinkedList function
    // Deletes but saves a node's location
    let deleteNode = node;
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4

/*

Lessons I Learned From Mock Run:
  JAVASCRIPT SYNTAX
  to delete from an object, you write delete object[keyYouWishToDelete]
  to get length of an object, you get its keys first, then length of its list of keys => Object.keys(desiredObject).length
  
  
  LINKEDLISTS
  When initializing a new linkedList, not only do you init new head and tail nodes,
  you must also set their relation to each other IMMEDIATELY (head.next = tail, tail.prev = head)
  */

/*
 
 Lessons I learned from mock run II:
 
  JAVASCRIPT SYNTAX
 FOLLOW: to delete from an object, you write delete object[keyYouWishToDelete]!!!! [] NOT () NOT A FUNCTION
Get length of map => Object.keys(desiredObject).length , not size !!


 CHECK FOR CAPACITY:
 ITS EITHER CHECK WHEN MAP.LENGTH IS == TO CAPACITY OR WHEN MAP.LENGTH >= CAPACITY, NOT OTHER WAY AROUND
  */
