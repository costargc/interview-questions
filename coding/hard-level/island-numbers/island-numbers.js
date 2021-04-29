// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected 
// group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// output: 2


function closedIsland(grid) {
    
    m = grid.length; //rows 5
    n = grid[0].length; //cols 8
    count = 0;
    
    // cleaning the border
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {                   
            if (j==0 || j==n-1 || i==0 || i==m-1) {
                checkisland(grid, i, j)
                }
        }}

    // running
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {

            if (i > 0 && j > 0 && i < m-1 && j < n-1 && grid[i][j] == 0) {
                count = count + 1;
                //run a funcion here to handle the check
                checkisland(grid, i, j)
            }
        }
    }


    return (count)

};


function checkisland(grid, x, y) {

    if (x < 0 || y < 0 || x > m-1 || y > n-1 || grid[x][y] == 1) {
        return
    }

    grid[x][y] = 1; //change when I visit!
    checkisland(grid, x + 1, y) // check up
    checkisland(grid, x - 1, y) // check down
    checkisland(grid, x, y - 1) // check left
    checkisland(grid, x, y + 1) // check right
}


input1 = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]

input2 = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]

input2_1 = [
    [1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1]
]

input5 = [
    [0,0,1,1,0,1,0,0,1,0],
    [1,1,0,1,1,0,1,1,1,0],
    [1,0,1,1,1,0,0,1,1,0],
    [0,1,1,0,0,0,0,1,0,1],
    [0,0,0,0,0,0,1,1,1,0],
    [0,1,0,1,0,1,0,1,1,1],
    [1,0,1,0,1,1,0,0,0,1],
    [1,1,1,1,1,1,0,0,0,0],
    [1,1,1,0,0,1,0,1,0,1],
    [1,1,1,0,1,1,0,1,1,0]
] //5

console.log(closedIsland(input1));  //2
console.log(closedIsland(input2));  //2
console.log(closedIsland(input2_1));  //2
console.log(closedIsland(input5));  //5
