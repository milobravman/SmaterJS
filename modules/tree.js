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

    let currentLevel = 0;

    console.log(tree.name)

    if (tree.leftChild) {
        console.log(tree.leftChild.name)
    }

    if (tree.rightChild) {
        console.log(tree.rightChild.name)
    }

}