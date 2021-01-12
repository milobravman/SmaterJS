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

    let d = 1
    let h = height(tree)

    for (let i = 1; i <= h; i++){
        console.log(h)

    }

    console.log(tree.name)

    if (tree.leftChild) {
        console.log(tree.leftChild.name)
    }

    if (tree.rightChild) {
        console.log(tree.rightChild.name)
    }

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