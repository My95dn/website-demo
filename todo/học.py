# T and T -> T   Nếu điều kiện dùng and mà có 2 cái đúng thì đúng tất
# T and F -> F   Còn có 1 đúng và 1 sai thì sẽ chọn F nếu dùng and
# F and F -> F   Sai hết thì sai hết là điều đương nhiên :v

# T or T -> T    Đối với or, Nếu T hoặc T đúng thì đúng tất
# T or F -> T    nếu có cái đúng hoặc sai thì điều kiện nhận T
# F or F -> F    còn sai hết thì sai tất :v
# Tóm lại là "and" nhận giá trị F và "or" nhận giá trị T

x = 10
res = (x%5==0 and x%2 != 1)