# hello: 0802_hello.cpp   #hello (target): prerequisites
# 	g++ 0802_hello.cpp -o 0802_hello

# ut_all: ut_all.cpp   # make ut_all
# 	g++ ut_all.cpp -o ut_all -lgtest -lpthread



# This is the default target, which will be built when you invoke make
.PHONY: all

# Redefine the target all with the requirement of hello & ut_all

all: ut_all

# This rule tells make how to build HelloWorld from HelloWorld.cpp
# hello: HelloWorld.cpp
# 	g++ HelloWorld.cpp -o HelloWorld


# ut_all: ./0802/ut_all.cpp
# 	g++ -std=c++11 -Wfatal-errors ./0802/ut_all.cpp -o ut_all -lgtest -lpthread

ut_all: ut_all.cpp
	g++ -std=c++11 -Wfatal-errors ut_all.cpp -o ut_all -lgtest -lpthread && ./ut_all

# This rule tells make to delete hello and hello.o
.PHONY: clean
clean:
	rm -f ut_all
	rm -f ut_main


