export const updatedFormData = (change, formData) => {
    const { name, value } = change.target
    const updatedFormInfo = {
        ...formData,
        [name]: value
    }
    return updatedFormInfo
  }