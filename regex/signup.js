$(function(){
    $("#signupForm").validate({
        //검증할 규칙 rules 명시-각 요소의 이름 사용
        rules:{
            username:{//필수,2~4
                required : true,
                minlength : 2,
                maxlength : 4
            },
            password:{
                required : true,
                rangelength :[8,15]
                // minlength : 8,
                // maxlength : 15
            },
            confirm_password:{
                required : true,
                rangelength :[8,15],
                equalTo : "#password"
            },
            email:{
                required : true,
                email : true
            },
            policy:{
                required : true
            },
            topic:{
                required : "#newsletter:checked",
                minlength : 2
            }
        },
        messages:{//개발자가 우너하는 메세지 보여주기
            username:{//필수,2~4
                required : "이름은 필수 요소 입니다.",
                minlength : "이름은 최소 2자리여야 합니다.",
                maxlength : "이름은 최대 4자리까지 허용됩니다."
            },
            password:{
                required : "비밀번호는 필수 요소 입니다.",
                rangelength :"비밀번호는 최소8자리에서 15자리까지 허용됩니다."
                // minlength : 8,
                // maxlength : 15
            },
            confirm_password:{
                required : "비밀번호는 필수 요소 입니다.",
                rangelength :"비밀번호는 최소8자리에서 15자리까지 허용됩니다.",
                equalTo : "이전 비밀번호와 맞지 않습니다."
            },
            email:{
                required : "이메일은 필수 요소 입니다.",
                email : "이메일 형식과 맞지 않습니다."
            },
            policy:"우리의 정책에 동의를 필요로 합니다.",
            topic: "관심사를 적어도 2개는 표시해야합니다."
            
        },
        errElement:"em",
        errorPlacement : function(error,element){
            error.addClass("help-block");//<error class='help-block'~>
            if(element.prop("type")=="checkbox"){
                error.insertAfter(element.next("label"));
            }else{
                error.insertAfter(element);
            }
        }

    });
    //newsletter 클릭하면 하단에 메일링 리스트 보여주기
    $("#newsletter").click(function(){
       if($("#newsletter_topics").css("display")==="none"){
            $("#newsletter_topics").css("display","block");
       }else{
        $("#newsletter_topics").css("display","none");

       }
    })
})