count_word <- function(string) {
  word_count <- length(unlist(strsplit(string, '\\s+')))
  kanji_count <- length(unlist(strsplit(string, '[^一-龥ぁ-んァ-ン]&[\\s]?')))
  max_count = max(kanji_count, word_count)
  return (max_count)
}