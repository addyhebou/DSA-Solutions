/*
{
    
}


[ [1, 3], [2], [3], [] ]
{
    1: room1,
    0: 

}


base case:
if a room number particular key only belongs in that particular room, return false



1) searching through each key in the first index
2) adding a room that we've visited into our set (if its not in sete) * only visit the rooms we havent seen 
3) if our set != length of rooms, return false


[[1,3], [3,0,1], [2], [0]]


*/

let canVisitAllRooms = (rooms) => {
  let queue = new Queue();
  let visited = new Set();

  rooms[0].forEach((room) => {
    queue.enqueue(room);
  });

  while (!queue.isEmpty) {
    let qLen = queue.size();
    for (let i = 0; i < qLen; i++) {
      let room = queue.dequeue();
      if (!visited.has(room)) {
        visited.add(room);
        rooms[room].forEach((room) => {
          queue.enqueue(room);
        });
      }
    }
  }

  return visited.size() == rooms.length;
};
