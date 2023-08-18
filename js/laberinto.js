const maze = [["S", ".", "#"],
            ["#", ".", "#"],
            ["G", ".", "."]];

function findpath(maze, x, y){
    if(x < 0 || y < 0 || x > maze.length || y > maze.length){
        return false;
    }

    if(maze[y][x] == "G"){
        return true;
    }

    if(maze[y][x] == "#"){
        return false;
    }

    maze[y][x] = "+";

    if(findpath(maze, x, y-=1) == true){ //norte
        return true;
    }
    if(findpath(maze, x+=1, y) == true){ //este
        return true;
    }
    if(findpath(maze, x, y+=1) == true){ //sur
        return true;
    }
    if(findpath(maze, x-=1, y) == true){ //oeste
        return true;
    }

    maze[y][x] = "#";
    return false;
}   

console.log(findpath(maze, 0, 0));
