import { z } from "zod";

export const signupSchema = z.object({
	name: z
		.string({
			required_error: "Name is required",
			invalid_type_error: "Name must be a string",
		})
		.min(1)
		.max(255),
	password: z
        .string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string",
        })
        .min(8)
        .max(255),
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .email({ message: "Email is not valid" }),
});

export const signinSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .email({ message: "Email is not valid" }),
	password: z
        .string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string",
        })
        .min(4, {
            message: "Password must be at least 4 characters",
        })
        .max(255, {
            message: "Password must be at most 255 characters",
        }),
});