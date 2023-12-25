# Set the working directory to the location of the file.
setwd("~/Programming/coding365/R/mobileAppStore")

# Load library
library(readr) # read csv
library(dplyr) # mutate, merge, filter functions
library(ggplot2) # draw the graph


# Load the functions.R file, which contains some functions such as count_word
source("functions.R")

# Read csv files
app_data <- read_csv("appleStore.csv")
description_data <- read_csv("descrption.csv")

# Add some new data columns
app_data <- app_data %>%
  mutate(price_TWD = price * 31.1,                        # Price TWD
         is_free = ifelse(price == 0, TRUE, FALSE),       # Is the price free
         size_megabytes = size_bytes / (1024*1024)) %>%   # MB of app size
  merge(description_data, by = 'id') %>%                  # Merge description to app_data
  mutate(desc_length = sapply(app_desc, count_word)) %>%  # Description length
  mutate(size_category = cut(size_megabytes, breaks = c(0, 10, 50, 100, 500, 1000, 5000, Inf),
                             labels = c("0~10MB", "10~50MB", "50~100MB", "100~500MB", "500~1000MB", "1000~5000MB", "5000MB+")))
# Check the structure of app_data
str(app_data)

# Distribution of App Ratings 
ggplot(app_data, aes(x = user_rating)) +
  geom_histogram(binwidth = 0.5, fill = "#f39931", color = "#555555",) +
  labs(title = "Distribution of App Ratings",
       x = "User Rating",
       y = "Number of Apps") +
  theme_minimal()
    

# Calculate the percentage of each app genre
genre_percentage <- app_data %>%
  group_by(prime_genre) %>%
  summarise(app_count = n()) %>%
  mutate(percentage = (app_count / sum(app_count)) * 100)

# Create a bar plot of the percentage distribution of app genres
# The negative sign - is used to sort in descending order.
ggplot(genre_percentage, aes(x = reorder(prime_genre, -percentage), y = percentage, fill = prime_genre)) +
  geom_bar(stat = "identity", width = 1) +
  labs(title = "Percentage Distribution of App Genres",
       x = "App Genre",
       y = "Percentage of Apps") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
    scale_fill_viridis_d()

# Relationship between Price and User Rating
ggplot(app_data, aes(x = price_TWD, y = user_rating)) +
  geom_point() +
  geom_smooth(method = "lm") +
  labs(title = "Relationship between Price and User Rating", x = "Price (TWD)", y = "User Rating")

# Calculate the mean size_megabytes and mean user_rating for each genre
genre_means <- app_data %>%
  group_by(prime_genre) %>%
  summarise(mean_size = mean(size_megabytes), mean_rating = mean(user_rating, na.rm = TRUE))

print(genre_means)

# Create a bar chart of the mean size_megabytes and mean user_rating for each genre
ggplot(genre_means, aes(x = reorder(prime_genre, -mean_size))) +
  geom_bar(aes(y = mean_size), stat = "identity", fill = '#aa3521', alpha = 0.7) +
  labs(title = "Mean Size of Each Genre",
       x = "App Genre",
       y = NULL) +
  scale_y_continuous(sec.axis = sec_axis(~ ., name = "Mean App Size")) +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

ggplot(genre_means, aes(x = reorder(prime_genre, -mean_rating))) +
  geom_bar(aes(y = mean_rating), stat = "identity", fill = '#133183', alpha = 0.7) +
  labs(title = "Mean User Rating of Each Genre",
       x = "App Genre",
       y = NULL) +
  scale_y_continuous(sec.axis = sec_axis(~ ., name = "Mean User Rating")) +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

