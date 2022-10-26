const $input = $("input")
const $save = $("#save")
const $load = $("#load")

// Object to be saved in its natural syntax
const application_state = {
    text: ""
}

function saveData() {
    // Setting the objecy to have the textbox's inputted value
    application_state.text = $input.val()
    // Converting the application state object into a JSON string and saving it to a variable
    const state_as_json = JSON.stringify(application_state)
    // Storing it in the local storage as a key:value pair
    window.localStorage.setItem("app_state", state_as_json)
}

function loadData() {
    // using the .getItem to retreive the JSON string with the key of "app_state"
    const state_as_json = window.localStorage.getItem("app_state")
    // If above variable actually HAS data in it (undefined === false)
    if (state_as_json) {
        // Turn JSON string back into an object and save it in loaded data
            const loaded_data = JSON.parse(state_as_json)
            // Load data back in text box
            $input.val(loaded_data.text)
    }
}

$save.on("click", saveData)
$load.on("click", loadData)