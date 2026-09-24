package com.genzeetech.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class GenzeeTechApplication {
    public static void main(String[] args) {
        SpringApplication.run(GenzeeTechApplication.class, args);
    }
}
