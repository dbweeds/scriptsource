
$(function(){
    $("#join").validate({
        rules:{
            userid:{
                required : true,
                validId:true
            },
            userpw:{
                required : true,
                validPwd:true
                
            },
            confirmpwd:{
                required : true,
                validPwd:true,
                equalTo:"#userpw"
            },
            gender:{
                required : true
            },
            email:{
                required : true,
                email:true
            },
            mobile:{
                required : true,
                vaildMobile : true
            },
            hobby:{
                required : true
            }

        },
        messages:{
            userid:{
                required : "아이디는 필수요소 입니다."
            },
            userpw:{
                required : "비밀번호는 필수 속성입니다."
            },
            confirmpwd:{
                required : "비밀번호는 필수 속성입니다.",
                equalTo:"이전 비밀번호와 다릅니다."
            },
            gender:"성별을 선택해 주세요.",
            email:{
                required : "이메일은 필수 속성입니다.",
            },
            mobile:{
                required : "핸드폰 번호는 필수 속성입니다."
            },
            hobby:{
                required : "취미를 선택해 주세요."
            }
        }
    });
})

//사용자 검증 메소드 추가
$.validator.addMethod("validId",function(value){
    var reg = /(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;
    return reg.test(value);//true or false return
},"아이디를 영대소문자,숫자의 조합으로 6~12자리로 만들어 주세요");

$.validator.addMethod("validPwd",function(value){
    var reg = /(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,15}$/;
    return reg.test(value);
},"비밀번호를 영대소문자,숫자의 조합으로 8~15자리로 만들어 주세요.")

$.validator.addMethod("email",function(value){
    var reg =  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/; 
    return reg.test(value);
},"이메일을 확인해 주세요.")

$.validator.addMethod("validMobile",function(value){
    var reg = /^\d{3}\d{4}\d{4}$/;
    return reg.test(value);
},"-를 제외한 핸드폰 번호를 확인해 주세요.")
