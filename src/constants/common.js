const BaseURL = "https://api.ezfrontend.com"
const BaseImgDefault = "https://via.placeholder.com"

const checkIncludes = (array, item) => {
  return Object.keys(array).includes(item)
}

export { BaseURL, BaseImgDefault, checkIncludes }
