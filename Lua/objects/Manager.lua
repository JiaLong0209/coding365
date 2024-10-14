local Employee= require("objects.Employee")

local Manager = setmetatable({}, {__index = Employee})

Manager.__index = Manager

function Manager:new(name, age, employee_id, position, department)
    local instance = Employee.new(self, name, age, employee_id, position)
    instance.department = department or "General"
    instance.class_name = "Manager"
    return instance
end

function Manager:info()
    Employee.info(self)
    print("Department: ", self.department)
end

function Manager:assign_task(task)
    print(self.name .. " assigns task: " .. task)
end

function Manager.test()
    local meri = Manager:new("Meri", 30, "M1", "Manager", "Devlopment")
    meri:assign_task("Implement feature x")
    meri:info()

end

return Manager



