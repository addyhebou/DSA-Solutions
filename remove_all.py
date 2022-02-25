
def remove_all(lst, value):
    first = 0
    try:
        for i in range(len(lst)):
            if lst[i] != value:
                lst[i], lst[first] = lst[first], lst[i]
            first += 1
        while lst[-1] == value:
            lst.pop()
        return lst
    except ValueError:
        raise ValueError('value error')


lst = [1, 2, 34, 4, 2, 32, 3, 9]
value = 2
print(remove_all(lst, value))
