# 2022Coding365

**Week 4 - 8/25**

Practice using constructor initialization list and lambda function

To keep our cute pets, we put them in our ***Yard***. \
And we add a *kind* label to different kinds of pets, so we can identify them under polymorphism. \
*Dog*s' *kind* label are initially set as `"DOG"`, and *Cat*s are `"CAT"`. \
In this assignment, we keep working on the codes of assignment 07. \

We provide parts of the codes. \
**Clone** or **download** this repository and put them in your homework file.

**Soure tree**

You will have the following folder structure.

```
├── cat.h
├── dog.h
├── pet.h
├── yard.h
├── ut_cat.h
├── ut_dog.h
├── ut_main.cpp
├── ut_yard.cpp
└── makefile
```
#### Pet, Cat and Dog

In *Pet*, three data members: `_kind`, `_name` and `_weight` are set to private. \
Don't change them to protected or public; modify *cat* and *dog* so that they work properly. \
You'll need to use the *constructor initialization list* to initialize those data \
and maybe add a protected member function in *Pet*, \
so function `feed()` of *Cat* and *Dog* can manage their weight growth correctly.

In *Pet*, *Cat* and *Dog*, each of them has a private static data member `_amount`. \
Once the object is created, the amount will increase 1; \
when the object is deleted, the amount will decrease 1. \
For places where the `_amount` should be added or redused,  you can refer to *src/pet.h* in constructor and destructor.
You need to modify `_amount` by yourself since the constructor and destructor that C++ provided won't manipulate the value for you. \
It's your work to change their value correctly. \
The static member function `amount()` is used to check whether all objects are destructed properly. \
All the test codes of this part are already written in *test/ut_\*.h*, you don't have to modify them. \
Your work is to make sure that you manage the memory well and pass the tests.

#### Yard

In *Yard*, there's a template function called `getPetWithCondition()`. \
We pass customized condition function as parameter, and it'll return pets in our yard which match the condtion. \
You are required to pass three kinds of condition functions: \
normal function, class that overloads function-call operator(a.k.a. functor) and lambda function. \
Since *Yard* stores pointer to Pets and handles their lifetime, you'll have to write copy constructor, copy assignment and destructor. \
We encourage you to use refactor technique called [*Extract Method*](https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E5%95%8F%E9%A1%8C%E8%A7%A3%E7%AD%94%E9%9B%86/%E5%B0%87%E9%87%8D%E8%A6%86%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%AE%8A%E6%88%90-function-%E7%9A%84refactor-extract-method-932875e69610) to copy or delete, the priciple of Don't Repeat Yourself (D.R.Y.).

- `Yard::addPet()`

```
void addPet(Pet * pet){
    _pets.push_back(pet);
}
```

**Week 4 - 8/23**

- Sorting triangles, circles and polygons
  - Elements in an vector (or array) must be of the same type. What type should we put in for ??? Triangle? Polygon? Or what?
  - "A Triangle is a Shape" and "a Polygon is a Shape". So:
    - Create a Shape class with operations to compute area and perimeter
    - derive (inherit) Triangle from Shape
    - Shape is a base (parent) class; Triangle is a derive class
    - repeat for Polygon
  - but when we get an element out, it must have the right operations:
Triangle uses Triangle::area() and Polygon uses Polygon::area()
    - do this by declare Shape::area() to be virtual
    - in Triangle::area(), put in keyword override
  - To have Triangle and Polygon behaves as a Shape inside the random access container, one must use either a pointer or a reference to Shape
- **Polymorphism**: the capability of std::vector to treat Triangle and Polygon as Shape objects and still able to call the correct area and perimeter function requires three things:
  - Base class Shape with virtual (or pure virtual) area and perimeter;
  - derived Triangle and Polygon publicly from Shape and override area and perimeter; and
  - Triangle objects amd Polygon objects are accessed through pointer to Shape or reference to Shape

**Week 3 - 8/18**

- Base class & Derived Class
- Inheritance & Polymorphism

- Assignment

Practice inheritance

***Cat*** and ***Dog*** can be kept as ***Pet***, and all pets have their own *name* and *weight*. \
Also to take care of the pets, we are able to *feed* them. \
In this assignment, please write a base class called *Pet* and let *Cat* and *Dog* inherit from it.

**Soure tree**

You will have the following folder structure.

