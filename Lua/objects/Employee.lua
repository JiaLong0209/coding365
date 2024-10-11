local Person = require("objects.Person")

local Employee = setmetatable({}, {__index = Person})
Employee.__index = Employee

function Employee:new(name, age, employee_id, position)
    local instance = Person.new(self, name, age)
    instance.employee_id = employee_id or "N/A"
    instance.class_name = "Employee"
    instance.position = position or "Unassigned"
    return instance
end

function Employee:info()
    Person.info(self)
    print("Employee ID: ", self.employee_id)
    print("Position: ", self.position)
end

function Employee.test()
    local yabe = Employee:new("Yabe", 20, "1", "Manager")
    yabe:info()
end

return Employee










