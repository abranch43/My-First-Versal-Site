# BranchBot Agent Lab

Public-safe proof of controlled agentic workflows by **Antonio Branch**, Founder & CEO of **A+ Enterprise LLC**.

**Authority stack:** Antonio Branch → A+ Enterprise LLC → Cybersecurity / GRC → BranchOS / Agentic Systems

## Public Proof Path

1. [Antonio Branch on GitHub](https://github.com/abranch43) — founder identity and public repositories.
2. [A+ Enterprise LLC](https://aplus-enterprise.com) — official commercial front door.
3. [Cybersecurity / GRC Portfolio](https://github.com/abranch43/antonio-branch-cyber-portfolio) — public technical and GRC proof layer.
4. [BranchBot Agent Lab](https://github.com/abranch43/branchbot-agent-lab) — controlled agentic-workflow proof.
5. [BranchOS Public Definition](https://github.com/abranch43/antonio-branch-cyber-portfolio/blob/main/BRANCHOS.md) — authoritative public definition and operating boundary.

## What This Repository Proves

This repository demonstrates how agent-assisted work can be decomposed, constrained, reviewed, and checked before acceptance. It contains sanitized public artifacts only; it is not a production system, certification claim, client implementation, or disclosure of proprietary BranchOS internals.

## Completed Public Proof

| Proof | Problem | Agentic Workflow | Human Authorization Gate | Safe Output | Evidence |
| --- | --- | --- | --- | --- | --- |
| Controlled task execution | Open-ended agent tasks can expand scope or produce unreviewable changes. | Reusable prompts specify the target path, acceptance criteria, prohibited data, and pull-request output. Repository instructions constrain scope and dependencies. | Agent work must arrive through a pull request; agents may not approve or merge their own changes. | Focused documentation or code changes using synthetic, public-safe material. | [Prompt patterns](docs/COPILOT_AGENT_PROMPTS.md), [repository instructions](.github/copilot-instructions.md), and [merged PR #1](https://github.com/abranch43/branchbot-agent-lab/pull/1) |
| CI safety control | Public repositories can accidentally receive credentials, private paths, or unlabeled sample material. | A read-only GitHub Action scans every pull request and push to `main`, verifies demo labeling, and runs the repository tests. | A failed check blocks acceptance until a human reviews and sanitizes the change. | A reproducible pass/fail record without publishing the suspected sensitive value as an artifact. | [Public Safety Checks](.github/workflows/public-safety.yml), [Actions history](https://github.com/abranch43/branchbot-agent-lab/actions), and [merged PR #2](https://github.com/abranch43/branchbot-agent-lab/pull/2) |
| No autonomous external action | Agent output can create business, security, or reputational risk when it acts outside the repository. | The safety policy separates drafting and proposing from publishing, contacting, paying, submitting, or changing external systems. | Explicit human approval is required before external action, workflow/permission changes, publishing, or destructive commands. | Reviewable drafts and pull requests; no autonomous bids, invoices, emails, payments, portal actions, or production changes. | [Agent safety boundaries](docs/AGENT_SAFETY_BOUNDARIES.md) and [Security Policy](SECURITY.md) |

## Public-Safe Boundary

Included:

- synthetic prompts and examples;
- repository-level agent instructions;
- a least-privilege safety workflow;
- a small Node.js site used as a public proof index;
- reviewable documentation of authorization gates.

Excluded:

- client, contract, bid, proposal, financial, VA, health, CUI, or private FCI data;
- credentials, secrets, private paths, internal service URLs, and production configuration;
- proprietary BranchOS production internals or confidential partner information;
- claims of certification, attestation, production deployment, or autonomous authority.

## Review the Controls

- Start with [Agent Safety Boundaries](docs/AGENT_SAFETY_BOUNDARIES.md).
- Inspect [Public Safety Checks](.github/workflows/public-safety.yml) and its [run history](https://github.com/abranch43/branchbot-agent-lab/actions).
- Review [Copilot Agent Prompt Patterns](docs/COPILOT_AGENT_PROMPTS.md) and [repository instructions](.github/copilot-instructions.md).
- Run `npm test` locally to verify the public proof path and repository metadata.

## Local Verification

```bash
npm test
node --check server.js
```

## Commercial Contact

For capability review, teaming, or service inquiries, use the [official A+ Enterprise website](https://aplus-enterprise.com). GitHub remains the public technical-proof layer.
