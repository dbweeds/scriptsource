function checkpass(password){
    var reg = /(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,15}$/;
        if(!reg.test(password.val())){
            alert("비밀번호를 다시 입력하세요.");
            return false;
        }
        return true;
}
$(function(){
    //아이디 영대소문자 허용, 숫자 허용,6~12자리
    //비밀번호 영대,소문자 허용,숫자허용,특수문자 허용,8~15
    //비밀번호 확인 위 규칙과 동일하고 이전비밀번호와 일치하는지확인
    //gender 무조건하나선택
    //이메일형식에 맞는지확인
    //모바일 -없게 11자리
    //취미 최소하나선택
    
    $("#userid").change(function(){
        var reg = /(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;
        if(!reg.test($(this).val())){
            alert("아이디를 확인하세요.");
            $(this).focus();
            $(this).select();
            return false
        }
    });
    $("#userpw").change(function(){
        if(!checkpass($("#userpw"))){
            $(this).focus();
            $(this).select();
            return false;
    }
    });
    $("#confirmpwd").change(function(){
        if(checkpass($("#confirmpwd"))){
            $(this).focus();
            $(this).select();
            return false;
        }else if($(this).val()!=$("#userpw").val()){
                alert("비밀번호와 일치하지 않습니다.");
                $(this).focus();
                $(this).select();
                return false
            }
        });
        $("#email").change(function(){
            var reg =  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/; 
            if(!reg.test($(this).val())){
                alert("이메일를 확인하세요.");
                $(this).focus();
                $(this).select();
                return false
            }
        });
        $("#mobile").change(function(){
            // var reg = /^01\d{8,9}$/;
            var reg = /^\d{3}\d{4}\d{4}$/;
            if(!reg.test($(this).val())){
                alert("핸드폰번호를를 확인하세요.");
                $(this).focus();
                $(this).select();
                return false
            }
        });
        $(":radio[name='gender']").focus(function(){
            if(!$(this).is(":checked")){
                alert("성별을 확인해 주세요");
                $("#gender_m").prop("checked",true);
                return false;
            }
        });
        // $(":checkbox[name='hobby']").focus(function(){
        //     if(!$(this).is(":checked")){
        //         alert("취미를 확인해 주세요");
        //         $("#movie").prop("checked",true);
        //         return false;
        //     }
        // });
        $("#join").submit(function(e){
            e.preventDefault();

            if(!$("input[name='hobby']").is(":checked")){
                alert("취미를 한개 이상 선택해 주세요");
                return false;
            }
            e.submit();
        });
})