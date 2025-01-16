document.addEventListener('DOMContentLoaded',()=>{
    
    const entryform = document.getElementById('entry-form')
    const editentryform = document.getElementById('edit-entry-form')
    const entriesTable = document.getElementById('entries-table')
    const filtertype = document.getElementById('filter-type')
    const filterCategory = document.getElementById('filter-category')

    let entries = JSON.parse(localStorage.getitem('task')) || []

    entryform.addEventListener('submit', addEntry)


    function addEntry(event){
        
        event.preventDefault()
        const entry = entry.value.trim()

        entry.push({
            text:entry,
            addEntry: false
        })

        // this is a test
        // this is second test
        // this is 3rd test

    }


})