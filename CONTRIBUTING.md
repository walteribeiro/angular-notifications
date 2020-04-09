# Contribution guidelines

## Table of Contents

- [Getting started](#getting-started)
- [How can I help?](#how-can-i-help)
  - [Documentation](#documentation)
  - [Issues](#issues)
    - [Submitting an issue](#submitting-an-issue)
  - [Feedback](#feedback)
  - [Code](#code)    
- [Commiting](#commiting)
  - [Why all these rules?](#why-all-these-rules)
- [Submitting a pull request](#submitting-a-pull-request)

## Getting started

First off, I would like to thank you for taking the time to contribute and make this a better project!

Here I have a set of instructions and guidelines to reduce misunderstandings and make the process of contributing to project as smooth as possible.

I hope this guide makes the contribution process clear and answers any questions you may have.

## How can I help?

Here are some ways you can help along with some guidelines.

### Documentation

As a user, you're the perfect candidate to help us improve our documentation!

Typos, errors, lack of examples and/or explanation and so on, are just some examples of things that could be fixed and/or improved.

You could even make improvements to this guide! :)

While documenting, try to keep things simple and clear.

### Issues

Some issues are created with missing information, without a template, not reproducible, or plain
invalid.

You can make them easier to understand and resolve.

#### Submitting an issue

- Please search for similar issues before opening a new one;
- Use a clear and descriptive title;
- Include as much information as possible;
- Most of the time, the best way to report an issue is a failing test proving it.

### Feedback

The more feedback the better! I'm always looking for more suggestions and opinions on discussions. That's a good opportunity to influence the future direction of this tool.

This includes submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

The [`question`] label is a good place to find ongoing discussions.

### Code

You can use issue labels to discover issues you could help out with:

- [`bug`] are known bugs I'd like to fix;
- [`enhancement`] are features I'm open to include.

The [`help wanted`] label is especially useful.

When you see an issue that is already assigned, please check to see if there isn't someone working on it already (maybe try asking in the issue). This is to prevent unnecessary work for everyone involved.

## Commiting

A commit message can consists of a **header**, **body** and **footer**. The header is the only mandatory part and consists of a type and a subject. The body is used to fully describe the change. The footer is the place to reference any issues or pull requests related to the commit.

```
<type>: <subject>

[optional body]

[optional footer]
```

You also should follow these general guidelines when committing:

- Use the present tense ("Add feature" not "Added feature");
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...");
- Try to answer the following questions:
  - Why is this change necessary?
  - How does it address the issue?
  - What side effects (if any) does this change may have?

Example of a commit message:

```
type: Commit message style guide for Git

The first line of a commit message serves as a summary.  When displayed
on the web, it's often styled as a heading, and in emails, it's
typically used as the subject. As such, you should specify a "type" and
a "subject". The type must be lowercase and one of: chore, ci, docs,
feat, fix, test. For the subject you'll need capitalize it and
omit any trailing punctuation. Aim for about 50 characters, give or
take, otherwise it may be painfully truncated in some contexts. Write
it, along with the rest of your message, in the present tense and
imperative mood: "Fix bug" and not "Fixed bug" or "Fixes bug".
Consistent wording makes it easier to mentally process a list of
commits.

Oftentimes a subject by itself is sufficient. When it's not, add a
blank line (this is important) followed by one or more paragraphs hard
wrapped to 72 characters. Git is strongly opinionated that the author
is responsible for line breaks; if you omit them, command line tooling
will show it as one extremely long unwrapped line. Fortunately, most
text editors are capable of automating this.

Issues and pull request can be referenced on the footer: #3 #12
```

### Why all these rules?

I try to enforce these rules for the following reasons:

- Automatically generating changelog;
- Communicating in a better way the nature of changes;
- Automatically determining a semantic version bump (based on the types of commits);
- Making it easier for people to contribute, by allowing them to explore a more structured commit history.

## Submitting a pull request

Before submitting a pull request, please make sure the following is done:

- [Fork](https://help.github.com/en/articles/fork-a-repo) the repository and create your branch from `master`.
  - Example: `feature/my-awesome-feature` or `fix/annoying-bug`;
- If you’ve fixed a bug or added code that should be tested, **add tests**;
- Ensure the test suite passes;
- Ensure your commit is validated;
