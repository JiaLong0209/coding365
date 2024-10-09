
local closure = {}

function closure.makeCounter()
    local count = 0

    return function(n)
        count = count + n
        return  count
    end
end

return closure
