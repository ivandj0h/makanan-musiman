import { addMonths, isWithinInterval } from "date-fns"

// get meteorological season
export const getSeason = (date: Date) => {
  const currentYear = date.getFullYear()

  /**
   * winter
   * ------
   * December 1 to February 28 (February 29 in a leap year)
   */
  const winterStartsAt1 = new Date(currentYear - 1, 11, 1, 0, 0, 0, 0)
  const winterInterval1 = {
    start: winterStartsAt1,
    end: addMonths(winterStartsAt1, 3)
  }
  const winterStartsAt2 = new Date(currentYear, 11, 1, 0, 0, 0, 0)
  const winterInterval2 = {
    start: winterStartsAt2,
    end: addMonths(winterStartsAt2, 3)
  }

  /**
   * spring
   * ------
   * March 1 to May 31
   */
  const springStartsAt = new Date(currentYear, 2, 1, 0, 0, 0, 0)
  const springInterval = {
    start: springStartsAt,
    end: addMonths(springStartsAt, 3)
  }

  /**
   * summer
   * ------
   * June 1 to August 31
   */
  const summerStartsAt = new Date(currentYear, 5, 1, 0, 0, 0, 0)
  const summerInterval = {
    start: summerStartsAt,
    end: addMonths(summerStartsAt, 3)
  }

  /**
   * fall
   * ----
   * September 1 to November 30
   */
  const fallStartsAt = new Date(currentYear, 8, 1, 0, 0, 0, 0)
  const fallInterval = {
    start: fallStartsAt,
    end: addMonths(fallStartsAt, 3)
  }

  if (
    isWithinInterval(date, winterInterval1) ||
    isWithinInterval(date, winterInterval2)
  ) {
    return 'winter'
  } else if (isWithinInterval(date, springInterval)) {
    return 'spring'
  } else if (isWithinInterval(date, summerInterval)) {
    return 'summer'
  } else if (isWithinInterval(date, fallInterval)) {
    return 'fall'
  } else {
    return ''
  }
}