```
│── cat.h
│── dog.h
│── pet.h
│── ut_cat.h
│── ut_dog.h
│── ut_main.cpp
└── makefile
```

Though you've seen *Dog* in the previous assignments, to focus on the topic inheritance and polymorphism, \
you don't have to get your code from history.

#### Inheritance

*Pet* should have three member functions
  - `std::string name()`: all pets have their name, and can get by this function
  - `double weight()`: all pets have their weight, and can get by this function
  - `void feed()`: this is a ***pure virtual function***, \
  since different pets have different reactions after *feed*

*Cat* and *Dog* should implement the `feed()` function.

### Tests

Please write tests for the following constructors and member functions
- `Cat::Cat(std::string name, double weight)`
  - take name and weight as the parameters, and initialize the data members correctly (8%)
  - throw exception in type `std::range_error` when having weight under(<) 2 or over(>) 6 (4%)
- `Cat::feed()`
  - weight grows 0.2 every feed (8%)
  - throw exception in type `std::out_of_range` when weight exceeds the limit 6 after feed (4%)
- `Dog::Dog(std::string name, double weight)`
  - take name and weight as the parameters, and initialize the data members correctly (8%)
  - throw exception in type `std::range_error` when having weight under(<) 10 or over(>) 50 (4%)
- `Dog::feed()`
  - weight grows 0.8 every feed (8%)
  - throw exception in type `std::out_of_range` when weight exceeds the limit 50 after feed (4%)

**Week 3 - 8/16**

- vector -> push_back
- Change size of an array through new & delete

**Week 2 - 8/11**

- passed by reference, value, pointer
- operator=, -, +

- Assignment

The goal of this homework is to practice deep copy constructor/assignment, operator overloadding, and familiar with the desgin of class.

**Functions to add or modify:**

```cpp
class Toy {
public:

  // constructor with parameter
  Toy(std::string name) { /* code */ }

  // get the name of the toy
  std::string getName() const { /* code */ }

private:
  // add data meber  
};
```

```cpp
class Dog {
public:

  // copy constructor
  Dog(Dog const & other) { /* code */ }

  // copy assignment
  Dog & operator = (Dog const & other) { /* code */ }

  // add Toy in toy collections
  void addNewToy(Toy const & toyName) { /* code */ }

  // index from 0
  Toy getToy(int index) const { /* code */ }

  // true if heavier than (>) other
  bool isHeavierThan(Dog const & other) const { /* code */ }

private:
  // adjust by yourself
};
```

To test your program, you are required to write **7** test cases in total according to following requirement.

Test the following situations:

- `Toy::getName`
- `Dog::Dog` *(constructor)*
  range: 10 <= weight <= 50
- `Dog::Dog` *(copy constructor)*
- `Dog::operator=` *(copy assignment)*
- `Dog::AddNewToy`
  - allocate dynamically by `new` and `delete` \
  No point if using fixed size array or Standard Template Library.
  - *(hint: you may need the default constructor of Toy)*
- `Dog::getToy`
  - get Toy by index in sequential order. Index start from 0
- `Dog::isHeavierThan`

**Week 2 - 8/9**

- Destructor
- Memory leak & delete
- The free() invalid pointer issue

**Week 1 - 8/4**

- How to write Class
- Constructor
- The copy constructor and copy assignment
- Using **new** for array with variable size

- Assignment

A dog have its name and weight, and can have some toys to play with. \
For this assignment, you have to write a class named ***Dog***, having the above properties as its data member and functions.

Please write tests for the following member functions:

- `Dog::getName`
  - return the name of Dog
- `Dog::getWeight`
  - return the weight of Dog
- `Dog::addNewToy`
  - _toyCollections is a data member of Dog, it's a string array that contains all toys this very dog has. \
  New toy will be added from the behind.
  - _toyAmount records how many toys there are in the _toyCollections. Use it to help you implement the function.
- `Dog::getToy`
  - get toy by index in sequential order. Index start from 0.

You don't have to test the constructor `Dog::Dog() ` and the destructor `Dog::~Dog()`, \
but memory leaks should be avoided.

***Note:***
1. Please implement your test cases reasonably, or you will get no point for that sub-problem.
1. Usage of ***std::string*** might be richer than you thought, refer the [std::string](http://www.cplusplus.com/reference/string/string/?kw=string) document in cplusplus.com to get more information!

**Week 1 - 8/2**

- Intorduction to OOP
- HelloWorld and makefile
- How to use Google test
