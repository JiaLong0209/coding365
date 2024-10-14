local function run_math()
    local math = require('math_utils')
    local function ex1()
        local sum = math.add(100, 50)
        local diff = math.substract(10, 50)
        print("Sum:", sum)
        print("Diff:", diff)
    end
    ex1()
end

local function run_closure()
    local closure = require('closure')

    local function ex1()
        local counter = closure.makeCounter()
        for i = 1, 10, 1 do
            print(counter(i))
        end
    end

    ex1()
end

local function run_obj()
    local Person = require("objects.Person")
    local Employee = require("objects.Employee")
    local Manager = require("objects.Manager")
    Person.test()
    Employee.test()
    Manager.test()

end

local function run()
    -- run_math()
    -- run_closure()
    run_obj()
end


run()

