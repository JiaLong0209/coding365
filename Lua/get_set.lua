local monster = {
    name = "Yabe",
    health = 200,
    attack = 100,
}

local function create_accessors(t, key)
    t["get_" .. key] = function () return t[key] end
    t["set_" .. key] = function (value) t[key] = value end
end

local original_key = {}
for k, _ in pairs(monster) do table.insert(original_key, k) end

for _, key  in ipairs(original_key) do
    print(key)
    create_accessors(monster, key)
end

print(monster.get_health())
print(monster.get_attack())

monster.set_attack(999)
print(monster.get_attack())
