
const addButton = document.querySelector('#add');



//update local storage function define.

const updateLSData = () => {
    
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];  
    console.log(textAreaData);


    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })

    console.log(notes);

    localStorage.setItem('notes', JSON.stringify(notes));
    
    
}



const addNewNote = (text = '') => {
    
    
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `

    <div class="operation">
            <button class="edit"> <i class="fas fa-edit"></i> </button>
            <button class="delete"><i class="fas fa-trash-alt"></i> </button>
        </div>


        <div class="main ${text ? "": "hidden"}"></div>
        <textarea class="${text ? "hidden": ""}"></textarea>
          `;
    
    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);


    // getting the refrences
    const editButon = note.querySelector('.edit');
    const deleteButon = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');



    //Deleting the node using delete button.
    deleteButon.addEventListener('click', () => {
        note.remove();
        updateLSData();
    })


    //Toggle using eidit button.

    textArea.value = text;
    mainDiv.innerHTML = text;

    
    editButon.addEventListener('click', ()=> {
    mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');

    })



    textArea.addEventListener('change', (event) => {
        
        const value = event.target.value;
        // console.log(value);
        mainDiv.innerHTML = value;
        

        updateLSData();

    })






    document.body.appendChild(note);
    //it appends/add the node as the last child of a node.
};


// getting bacl data from local storage 
const notes = JSON.parse(localStorage.getItem('notes'));


if (notes) {
    notes.forEach((note) => {
        addNewNote(note)
    })
}

addButton.addEventListener('click', () => {
    addNewNote()
    
})








