export const createProjectForm = [
    {
        id: 1,
        name: "name",
        title: "Name of the project*",
        inputType: "text",
        type: "primary",
        placeholder: "my project name", 
        minLenght: 2,
        maxLenght: 50,
        required: true
    },
    {
        id: 2,
        name: "shortname",
        title: "Short name of the project*",
        inputType: "text",
        type: "primary",
        placeholder: "my project short name", 
        minLenght: 2,
        maxLenght: 10,
        required: true
    },
    {
        id: 3,
        name: "country",
        title: "Country*",
        inputType: "text",
        type: "primary",
        placeholder: "my project country", 
        minLenght: 2,
        maxLenght: 30,
        required: true
    },
    {
        id: 4,
        name: "url",
        title: "URL of the project",
        inputType: "text",
        type: "primary",
        placeholder: "https://www.example.com", 
        minLenght: 12,
        maxLenght: 50
    }
]