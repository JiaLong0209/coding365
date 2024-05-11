from typing import NoReturn, Callable, Any

l: list[float | str] = [1,35]

l.append(12)
l.append("hello")
l.append(True)

print(l)

def print_args_and_return(func: Callable) -> Callable:
    def w(*args) -> Any:
        print(f"args: {list(args)}")
        ret = func(*args)
        print(f"return: {ret}")
    return w

@print_args_and_return 
def join_str(a: str, b: str) -> str:
    return f"{a}{b}"

join_str("Goog ", "Value!")

def error(func: Callable[[str, str], str]) -> Callable:
    def w(a: str, b:str) -> NoReturn:
        str = func(a, b)
        raise ValueError(str)
    return w


error(join_str)("Bad ", "Value!")


print(f'This line cannot execute')



