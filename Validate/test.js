function Validator(option) {
    var formElement = document.querySelector(option.form)
    var fuleSelector = [];
    console.log(typeof option.onSubmit.Array);

    if (formElement) {
        var get; 
        formElement.onsubmit = function (e) {
            e.preventDefault(); 
            
            option.rules.forEach(function (rule) {
                
                checkValid(option, rule, fuleSelector)

            })
            if (get == true) {
                var array;  
                if (typeof option.onSubmit === 'function') { 
                    var subonmit = formElement.querySelectorAll('[name]')
                     array = Array.from(subonmit).reduce(function (value, input) {
                        switch(input.type) {
                            case 'checkbox':
                            case 'radio':
                               value[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                                default:
                                    value[input.name] = input.value;
                        }
                        
                        return value
                        
                    },{})
                    option.onSubmit(array)
                } else {
                    option.onSubmit()
                }
                
            }


        }
        
        option.rules.forEach(function (rule) {
            
            if (Array.isArray(fuleSelector[rule.selector])) {
                fuleSelector[rule.selector].push(rule.test)
            } else {
                fuleSelector[rule.selector] = [rule.test]

            } 
            let ruless = formElement.querySelector(rule.selector)
            let subrule = Isgetelement(ruless, option.formGroupSelector).querySelector(option.errorSelector); 
            let father = Isgetelement(ruless, option.formGroupSelector)

            if (ruless) {
                ruless.onblur = function () {

                    var isfrom = checkValid(option, rule, fuleSelector)

                    if (!isfrom) {
                        get = true
                    } else get = false


                }
                ruless.oninput = function () {
                    subrule.innerText = ''
                    father.classList.remove(option.show)
                }


            }
        }

        )


    }
}
  function Isgetelement(element, selector) {
     
       
        while(element.parentElement) {
           if(element.parentElement.matches(selector)) {
                return element.parentElement
           }
           element = element.parentElement
           
        } 
        
   
    
}
function checkValid(option, rule, fuleSelector) {
    const formElement = document.querySelector(option.form)
    let ruless = formElement.querySelector(rule.selector)
    let subrule = Isgetelement(ruless, option.formGroupSelector).querySelector(option.errorSelector);
    let check;

    var subTest = fuleSelector[rule.selector];

    for (var i = 0; i < subTest.length; i++) {
        switch(ruless.type) {
            case 'radio':
            case 'checkbox':    
            check = subTest[i](
                 formElement.querySelector(rule.selector + ':checked')
                 
            )
            console.log(rule.selector)
            break;
            default:
                check = subTest[i](ruless.value)
        }
        
        if (check) break;
    }
    let father = Isgetelement(ruless, option.formGroupSelector)
    if (check) {
        subrule.innerText = check;
        father.classList.add(option.show);

    } else {
        subrule.innerText = ''
        father.classList.remove(option.show)
    }
    return !!check;
}

Validator.isRequiredd = function (selector, message) {
    return {
        selector: selector,
        test: function (value) { 
            return value ? undefined : message || 'bạn chưa nhập thông tin'
        },

    }
}


Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {

            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'vui lòng nhập email'
        }
    }
}



Validator.minLength = function (selector, rule) {
    return {
        selector: selector,
        test: function (value) {

            return value.length >= rule ? undefined : 'bạn chưa nhập đủ 6 ký tự'
        }
    }
}



Validator.isConfirmed = function (selector, callback, message) {
    return {
        selector,

        test: function (value) {
            return callback() === value ? undefined : message || 'nhập lại mật khẩu ở trên chưa chính xác';
        }

    }
}