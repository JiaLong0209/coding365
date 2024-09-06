# Design patterns 


## Creational Patterns:

### Singleton

* Purpose: Ensure a class has only one instance and provide a global point of access to it.
* Use When: You need exactly one instance of a class, like managing a shared resource (e.g., configuration manager).

### Factory Method

* Purpose: Define an interface for creating objects, but let subclasses alter the type of objects that will be created.
* Use When: The exact type of the object to be created depends on runtime conditions or user input.

### Abstract Factory

* Purpose: Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
* Use When: You need to create a group of related objects that should be used together.

### Builder

* Purpose: Separate the construction of a complex object from its representation, allowing the same construction process to create different representations.
* Use When: The creation of an object involves several steps and can have different representations.

### Prototype

* Purpose: Create new objects by copying an existing object, known as the prototype.
* Use When: You want to avoid the cost of creating objects the standard way, or when creating new instances dynamically based on runtime conditions.

## Structural Patterns:

### Adapter

* Purpose: Convert the interface of a class into another interface clients expect, allowing classes with incompatible interfaces to work together.
* Use When: You want to use an existing class, but its interface is not compatible with the rest of your code.

### Bridge

* Purpose: Separate an object’s abstraction from its implementation so that both can vary independently.
* Use When: You need to avoid a permanent binding between an abstraction and its implementation, or when both need to be extended independently.

### Composite

* Purpose: Compose objects into tree structures to represent part-whole hierarchies. Allows clients to treat individual objects and compositions of objects uniformly.
* Use When: You want to represent a part-whole hierarchy of objects, and you want to treat all objects in the structure uniformly.

### Decorator

* Purpose: Attach additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality.
* Use When: You want to add behavior to objects without affecting other objects of the same class.

### Facade

* Purpose: Provide a unified interface to a set of interfaces in a subsystem, making it easier to use.
* Use When: You need to simplify interactions with a complex subsystem.

### Flyweight

* Purpose: Use sharing to support large numbers of fine-grained objects efficiently.
* Use When: You have a large number of similar objects that could benefit from shared state to reduce memory usage.

### Proxy

* Purpose: Provide a surrogate or placeholder for another object to control access to it.
* Use When: You need to control access to an object or reduce the cost of accessing it (e.g., lazy initialization, access control).

## Behavioral Patterns:
Chain of Responsibility


### Purpose: Pass a request along a chain of handlers, allowing each handler to either process the request or pass it on.
Use When: You have multiple objects that can handle a request, but the handler isn't known until runtime.
Command

* Purpose: Encapsulate a request as an object, allowing parameterization of clients with queues, requests, and operations.
* Use When: You need to issue requests to objects without knowing the operation being requested or the receiver.

### Interpreter

* Purpose: Define a grammar for a language and an interpreter that uses the grammar to interpret sentences in the language.
* Use When: You need to interpret sentences in a language or implement a simple scripting language.

### Iterator

* Purpose: Provide a way to access elements of an aggregate object sequentially without exposing its underlying representation.
* Use When: You need to traverse a collection without exposing its internal structure.

### Mediator

* Purpose: Define an object that encapsulates how a set of objects interact, promoting loose coupling.
* Use When: You have complex communications between multiple objects, and you want to reduce the dependencies between them.

### Memento

* Purpose: Capture and externalize an object’s internal state without violating encapsulation, allowing it to be restored later.
* Use When: You need to save and restore the state of an object without exposing its internals.

### Observer

* Purpose: Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
* Use When: You have an object that changes state and other objects need to be notified of the changes.

### State

* Purpose: Allow an object to alter its behavior when its internal state changes.
* Use When: An object’s behavior is determined by its state, and it must change its behavior at runtime depending on that state.

### Strategy

* Purpose: Define a family of algorithms, encapsulate each one, and make them interchangeable.
* Use When: You want to define a class that can change its behavior dynamically by switching between different algorithms.

### Template Method

* Purpose: Define the skeleton of an algorithm in a method, deferring some steps to subclasses.
* Use When: You have a base class that defines the structure of an algorithm, but subclasses should implement specific steps.

### Visitor

* Purpose: Represent an operation to be performed on elements of an object structure, allowing new operations to be defined without changing the elements themselves.
* Use When: You need to perform operations on elements of a complex object structure, and you want to avoid polluting the element classes with these operations.
