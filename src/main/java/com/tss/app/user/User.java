package com.tss.app.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull(message = "{tss.constraints.username.NotNull.message}")
    @Size(min = 4, max = 255)
    private String username;

    @NotNull
    @Size(min = 8, max = 255)
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{tss.constraints.password.Pattern.message}" )
    private String password;
}
