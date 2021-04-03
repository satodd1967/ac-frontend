export const updatedFormData = (change, loginFormData) => {
    const { name, value } = change.target
    const updatedFormInfo = {
        ...loginFormData,
        [name]: value
    }
    return updatedFormInfo
  }