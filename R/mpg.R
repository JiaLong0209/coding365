library(dplyr)
library(ggplot2)
library(readxl)

doubleFn <- function(x) x * 2

# data()
# View(mpg)

# check the structure of mpg
str(mpg)
glimpse(mpg)

years <- filter(mpg, year > 2005)
print(years, n = 5)

mpg_metric <- mutate(mpg, cty_metric = 0.425 * cty, cty_double = doubleFn(cty))
glimpse(mpg_metric)

# use pipeline (%>% or |>) to pass the result as the first argument of next function
a <- mpg |> 
  filter(year <= 2008) |>
  select(model)
print(a)


