import { queryByAttribute  } from "@testing-library/react"

const getById = queryByAttribute.bind(null, 'id');

export default getById