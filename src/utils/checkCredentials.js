export const isValidEmail = (mail) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)
export const isValidPassword = (password) => String(password).length > 0
