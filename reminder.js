
const submitButton = document.getElementById('submit').addEventListener('click', addReminder)

function addReminder(){
    const inputBlock = document.getElementById('inputtext');
    const mainList = document.getElementById('thelist');
    const reminderIntel = inputBlock.value;
    const addList = document.createElement('li');
    const divCover = document.createElement('div');
    divCover.classList.add('divCoverButtons');

    if (inputBlock.value !== "") {
        const spanList = document.createElement('span');
        mainList.appendChild(addList);   
        spanList.textContent = reminderIntel
        addList.appendChild(spanList)
        addList.appendChild(divCover)
        inputBlock.value = "" 
    }

    const addMark = document.createElement('button')
    const addDel = document.createElement('button')

    addMark.innerText = 'Mark Done'
    addMark.classList.add('markbutton')

    addDel.innerText = 'Delete'
    addDel.classList.add('DelButton')

    divCover.appendChild(addMark)
    addMark.addEventListener('click', addMarkButton)

    divCover.appendChild(addDel)
    addDel.addEventListener('click', addDelButton)

   
        function addMarkButton(){
            addList.classList.toggle('MarkCross');
            const listMarkCheck = addList.classList.contains('MarkCross');
             if (listMarkCheck == true){
                addMark.innerText = "Unmark"
             } else {
                addMark.innerText = "Mark Done"
             }
        }

        function addDelButton() {
            mainList.removeChild(addList)
        }
 
}