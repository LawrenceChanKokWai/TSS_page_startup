package com.tss.app.user;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.tss.app.error.ApiError;
import com.tss.app.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/api/v1/users")
    public GenericResponse createUser(@Valid @RequestBody User user){
        userService.save(user);
        return new GenericResponse("User Saved Successfully");
    }

    @ExceptionHandler({MethodArgumentNotValidException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ApiError handleValidationException(MethodArgumentNotValidException exception, HttpServletRequest request){
        ApiError apiError = new ApiError(400, "Validation Error", request.getServletPath());
        BindingResult result = exception.getBindingResult();
        Map<String, String> validationErrors = new HashMap<>();

        for(FieldError fieldError : result.getFieldErrors()){
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        apiError.setValidationErrors(validationErrors);
        return apiError;
    }
}
