export const loginForm = [
    {
        id: 1,
        name: "email",
        title: "Email Address*",
        inputType: "email",
        type: "primary",
        placeholder: "example@mail.com", 
        minLenght: 8,
        maxLenght: 50,
        required: true,
        pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    },
    {
        id: 2,
        name: "password",
        title: "Password*",
        inputType: "password",
        type: "primary",
        placeholder: "password", 
        minLenght: 5,
        maxLenght: 30,
        required: true
    }
]