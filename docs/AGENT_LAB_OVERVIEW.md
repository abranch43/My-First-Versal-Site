# Agent Lab Overview

## Purpose

The BranchBot Agent Lab is the public-safe agentic-workflow proof repository for Antonio Branch / A+ Enterprise LLC. It documents controls that keep agent-assisted work scoped, reviewable, sanitized, and subject to human authorization.

## Repository Structure

```text
branchbot-agent-lab/
├── .github/
│   ├── copilot-instructions.md
│   └── workflows/public-safety.yml
├── docs/
│   ├── AGENT_LAB_OVERVIEW.md
│   ├── AGENT_SAFETY_BOUNDARIES.md
│   └── COPILOT_AGENT_PROMPTS.md
├── public/index.html
├── test/public-proof.test.js
├── package.json
└── server.js
```

## Evidence Register

| Control | Implemented Evidence | Review Point |
| --- | --- | --- |
| Task decomposition | Prompt patterns require a defined target, constraints, safe-data rules, and pull-request output. | [COPILOT_AGENT_PROMPTS.md](COPILOT_AGENT_PROMPTS.md) |
| Repository-scoped execution | Repository instructions require minimal changes, prohibit sensitive data and private infrastructure references, and prevent direct commits to `main`. | [copilot-instructions.md](../.github/copilot-instructions.md) |
| Human authorization | Agents may draft and propose but may not self-approve, self-merge, publish, contact external systems, or perform business actions. | [AGENT_SAFETY_BOUNDARIES.md](AGENT_SAFETY_BOUNDARIES.md) |
| Public safety CI | The workflow scans for common secrets and private paths, enforces demo labels, and runs proof tests with read-only repository permission. | [public-safety.yml](../.github/workflows/public-safety.yml) |
| Public authority path | The proof index connects Antonio Branch, A+ Enterprise LLC, the cyber/GRC portfolio, the lab, and the BranchOS public definition. | [public/index.html](../public/index.html) |

## Operating Boundary

This lab is not a production application, client system, compliance certification, independent attestation, or disclosure of proprietary BranchOS internals. All public materials must remain synthetic or sanitized, and all external action remains human-authorized.

## Status

The repository contains completed public evidence for controlled task execution, CI safety checking, and human-authorization boundaries. Additional demonstrations should be presented as gaps until code, review history, and safe output are present.
