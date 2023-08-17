// Get references to HTML elements
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

document.addEventListener('DOMContentLoaded', () => {
    const noteElements = document.querySelectorAll('li');

    noteElements.forEach((noteElement, index) => {
        noteElement.addEventListener('click', () => {
            noteElement.classList.add('strike');
        });
    });

});


// Load existing notes from localStorage
function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        const notes = JSON.parse(savedNotes);
        notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = note;
            notesList.appendChild(li);
        });
    }
}

// Save notes to localStorage
function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Add a new note
function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);

        // Save note to localStorage
        const savedNotes = localStorage.getItem('notes');
        const notes = savedNotes ? JSON.parse(savedNotes) : [];
        notes.push(noteText);
        saveNotes(notes);

        // Clear input field
        noteInput.value = '';
    }
}

// Event listener for adding a new note
addNoteBtn.addEventListener('click', addNote);

// Load existing notes when the page loads
window.addEventListener('load', loadNotes);