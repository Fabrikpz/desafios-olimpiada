const maze = [["S", ".", ".", ".", "#"],
            ["#", ".", "#", ".", "#"],
            ["#", ".", ".", "#", "#"],
            [".", ".", ".", ".", "#"],
            ["#", ".", "#", ".", "G"]];

function findpath(maze, x, y) {
    if (x < 0 || y < 0 || x >= maze.length || y >= maze.length) {
        return false;
    }

    if (maze[y][x] == "G") {
        return true;
    }

    if (maze[y][x] == "#" || maze[y][x] == "+") {
        return false;
    }

    maze[y][x] = "+";

    if (findpath(maze, x, y - 1) == true) { //Norte
        return true;
    }
    if (findpath(maze, x + 1, y) == true) { //Este
        return true;
    }
    if (findpath(maze, x, y + 1) == true) { //Sur
        return true;
    }
    if (findpath(maze, x - 1, y) == true) { //Oeste
        return true;
    }

    maze[y][x] = "#";
    return false;
}

console.log(findpath(maze, 0, 0));
console.log("Solución:");
maze.forEach(row => {
    console.log(row.join(" "));
});