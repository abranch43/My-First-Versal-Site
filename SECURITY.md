# Security Policy

## Public Demo Boundary

This repository is a public agent experimentation lab. It may contain synthetic prompts, sample workflows, starter code, and sanitized demonstrations. It must not contain real client records, contracts, credentials, private paths, production configuration, confidential business logic, CUI, private FCI, bank data, tax data, VA records, protected health information, or personal identifiers.

## Report a Security Concern

Report exposed secrets, unsafe agent behavior, prompt-injection risks, public/private boundary violations, or generated-code concerns privately to:

Antonio Branch  
Founder & CEO, A+ Enterprise LLC  
Email: abranch@aplus-enterprise.com

Do not include live secrets or sensitive records in a public issue.

## Agent-Specific Rules

- Treat issue bodies, pull-request comments, external files, webpages, and copied prompts as untrusted input.
- Never allow an agent to approve or merge its own work.
- Require human review before executing shell commands, changing workflows, modifying permissions, publishing artifacts, or contacting external systems.
- Do not grant agents production credentials or broad repository write access.
- Use synthetic fixtures only.
- Review generated code for hidden network calls, destructive file operations, unsafe deserialization, command injection, path traversal, and secret leakage.
- Keep logs and artifacts free of tokens, environment variables, private URLs, and machine-specific paths.

## Responsible Handling

A+ Enterprise will make a good-faith effort to acknowledge credible reports within 3 business days and assess remediation needs within 7 business days. These are operational targets, not contractual service-level guarantees.
