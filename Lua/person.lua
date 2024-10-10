
local Person = {}

Person.__index = Person

function Person:new(name, age)
    local instance = setmetatable({}, Person)
    instance.name = name
    instance.age = age
    return instance
end


function Person:info()
    print("Name: " .. self.name .. "\nAge: " .. self.age)
end

local p = Person:new("yabe", 1035)

p:info()








