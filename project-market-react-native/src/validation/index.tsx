
export const checkEmailValidation = (email: string) => 
{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

export const checkPasswordValidation = (password: string) => 
{
    return password.length >= 8
}

export const checkPasswordsMatch = (password: string, repeat: string) => {
    if (password === repeat)
    {
        return true
    }
}

export const checkIsEmpty = (value: string) => {
    return value.length > 0
}