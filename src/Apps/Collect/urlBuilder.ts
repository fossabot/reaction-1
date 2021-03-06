import qs from "qs"
import { State } from "./FilterState"

export const buildUrlForCollectionApp = (state: State): string => {
  const params = removeDefaultValues(state)
  const queryString = qs.stringify(params)

  const url = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname

  return url
}

export const buildUrlForCollectApp = (state: State): string => {
  const fragment = buildCollectUrlFragmentFromState(state)

  const url = fragment ? `/collect${fragment}` : "/collect"

  return url
}

const buildCollectUrlFragmentFromState = (state: State): string => {
  const { medium, ...params } = removeDefaultValues(state)

  const emptyOrSpecificMedium = medium ? `/${medium}` : ""

  if (Object.keys(params).length === 0) {
    return emptyOrSpecificMedium
  }

  return `${emptyOrSpecificMedium}?${qs.stringify(params)}`
}

const removeDefaultValues = (state: State): State => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    if (isDefaultFilter(key, value)) {
      return acc
    } else {
      return { ...acc, [key]: value }
    }
  }, {})
}

// This is used to remove default state params that clutter up URLs.
const isDefaultFilter = (filter, value): boolean => {
  switch (filter) {
    case "major_periods":
    case "attribution_class":
      return value.length === 0
    case "sort":
      return value === "-decayed_merch"
    case "price_range":
    case "height":
    case "width":
      return value === "*-*"
    case "page":
      return value === 1
    case "medium":
      return value === "*"
    default:
      return !value
  }
}
