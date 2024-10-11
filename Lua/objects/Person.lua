
local Person = {}

Person.__index = Person

function Person:new(name, age)
    local instance = setmetatable({}, self)
    instance.name = name or "Unknown"
    instance.class_name = "Person"
    instance.age = age or 0
    return instance
end

function Person:info()
    print("\n-----", self.class_name)
    print("Name: ", self.name)
    print("Age: ", self.age)
end

function Person.test()
    local p = Person:new("yabe", 20)
    p:info()
end

return Person


