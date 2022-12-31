import '@logseq/libs';

//Inputs 5 numbered blocks when called
async function insertSomeBlocks(e) {
    console.log('Open the calendar!')
    let numberArray = [1, 2, 3, 4, 5]

    const blocks = []
    for (const number of numberArray) {
        let block = {content: `This is block ${number}  
- test${number}  
- test${number}  `};
        blocks.push(block)
    }

    await logseq.Editor.insertBatchBlock(e.uuid, blocks, {sibling: true})
}

const main = async () => {
    logseq.App.showMsg("Test plugin loaded")
    logseq.Editor.registerSlashCommand('insertBlocks', async (e) => {
        insertSomeBlocks(e)
    })
}

logseq.ready(main).catch(console.error);
