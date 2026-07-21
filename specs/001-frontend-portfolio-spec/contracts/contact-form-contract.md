# Contact Form Contract

## Purpose

Define the request, validation, and response behavior for portfolio contact submission via Formspree.

## Input Payload Contract

```text
ContactPayload {
  name: string
  email: string
  message: string
}
```

## Validation Rules

- `name`: required, trimmed, minimum 2 characters
- `email`: required, valid email format
- `message`: required, trimmed, minimum 10 characters, maximum 2000 characters

Validation errors must be localized and mapped to specific fields.

## Submission State Contract

```text
idle -> validating -> submitting -> success
                         └-------> error -> validating (retry)
```

## Formspree Integration Contract

- Form endpoint is loaded from environment variable at runtime.
- Submission uses standard HTTP POST request with payload fields.
- While `submitting`, form controls are disabled and loading indicator is displayed.
- On `success`, show localized success message and clear fields.
- On `error`, show localized recoverable error and preserve user input.

## Error Handling Contract

- Network timeout/failure must transition to `error`.
- Non-success response must transition to `error`.
- Error state must expose retry action without full page reload.

## Accessibility Contract

- Each field must have associated label and error message binding.
- Focus moves to first invalid field after validation failure.
- Success/error announcements must be readable by assistive technologies.
