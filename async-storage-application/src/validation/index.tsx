export const checkNameValidation = (name) => 
{
    return name.length >= 5
}

export const checkEmailValidation = (email) => 
{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

export const checkPasswordValidation = (password) => 
{
    return password.length >= 8
}

export const checkIsEmpty = (value) =>
{
    return value.length > 0
}