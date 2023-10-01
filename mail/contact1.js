
    $(function() {
        $("form[name='sentMessage']").validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Vui lòng nhập tên của bạn"
                },
                email: {
                    required: "Vui lòng nhập địa chỉ email",
                    email: "Vui lòng nhập đúng định dạng email"
                },
                subject: {
                    required: "Vui lòng nhập chủ đề"
                },
                message: {
                    required: "Vui lòng nhập lời nhắn"
                }
            },
            submitHandler: function(form) {
                // Form validation passed, submit the form
                form.submit();
            }
        });
    });

