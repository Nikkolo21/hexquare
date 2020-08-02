export const registerForm = [
    {
        id: 1,
        name: "name",
        title: "Name*",
        inputType: "text",
        type: "primary",
        placeholder: "my name", 
        minLenght: 2,
        maxLenght: 30,
        required: true
    },
    {
        id: 2,
        name: "lastname",
        title: "Lastname*",
        inputType: "text",
        type: "primary",
        placeholder: "my lastname", 
        minLenght: 2,
        maxLenght: 30,
        required: true
    },
    {
        id: 3,
        name: "email",
        title: "Email Address*",
        inputType: "email",
        type: "primary",
        placeholder: "example@mail.com", 
        minLenght: 8,
        maxLenght: 50,
        required: true,
        pattern: /^[a-zA-Z0-9\-_.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    },
    {
        id: 4,
        name: "password",
        title: "Password*",
        inputType: "password",
        type: "primary",
        placeholder: "password", 
        minLenght: 8,
        maxLenght: 30,
        required: true
    }
]