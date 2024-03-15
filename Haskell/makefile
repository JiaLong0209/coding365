# Compiler and linker options
CXX = ghc
# CXXFLAGS = -std=c++11 -Wall -Wextra -Wpedantic
# LDLIBS = -lX11 `pkg-config --libs opencv4`

# Source and object files
SRCS = hello.hs
OBJS = $(SRCS:.hs=.o)

# Target executable
TARGET = main

# Rule to build the target executable
# $(TARGET): $(OBJS)
# 	$(CXX) $(CXXFLAGS) $(OBJS) $(LDLIBS) -o $(TARGET)
$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) $(OBJS) $(LDLIBS) -o $(TARGET)

# Rule to build object files from source files
.cpp.o:
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Rule to clean up object files and target executable
clean:
	rm -f $(OBJS) $(TARGET)
