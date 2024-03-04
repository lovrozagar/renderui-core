function getFormData(event: React.FormEvent<HTMLFormElement>) {
  const formData = new FormData(event.currentTarget)
  const result: { [key: string]: FormDataEntryValue } = {}

  formData.forEach((value, key) => {
    result[key] = value
  })

  return result
}

export { getFormData }
