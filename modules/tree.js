export const makeNode = (value, leftChild, rightChild) => {
    let node = {
        name: value,
        leftChild: leftChild,
        rightChild: rightChild,
    }

    return node
}

export const printBranches = (tree) => {
    console.log(tree.name)
    if (tree.leftChild) {
        printBranches(tree.leftChild)
    }
    if (tree.rightChild) {
        printBranches(tree.rightChild)
    }
}



export const printLevels = (tree) => {

    let h = height(tree)

    for (let i = 1; i <= h; i++){
        printLevel(tree)
    }

    console.log(h)
}

const printLevel = () =>
{
    
}

const height = (node) => {

    if (node === undefined){
        return 0 
    }
    else {
        let lHieght = height(node.leftChild)
        let rHieght = height(node.rightChild)

        if (lHieght > rHieght){
            return lHieght + 1
        }
        else {
            return rHieght + 1
        }

    }
}